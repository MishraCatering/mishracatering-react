'use client';
import { useEffect } from 'react';

const ToastNotification = ({ show, message, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 2000 }}>
            <div className={`toast show align-items-center text-white bg-success border-0`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        {message}
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        onClick={onClose}
                        aria-label="Close"
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default ToastNotification;
