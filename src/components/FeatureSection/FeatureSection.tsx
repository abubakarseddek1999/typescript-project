import React from 'react';
interface FeatureSectionProps {
    heading: string; // Heading text

}

const FeatureSection: React.FC<FeatureSectionProps> = ({ heading }) => {
    return (
        <div>
            {/* Features Section */}
            <section className="my-16 px-6 md:px-16">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
                    {heading}
                </h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature One</h3>
                        <p className="mt-4 text-gray-600">
                            Brief description of the feature and how it benefits the user.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature Two</h3>
                        <p className="mt-4 text-gray-600">
                            Brief description of the feature and how it benefits the user.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature Three</h3>
                        <p className="mt-4 text-gray-600">
                            Brief description of the feature and its purpose.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature Four</h3>
                        <p className="mt-4 text-gray-600">
                            Explanation of the feature and its benefits.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature Five</h3>
                        <p className="mt-4 text-gray-600">
                            Explanation of the feature and its benefits.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-blue-500">Feature Six</h3>
                        <p className="mt-4 text-gray-600">
                            Explanation of the feature and its benefits.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;