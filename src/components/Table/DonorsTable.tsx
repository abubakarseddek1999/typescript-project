import React from 'react';
import { MdDelete } from "react-icons/md";

// Define the Donor type
type Donor = {
    id: number;
    name: string;
    username: string;
    email: string;
    gender: string;
    phone: string;
};

// Define the Table props type
type TableProps = {
    donors: Donor[];
};

const Table: React.FC<TableProps> = ({ donors }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Username</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Phone</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Gender</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.length > 0 ? (
                        donors.map((donor) => (
                            <tr key={donor.id} className="even:bg-gray-100 odd:bg-gray-50">
                                <td className="px-4 py-3 text-sm">{donor.name}</td>
                                <td className="px-4 py-3 text-sm">{donor.username}</td>
                                <td className="px-4 py-3 text-sm">{donor.email}</td>
                                <td className="px-4 py-3 text-sm">{donor.phone}</td>
                                <td className="px-4 py-3 text-sm">{donor.gender}</td>
                                <td className="px-4 py-3 text-sm">
                                    <MdDelete
                                        className="text-red-500 cursor-pointer"
                                        size={24}
                                        onClick={() => console.log(donor.id)}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={5} // Adjusted colSpan to cover all columns
                                className="px-4 py-3 text-center text-gray-500 text-sm"
                            >
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
