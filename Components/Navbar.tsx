import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/all';

const Navbar = () => {
    return (
        <div className="fixed w-full h-3% shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-2% px-3 2xl:px-16">
                <Image src="/assets/images.png" alt="/" width="125" height="10"/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/home">
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
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;