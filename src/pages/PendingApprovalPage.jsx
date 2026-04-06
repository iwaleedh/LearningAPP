import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
import { useAuth } from '../hooks/useAuth.js';
import { useFeatureFlags } from '../hooks/useFeatureFlags.js';
import {
  Clock, CheckCircle, Upload, FileText, AlertCircle, Loader,
} from 'lucide-react';

const ACCEPTED_PAYMENT_MIME_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]);
const MAX_PAYMENT_FILE_SIZE = 10 * 1024 * 1024;

const PLANS = [
  {
    id: 'monthly',
    label: 'Monthly',
    price: 'MVR 100',
    period: '/month',
    description: 'Full access, billed monthly',
  },
  {
    id: 'annual',
    label: 'Annual',
    price: 'MVR 1,000',
    period: '/year',
    description: 'Full access — save ~17%',
    badge: 'Best Value',
  },
];

const AMOUNT = { monthly: 100, annual: 1000 };

// ── Upload State Machine ──────────────────────────────────────────────────────

function PaymentForm({ onSubmitted }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // object URL for images
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef(null);
  const submissionKeyRef = useRef(crypto.randomUUID());

  const generateUploadUrl  = useMutation(api.paymentRequests.generateUploadUrl);
  const submitPaymentRequest = useMutation(api.paymentRequests.submitPaymentRequest);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const mimeType = (f.type || '').toLowerCase();
    if (!ACCEPTED_PAYMENT_MIME_TYPES.has(mimeType)) {
      setFile(null);
      setPreview(null);
      setError('Please upload a JPG, PNG, WEBP, or PDF payment slip.');
      if (fileRef.current) {
        fileRef.current.value = '';
      }
      return;
    }

    if (f.size > MAX_PAYMENT_FILE_SIZE) {
      setFile(null);
      setPreview(null);
      setError('Payment slips must be 10MB or smaller.');
      if (fileRef.current) {
        fileRef.current.value = '';
      }
      return;
    }

    setFile(f);
    setError('');
    if (mimeType.startsWith('image/')) {
      setPreview(URL.createObjectURL(f));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedPlan) { setError('Please select a subscription plan.'); return; }
    if (!file)          { setError('Please attach your payment slip.'); return; }

    setUploading(true);
    setError('');
    try {
      // 1. Get upload URL from Convex
      const uploadUrl = await generateUploadUrl({
        submissionKey: submissionKeyRef.current,
        mimeType: file.type,
      });

      // 2. POST file to Convex storage
      const res = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': file.type },
        body: file,
      });
      if (!res.ok) throw new Error('Upload failed. Please try again.');
      const { storageId } = await res.json();

      // 3. Save metadata
      await submitPaymentRequest({
        submissionKey: submissionKeyRef.current,
        plan:      selectedPlan,
        amount:    AMOUNT[selectedPlan],
        storageId,
        fileName:  file.name,
        mimeType:  file.type,
      });

      submissionKeyRef.current = crypto.randomUUID();
      onSubmitted?.();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="payment-form">
      {/* Plan selection */}
      <p className="payment-section-label">1. Choose your plan</p>
      <div className="payment-plans">
        {PLANS.map(plan => (
          <button
            key={plan.id}
            className={`payment-plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
            type="button"
          >
            {plan.badge && <span className="payment-plan-badge">{plan.badge}</span>}
            <div className="payment-plan-price">{plan.price}</div>
            <div className="payment-plan-period">{plan.period}</div>
            <div className="payment-plan-label">{plan.label}</div>
            <div className="payment-plan-desc">{plan.description}</div>
          </button>
        ))}
      </div>

      {/* Payment instructions */}
      {selectedPlan && (
        <div className="payment-instructions">
          <p className="payment-section-label">2. Send payment</p>
          <div className="payment-bank-info">
            <div className="payment-bank-row">
              <span className="payment-bank-key">Bank</span>
              <span className="payment-bank-val">BML (Bank of Maldives)</span>
            </div>
            <div className="payment-bank-row">
              <span className="payment-bank-key">Account No.</span>
              <span className="payment-bank-val payment-account-no">7701150229101</span>
            </div>
            <div className="payment-bank-row">
              <span className="payment-bank-key">Amount</span>
              <span className="payment-bank-val">
                {selectedPlan === 'monthly' ? 'MVR 100' : 'MVR 1,000'}
              </span>
            </div>
          </div>
          <p className="payment-bank-note">
            After making the transfer, attach the payment receipt below.
          </p>
        </div>
      )}

      {/* File upload */}
      {selectedPlan && (
        <>
          <p className="payment-section-label">3. Attach receipt</p>
          <div
            className="payment-upload-area"
            onClick={() => fileRef.current?.click()}
            onKeyDown={e => e.key === 'Enter' && fileRef.current?.click()}
            tabIndex={0}
            role="button"
            aria-label="Upload payment slip"
          >
            {file ? (
              <div className="payment-preview">
                {preview
                  ? <img src={preview} alt="Receipt preview" className="payment-preview-img" />
                  : <FileText size={32} className="payment-preview-icon" />
                }
                <span className="payment-preview-name">{file.name}</span>
                <span className="payment-preview-change">Click to change</span>
              </div>
            ) : (
              <div className="payment-upload-placeholder">
                <Upload size={28} />
                <span>Click to upload image or PDF</span>
                <span className="payment-upload-hint">JPG, PNG, WEBP, PDF accepted</span>
              </div>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*,application/pdf"
            className="payment-hidden-input"
            onChange={handleFile}
          />
        </>
      )}

      {error && (
        <div className="payment-error">
          <AlertCircle size={15} /> {error}
        </div>
      )}

      <button
        className="btn btn-primary payment-submit-btn"
        onClick={handleSubmit}
        disabled={uploading || !selectedPlan || !file}
      >
        {uploading
          ? <><Loader size={15} className="spin" /> Uploading…</>
          : <><CheckCircle size={15} /> Submit Payment Slip</>
        }
      </button>
    </div>
  );
}

// ── Submitted State ───────────────────────────────────────────────────────────

function PaymentSubmitted({ request }) {
  return (
    <div className="payment-submitted">
      <div className="payment-submitted-icon"><Clock size={32} /></div>
      <h2 className="payment-submitted-title">Payment Slip Submitted</h2>
      <p className="payment-submitted-msg">
        Your receipt has been sent to the admin for review.
        You'll be approved shortly — no further action needed.
      </p>
      <div className="payment-submitted-details card">
        <div className="payment-bank-row">
          <span className="payment-bank-key">Plan</span>
          <span className="payment-bank-val payment-bank-val--caps">{request.plan}</span>
        </div>
        <div className="payment-bank-row">
          <span className="payment-bank-key">Amount</span>
          <span className="payment-bank-val">MVR {request.amount.toLocaleString()}</span>
        </div>
        <div className="payment-bank-row">
          <span className="payment-bank-key">File</span>
          <span className="payment-bank-val">{request.fileName}</span>
        </div>
      </div>
      <div className="payment-status-badge">
        <span className="pending-status-dot waiting" />
        Under Review
      </div>
    </div>
  );
}

function PaymentUnavailable() {
  return (
    <div className="payment-rejected-banner">
      <AlertCircle size={16} />
      <div>
        <strong>Payment submissions are temporarily unavailable.</strong>
        {' '}Please contact the admin to complete approval manually.
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PendingApprovalPage() {
  const { isSignedIn, signOut, username } = useAuth();
  const { isEnabled, isLoading: flagsLoading } = useFeatureFlags();
  const navigate = useNavigate();

  const statusResult  = useQuery(api.admin.getMyAccountStatus);
  const paymentReq    = useQuery(api.paymentRequests.getMyPaymentRequest);

  const accountStatus = statusResult?.accountStatus ?? 'pending';
  const email         = statusResult?.email ?? '';
  const paymentsEnabled = isEnabled('payments');

  // Auto-redirect when approved
  useEffect(() => {
    if (accountStatus === 'approved') navigate('/', { replace: true });
  }, [accountStatus, navigate]);

  useEffect(() => {
    if (isSignedIn === false) navigate('/', { replace: true });
  }, [isSignedIn, navigate]);

  const isBlocked = accountStatus === 'blocked';

  if (isBlocked) {
    return (
      <div className="pending-page">
        <div className="pending-card card">
          <div className="pending-icon">🚫</div>
          <h1 className="pending-title">Account Suspended</h1>
          <p className="pending-greeting">Hi{username ? `, ${username}` : ''}!</p>
          <p className="pending-message">
            Your account has been suspended by the administrator.
            If you believe this is a mistake, please contact your administrator.
          </p>
          {email && (
            <div className="pending-email">
              <span className="pending-email-label">Signed in as:</span>
              <span className="pending-email-value">{email}</span>
            </div>
          )}
          <div className="pending-status">
            <span className="pending-status-dot blocked" />
            <span className="pending-status-text">Blocked</span>
          </div>
          <button className="btn btn-secondary pending-signout" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Loading state — wait for both queries
  if (flagsLoading || statusResult === undefined || paymentReq === undefined) {
    return (
      <div className="pending-page pending-page--payment">
        <div className="payment-page-card pending-loading-card card">
          <Loader size={32} className="spin pending-loading-spinner" />
          <p className="pending-message">Loading…</p>
        </div>
      </div>
    );
  }

  const hasActiveSubmission = paymentReq && paymentReq.status === 'pending';
  const wasRejected         = paymentReq && paymentReq.status === 'rejected';

  return (
    <div className="pending-page pending-page--payment">
      <div className="payment-page-card card">
        {/* Header */}
        <div className="payment-header">
          <div className="payment-header-icon">📚</div>
          <div>
            <h1 className="payment-title">Subscribe to Living Textbook</h1>
            <p className="payment-subtitle">
              Hi{username ? `, ${username}` : ''}! Complete your subscription to get full access.
            </p>
          </div>
        </div>

        {/* Rejection banner */}
        {wasRejected && (
          <div className="payment-rejected-banner">
            <AlertCircle size={16} />
            <div>
              <strong>Payment not approved.</strong>
              {paymentReq.adminNotes
                ? <> Reason: {paymentReq.adminNotes}</>
                : <> Please resubmit with a valid payment slip.</>
              }
            </div>
          </div>
        )}

        {/* Main content */}
        {hasActiveSubmission
          ? <PaymentSubmitted request={paymentReq} />
          : paymentsEnabled ? <PaymentForm /> : <PaymentUnavailable />
        }

        {/* Footer */}
        <div className="payment-footer">
          <span>Signed in as {email || username || 'you'}</span>
          <button className="btn btn-ghost btn-sm" onClick={signOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
}
