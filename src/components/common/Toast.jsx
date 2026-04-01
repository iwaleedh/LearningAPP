import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { X, CheckCircle, AlertTriangle, Info, AlertOctagon } from 'lucide-react';
import './Toast.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idCounter = useRef(0);

  const addToast = useCallback((toast) => {
    const id = ++idCounter.current;
    setToasts((prev) => [...prev, { ...toast, id }]);

    if (toast.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 4000);
    }
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }) {
  const { type = 'info', title, message, action } = toast;

  const Icon = {
    success: CheckCircle,
    error: AlertOctagon,
    warning: AlertTriangle,
    info: Info
  }[type] || Info;

  return (
    <div className={`toast toast-${type} animate-slide-in-up`}>
      <div className="toast-icon">
        <Icon size={20} />
      </div>
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        {message && <div className="toast-message">{message}</div>}
      </div>
      {action && (
        <button className="btn btn-sm btn-ghost toast-action" onClick={action.onClick}>
          {action.label}
        </button>
      )}
      <button className="toast-close" onClick={onRemove} aria-label="Close">
        <X size={16} />
      </button>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
