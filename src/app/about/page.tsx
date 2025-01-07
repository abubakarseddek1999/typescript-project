import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Link from 'next/link'

const page: React.FC = () => {
    return (
        <div>
            {/* About School */}
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row items-start p-5 gap-5 space-y-8 ">
                    <div className="flex justify-center md:w-1/2">
                        <Image
                            src="https://i.postimg.cc/7Zycmxjb/banner.jpg"
                            width={500}
                            height={500}
                            className='rounded-lg shadow-md w-full h-[400px]'
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-yellow-500 text-xl font-bold">ABOUT US</h2>
                        <br />
                        <h1 className="text-4xl font-bold mt-2">History of our school</h1>
                        <p className="mt-4">
                            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet.
                        </p>
                        <p className="mt-4">
                            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.
                        </p>
                        <p className="mt-4">
                            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.
                        </p>
                        <Link href="/about/Info">
                            <PrimaryButton label="Learn more"></PrimaryButton>
                        </Link>
                    </div>

                </div>

            </div>

            {/* more information of about*/}
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col-reverse  md:flex-row md:items-start p-5 gap-5 space-y-8 ">
                    <section className="p-5w-full md:w-1/2">

                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>message from CEO</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Doctor Executives</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our Team & Facilities</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our mission</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our Section</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>


                    </section>

                    <section className="md:w-1/2">
                        <Image
                            src="https://i.postimg.cc/gJ0mmfFy/about.webp"
                            width={500}
                            height={600}
                            className='rounded-lg shadow-md w-full h-[400px]'
                            alt="Picture of the author"
                        />

                    </section>

                </div>

            </div>
        </div>
    );
};

export default page;