import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left section: Branding */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Blood Donate</h2>
                        <p className="text-sm text-white">© 2025 MyApp. All rights reserved.</p>
                    </div>

                    {/* Middle section: Navigation links */}
                    <ul className="flex gap-6 text-sm">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Right section: Social media icons */}
                    <div className="flex gap-4 text-white mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-gray-300"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V15.47h-2.54v-2.88h2.54v-2.188c0-2.5 1.492-3.889 3.776-3.889 1.094 0 2.238.195 2.238.195v2.458h-1.26c-1.243 0-1.628.773-1.628 1.562v1.862h2.775l-.443 2.88h-2.332v6.407C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.954 4.569c-.885.394-1.83.661-2.825.779 1.014-.611 1.794-1.574 2.163-2.723-.95.565-2.005.978-3.127 1.2-.897-.952-2.178-1.548-3.594-1.548-2.717 0-4.924 2.209-4.924 4.925 0 .386.044.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.829-.413.112-.849.171-1.296.171-.314 0-.622-.03-.924-.087.631 1.953 2.445 3.377 4.604 3.416-1.685 1.319-3.808 2.107-6.102 2.107-.395 0-.787-.023-1.175-.067C2.905 21.305 6.355 22 9.954 22c11.92 0 18.428-9.867 18.428-18.427 0-.281-.007-.561-.019-.84A13.145 13.145 0 0 0 24 4.59a9.086 9.086 0 0 1-2.046.561z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5a2.48 2.48 0 1 0 0-4.96 2.48 2.48 0 0 0 0 4.96zM.5 24h8.87V8.66H.5V24zM24 24V15.86c0-4.42-2.46-6.48-5.74-6.48-2.65 0-3.8 1.46-4.46 2.49v-2.14h-8.77v15.37H14V15.2c0-2.3.84-4.02 2.94-4.02 1.95 0 2.86 1.55 2.86 4.02V24h8.2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;