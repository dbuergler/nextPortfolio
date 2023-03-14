import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';




const NavBar = () => {
    const [nav, setNav] = useState(false);
    


    const handleNav = () => {
        setNav(!nav);
    };
    
    


    return(
        <div className="fixed-w-full h-20 shadow-xl z-[100] bg-[white] font-sans ">
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                
                    <Image src='/../public/assets/Blank-1.png' alt='/' width='125' height='50'></Image>
                
            <div>
                <ul className="hidden md:flex">
                    <Link href='/' className="ml-10 text-sm uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110"  >Home
                    </Link>
                    <Link href='/#about' className="ml-10 text-sm uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110"  >About
                    </Link>
                    <Link href='/#skills' className="ml-10 text-sm uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110"  >Skills
                    </Link><Link href='/#projects' className="ml-10 text-sm uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110"  >Projects
                    </Link><Link href='/#contact' className="ml-10 text-sm uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110"  >Contact
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden cursor-pointer">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
                <div className={nav ? "fixed left-0 top-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src='/../public/assets/Blank-1.png' alt='/' width='87' height='35'></Image>
                                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose/>
                                </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Building a better tomorrow for all!</p>
                        </div>
                    </div>
                <div className="py-4 flex flex-col font-sans">
                    <ul className="uppercase">
                        <Link href='/'>
                        <li className="py-4 text-sm hover:scale-110 ease-in duration-300">
                            Home
                        </li>
                        </Link>
                        <Link href='/#about'>
                        <li className="py-4 text-sm hover:scale-110 ease-in duration-300">
                            About
                        </li>
                        </Link>
                        <Link href='/#skills'>
                        <li className="py-4 text-sm hover:scale-105 ease-in duration-300">
                            Skills
                        </li>
                        </Link>
                        <Link href='/#projects'>
                        <li className="py-4 text-sm hover:scale-105 ease-in duration-300">
                            Projects
                        </li>
                        </Link>
                        <Link href='/#contact'>
                        <li className="py-4 text-sm hover:scale-105 ease-in duration-300">
                            Contact
                        </li>
                        </Link>
                    </ul>
                    
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#4361EE]">Let's Connect</p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar;