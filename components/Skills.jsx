import React from 'react'
import Image from 'next/image';
import HTML from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png';
import JavaScript from '../public/assets/skills/javascript.png';
import Angular from '../public/assets/skills/angular.png';
import ReactImg from '../public/assets/skills/react.png';
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full '>
            <div className='max-w-[1240px] mx-auto px-3 py-20'>
                <p className='uppercase text-2xl tracking-widest py-4'>
                    - Skills -
                </p>
                <div className='flex flex-row'>
                <div className= 'flex flex-row gap-8'>
                    <div className='p-6' >
                        <div className=' justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTML} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'flex flex-row  gap-8'>
                    <div className='p-6' >
                        <div className=' justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSS} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'flex flex-row gap-8 place-items-auto'>
                    <div className='p-6' >
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JavaScript} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'flex flex-row gap-8'>
                    <div className='p-6' >
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Angular} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'flex flex-row gap-8'>
                    <div className='p-6' >
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ReactImg} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'flex flex-row gap-8'>
                    <div className='p-6' >
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={AWS} className='w-24 hover:animate-pulse'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;