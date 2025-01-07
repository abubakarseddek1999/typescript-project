import React from 'react';
interface JoinusSectionProps {
    heading: string; // Heading text
    subheading: string; // Subheading text
}

const JoinusSection: React.FC<JoinusSectionProps> = ({ heading, subheading }) => {
    return (
        <div>
            {/* Call-to-Action Section */}
            <section className="bg-blue-100  text-blue-800 py-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold">
                    {heading}
                </h2>
                <p className="mt-4 text-lg">
                    {subheading}
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-00 hover:text-blue-700 text-lg rounded-lg">
                    Sign Up Now
                </button>
            </section>

        </div>
    );
};

export default JoinusSection;