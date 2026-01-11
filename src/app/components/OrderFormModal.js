'use client';
import { useState } from 'react';
import { baseURL } from '../lib/constants';

const OrderFormModal = ({ selectedPackage, selectedAddons, totalPrice, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        customer_name: '',
        phone_number: '',
        email: '',
        address: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const payload = {
            ...formData,
            packages: [selectedPackage.id],
            addons: selectedAddons.map(addon => addon.id)
        };

        try {
            const response = await fetch(`${baseURL}/api/orders/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                onSuccess();
                onClose();
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Complete Your Order</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="mb-3 p-3 bg-light rounded">
                                <h6 className="fw-bold mb-2">Order Summary</h6>
                                <div className="d-flex justify-content-between small">
                                    <span>{selectedPackage.name}</span>
                                    <span>₹{selectedPackage.price}</span>
                                </div>
                                {selectedAddons.map(addon => (
                                    <div key={addon.id} className="d-flex justify-content-between small text-muted">
                                        <span>+ {addon.name}</span>
                                        <span>₹{addon.price}</span>
                                    </div>
                                ))}
                                <hr className="my-2" />
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total Price</span>
                                    <span>₹{totalPrice}</span>
                                </div>
                            </div>

                            {error && <div className="alert alert-danger py-2 small">{error}</div>}

                            <div className="mb-3">
                                <label className="form-label small">Full Name</label>
                                <input
                                    type="text"
                                    name="customer_name"
                                    className="form-control"
                                    required
                                    value={formData.customer_name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    className="form-control"
                                    required
                                    pattern="[0-9]{10}"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">Delivery Address</label>
                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="3"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter full address"
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={loading}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Placing Order...
                                    </>
                                ) : (
                                    'Confirm Order'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderFormModal;
