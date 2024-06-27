import React, { createContext, useContext, useState, ReactNode } from 'react';
import './Toast.css';
import { createPortal } from 'react-dom';

type ToastPosition = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
type ToastType = 'info' | 'success' | 'warning' | 'error';

interface Toast {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  className?: string;
  id?: number;
  exiting?: boolean;
}

interface ToastContextType {
  addToast: (toast: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.addToast;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
    const id = Date.now();
    setToasts((prevToasts) => {
      const newToasts = toast.position?.startsWith('bottom')
        ? [{ ...toast, id }, ...prevToasts]
        : [...prevToasts, { ...toast, id }];
      return newToasts;
    });
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
      }, 500); // animation duration
    }, toast.duration || 3000);
  };

  const removeToast = (toast: Toast) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t !== toast));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(<ToastContainer toasts={toasts} onRemoveToast={removeToast} />, document.body)}
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, onRemoveToast }: { toasts: Toast[]; onRemoveToast: (toast: Toast) => void }) => {
  const groupedToasts = toasts.reduce<{ [key: string]: Toast[] }>((acc, toast) => {
    if (!acc[toast.position || 'top-right']) {
      acc[toast.position || 'top-right'] = [];
    }
    acc[toast.position || 'top-right'].push(toast);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedToasts).map(([position, toasts]) => (
        <div key={position} className={`toast-container ${position.split('-')[0]}`}>
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`toast ${toast.type || 'success'} ${
                toast.position || 'top-right'
              } ${toast.className || ''} toast-enter ${toast.exiting ? 'toast-exit' : ''}`}
              onClick={() => onRemoveToast(toast)}
            >
              {toast.message}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
