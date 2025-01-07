import React from 'react';
import Image from 'next/image';

const BloodDonatePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="relative">
                <div className="relative h-[500px]">
                    <Image
                        src="https://i.postimg.cc/7Zycmxjb/banner.jpg"
                        width={500}
                        height={500}
                        className='rounded-lg shadow-md w-full h-[600px] lg:h-[700px]'
                        alt="Picture of the author"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Save Lives, Donate Blood
                        </h2>
                        <p className="text-lg mb-6">
                            Your blood donation can save up to 3 lives. Join us in making a difference.
                        </p>
                        <a
                            href="#donate"
                            className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition"
                        >
                            Donate Now
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                        About Blood Donation
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                        Blood donation is a simple, safe way to save lives. Each donation can provide critical support for patients in need, such as those undergoing surgeries, cancer treatments, or emergency care.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                        Why Donate Blood?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Save Lives</h3>
                            <p className="text-gray-700">
                                Every blood donation can save up to three lives.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Health Benefits</h3>
                            <p className="text-gray-700">
                                Regular donation helps regulate iron levels and improves cardiovascular health.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Community Impact</h3>
                            <p className="text-gray-700">
                                Contribute to a healthier community and inspire others to join the cause.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Community Impact</h3>
                            <p className="text-gray-700">
                                Contribute to a healthier community and inspire others to join the cause.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Save Life Impact</h3>
                            <p className="text-gray-700">
                                Contribute to a healthier community and inspire others to join the cause.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Stander impact  </h3>
                            <p className="text-gray-700">
                                Contribute to a healthier community and inspire others to join the cause.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section id="donate" className="py-12 bg-blue-100 text-blue-500 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-lg mb-6">
                        Join thousands of others who are helping to save lives. Donate blood today!
                    </p>
                    <a
                        href="#"
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition"
                    >
                        Register Now
                    </a>
                </div>
            </section>


        </div>
    );
};

export default BloodDonatePage;
