// Modal.tsx

import React from "react";
import Link from 'next/link'

type FormData = {
    name: string;
    email: string;
    phone: string;
    bloodGroup: string;
    gender: string;
    message: string;
};

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    formData: FormData;
    handleSubmit: () => void;
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, formData, handleSubmit }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-xl font-semibold text-center mb-4">Preview Your Details</h2>
                <div className="space-y-4">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
                    <p><strong>Gender:</strong> {formData.gender}</p>
                    <p><strong>Message:</strong> {formData.message || "No message provided"}</p>
                </div>
                <div className="mt-6 flex gap-2 justify-end">
                    <Link href="/register">
                        <button
                            onClick={onClose}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            Edit
                        </button>
                    </Link>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
