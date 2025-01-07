"use client";
import DonorForm from "@/components/DonorForm/DonorForm";
import Modal from "@/components/DonorForm/Modal";
import React, { useState } from "react";
import jsPDF from "jspdf";
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
        // Create the PDF
        const doc = new jsPDF();

        doc.text("Form Details", 20, 20);
        doc.text(`Name: ${formData.name}`, 20, 30);
        doc.text(`Email: ${formData.email}`, 20, 40);
        doc.text(`Phone: ${formData.phone}`, 20, 50);
        doc.text(`Blood Group: ${formData.bloodGroup}`, 20, 60);
        doc.text(`Gender: ${formData.gender}`, 20, 70);
        doc.text(`Message: ${formData.message || "No message provided"}`, 20, 80);

        // Save the PDF and trigger download
        doc.save(`${formData.name}_details.pdf`);

        // Show SweetAlert for successful submission
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });

        // Reset form and close the modal
        setFormData({
            name: "",
            email: "",
            phone: "",
            bloodGroup: "",
            gender: "",
            message: "",
        });
        setIsModalOpen(false);  // Close the modal
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
