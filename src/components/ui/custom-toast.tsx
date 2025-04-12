
import React, { createContext, useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastProps = {
  id: string;
  title?: string;
  description?: string | React.ReactNode;
  action?: React.ReactNode;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
};

interface ToastContextType {
  toasts: ToastProps[];
  addToast: (props: Omit<ToastProps, 'id'>) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (props: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, ...props };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    if (props.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, props.duration || 5000);
    }
    
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  const toast = (props: Omit<ToastProps, 'id'>) => {
    return context.addToast(props);
  };

  toast.dismiss = (id: string) => {
    context.removeToast(id);
  };
  
  return toast;
}

function ToastContainer() {
  const { toasts, removeToast } = useContext(ToastContext)!;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

function Toast({ 
  id, 
  title, 
  description, 
  action, 
  type = 'default', 
  onClose 
}: ToastProps & { onClose: () => void }) {
  const typeStyles = {
    default: "bg-white border-gray-200",
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    warning: "bg-yellow-50 border-yellow-200",
    info: "bg-blue-50 border-blue-200"
  };

  const iconColors = {
    default: "text-gray-800",
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500"
  };

  return (
    <div
      className={cn(
        "rounded-lg border p-4 shadow-md w-[350px] animate-in slide-in-from-right-5 data-[state=closed]:animate-out data-[state=closed]:fade-out",
        typeStyles[type]
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {title && (
            <h3 className="font-medium text-sm">{title}</h3>
          )}
          {description && (
            <div className="text-sm mt-1 opacity-90">{description}</div>
          )}
        </div>
        <button
          onClick={onClose}
          className={cn("ml-4 h-6 w-6 rounded-full flex items-center justify-center", iconColors[type])}
        >
          <X size={16} />
        </button>
      </div>
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}

export { Toast };
