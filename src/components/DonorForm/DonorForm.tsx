// DonorForm.tsx

import React from "react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    bloodGroup: string;
    gender: string;
    message: string;
};

type DonorFormProps = {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
};

const DonorForm: React.FC<DonorFormProps> = ({ formData, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="bg-white rounded-lg p-8 lg:py-12 w-full container shadow-2xl">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-2">
                    Blood Group
                </label>
                <select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                >
                    <option value="">Select your blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                    Gender
                </label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message (Optional)
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    placeholder="Write a message (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
                Preview Your Details
            </button>
        </form>
    );
};

export default DonorForm;
