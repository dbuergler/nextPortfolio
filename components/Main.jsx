import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Emoji from '../public/assets/projects/emoji.svg'

const Main = () => {
    return (
        <div className= 'w-full h-screen text-center font-sans'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 animate-fade-in-down'>Building a better tomorrow for all</p>
                        <h1 className='py-4 text-gray-700 font-sans'>
                        Hi, I&#39;m <span className='text-[#4361EE]'> Daniel</span>
                        </h1>
                    <h1 className='py-2 text-gray-700 font-sans'>A Developer and Designer</h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        I design and develop experiences that make people’s lives simpler through Web and Mobile apps.
                        Currently, I’m focused on building responsive front-end web applications and designing functional prototypes.
                    </p>
                    <div className='flex items center justify-between max-w-[330px] m-auto py-4'>
                        <a href='https://www.linkedin.com/in/danielbuergler/' target='_blank' rel='noreferrer'>
                        <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin color='#4361EE'/>
                        </div>
                        </a>
                        <a href='https://github.com/dbuergler' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub color='#4361EE'/>
                        </div>
                        </a>
                        <Link href='/#contact' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail color='#4361EE'/>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;