"use client";

import Table from "@/components/Table/DonorsTable";
import React, { useState, useEffect } from "react";

// types/UserDonor.ts
export type UserDonor = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    gender: string;
};

// types/ApiDonor.ts
export type ApiDonor = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    gender?: string;
};

const Page: React.FC = () => {
    const [donors, setDonors] = useState<UserDonor[]>([]);
    const [filteredDonors, setFilteredDonors] = useState<UserDonor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [selectedGender, setSelectedGender] = useState<string>("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data: ApiDonor[]) => {
                const dataWithGender = data.map((donor) => ({
                    ...donor,
                    gender: Math.random() > 0.5 ? "male" : "female",
                }));
                setDonors(dataWithGender);
                setFilteredDonors(dataWithGender);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let filteredData = donors;
        if (search) {
            filteredData = filteredData.filter((donor) =>
                donor.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (selectedGender) {
            filteredData = filteredData.filter(
                (donor) => donor.gender === selectedGender
            );
        }
        setFilteredDonors(filteredData);
    }, [search, selectedGender, donors]);

    if (loading) {
        return (
            <div className="h-screen bg-gray-100 flex justify-center items-center">
                <h2 className="text-4xl font-bold text-blue-600">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-100 py-10 px-5">
            <h2 className="mb-8 tracking-wider text-4xl font-bold text-center text-blue-600">
                Blood Donor Data
            </h2>
            <div className="mb-5 flex gap-5 justify-center">
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                >
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <Table donors={filteredDonors} />
        </div>
    );
};
export default Page;
