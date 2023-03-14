import React from 'react'
import background from '../public/assets/my-picture.png';
import Image from 'next/image';

const About = () => {
    return (
        <div id="about" className='w-full-md:h-screen px-3 flex items-center py-16 font-sans'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
                <div className='flex items-center col-span-2'>
                    <p className='uppercase text-2xl tracking-widest py-4 '>
                        - About -
                    </p>
                </div>
                <div>
                    <p>
                        I spent the first 4 years of my professional experience working in non-profit organizations as a project manager. In 2020, I decided I wanted to challenge myself and I was lucky enough to attend Eleven Fifty Academy for free. I gradutated the Academy in 2021 and starting working for Infosys as an Associate Software Engineer. In my time at Infosys, I have learned and enhanced my skills in HTML, CSS, JavaScript, Angular, ReactJs, Java, Cloud Engineering, and UX/UI Design. 
                    </p>
                    <br></br>
                    <a href="https://github.com/dbuergler/resume/blob/master-branch/Buergler_Daniel_Resume%20(1).pdf" target='_blank'>
                    <button type="button" className="text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">My Resume
                    </button>
                    </a>
                </div>
            <div className='w-full h-20 p-24 m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
                <Image src={background} alt='my-image' className='rounded-full shadow-xl shadow-gray-400 animate-fade-in-down'></Image>
            </div>
            </div>
        </div>
    )
}

export default About;