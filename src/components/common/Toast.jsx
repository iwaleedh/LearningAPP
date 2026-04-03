import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, Info, AlertOctagon } from 'lucide-react';
import './Toast.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idCounter = useRef(0);
  const timersRef = useRef(new Map()); // Map<id, timeoutId> — cleared on remove/unmount

  const addToast = useCallback((toast) => {
    const id = ++idCounter.current;
    setToasts((prev) => [...prev, { ...toast, id }]);

    if (toast.duration !== Infinity) {
      const timerId = setTimeout(() => {
        timersRef.current.delete(id);
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration || 4000);
      timersRef.current.set(id, timerId);
    }
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    // Cancel the auto-dismiss timer if still pending
    const timerId = timersRef.current.get(id);
    if (timerId !== undefined) {
      clearTimeout(timerId);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Clear all pending timers on unmount to prevent setState on unmounted component
  useEffect(() => {
    const timers = timersRef.current;
    
    const handleAppToast = (e) => {
      if (e.detail) addToast(e.detail);
    };
    window.addEventListener('app:toast', handleAppToast);
    
    return () => {
      timers.forEach((timerId) => clearTimeout(timerId));
      timers.clear();
      window.removeEventListener('app:toast', handleAppToast);
    };
  }, [addToast]);

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

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
