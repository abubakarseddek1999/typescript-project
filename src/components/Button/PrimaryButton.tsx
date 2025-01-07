import React from 'react';

interface PrimaryButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    label,
    onClick,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out
                bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg ${className}`}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
