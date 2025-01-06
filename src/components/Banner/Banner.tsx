import React from 'react';
import Image from 'next/image';

interface BannerProps {
    heading: string; // Heading text
    subheading: string; // Subheading text
}

const Banner: React.FC<BannerProps> = ({ heading, subheading }) => {
    return (
        <div>
            <div className="relative " >
                {/* Image source is relative to the public folder */}
                <Image
                    src="https://i.postimg.cc/7Zycmxjb/banner.jpg"
                    width={500}
                    height={500}
                    className='w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover'
                    alt="Picture of the author"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
                    <div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{heading}</h1>
                        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subheading}</p>
                        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
