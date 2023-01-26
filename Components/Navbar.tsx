import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/all';

const Navbar = () => {
    return (
        <div className="md:w-[90%] my-4">
            <div className="flex justify-between items-center w-full h-2% px-3 2xl:px-16">
                {/*<Image src="/assets/images.png" alt="/" width="125" height="10"/>*/}
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> About </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Projects </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Contact </li>
                        </Link>
                    </ul>
                    <div className="hidden md:hidden">
                        {/*<AiOutlineMenu size={25}/>*/}
                    </div>
                </div>
            </div>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                    <div className="flex w-full items-center justify-between">
                        {/*<Image src="/assets/images.png" alt="/" width="87" height="35"/>*/}
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        {/*<AiOutlineClose />*/}
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4"> Lets build something legendary together </p>
                    </div>
                    <div>
                        <ul>
                            <Link href="/">
                                <li className="py-4 text-sm"> Home </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm"> About </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm"> Skills </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm"> Projects </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm"> Contact </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;