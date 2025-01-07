"use client";
import DonorForm from "@/components/DonorForm/DonorForm";
import Modal from "@/components/DonorForm/Modal";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Page: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        gender: "",
        message: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle changes in form inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    // Handle actual submission (show SweetAlert and reset form)
    const handleFinalSubmit = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Information Has Been Submitted!",
            text: "Thank you for sharing your details!",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500
        });
        setIsModalOpen(false);  // Close the modal
        setFormData({
            name: "",
            email: "",
            phone: "",
            bloodGroup: "",
            gender: "",
            message: "",
        });  // Reset the form data
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Become a Donor</h1>
            <p className="text-gray-600 text-center mb-8 max-w-md">
                Join our community of life savers. Share your details to help those in need of blood.
            </p>


            <DonorForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />

            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                formData={formData}
                handleSubmit={handleFinalSubmit}
            />
        </div>
    );
};

export default Page;
