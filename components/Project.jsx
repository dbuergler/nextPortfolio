import React from 'react'
import Comic from '../public/assets/projects/pow.png';
import Image from 'next/image';
import Remodel from '../public/assets/projects/logo_200x200.png';
import Bar from '../public/assets/projects/18ec5e9026714a70b6bc511e850335e8 (1).png';
import Path from '../public/assets/projects/Create Your Path Academy-1 (1).png';
import Vax from '../public/assets/projects/Screenshot 2022-12-20 135820.png';
import { useCallback } from 'react';


const Projects = () => {
    
  const onButtonClick = useCallback(() => {
    window.open("https://mycomixappclient.herokuapp.com");
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("https://jbhomeremodelingclient.herokuapp.com/");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/lPjw7WYALA6tDx5uvDhdMi/Fletcher's-App?page-id=289%3A9&node-id=289%3A10&starting-point-node-id=289%3A10"
    );
  }, []);

  const onButton3Click = useCallback(() => {
    window.open(
      "https://xd.adobe.com/view/01a5540a-271b-45e0-ae32-7031d69675c2-54f6/"
    );
  }, []);

  const onButton4Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/pvw0H6UDlbopMtLNUw6Ca3/VaxGuide-App?page-id=0%3A1&node-id=36%3A4599&viewport=429%2C2182%2C2&scaling=scale-down&starting-point-node-id=36%3A4599"
    );
  }, []);

  const onButton5Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/gqzrpjNuFE7iSKzqvbDllv/VaxWebsite?page-id=1%3A2&node-id=5%3A4737&starting-point-node-id=5%3A4527"
    );
  }, []);

    return (
        <div id='projects' className='w-full font-sans'>
            <div className='max-w-[1240px] mx-auto px-3 py-16'>
                <p className='uppercase text-2xl tracking-widest py-8 '>
                    - Projects -
                </p>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                        
                            <Image src={Comic} className=' object-contain p-4 h-72 w-96 hover:scale-110 ease-in-out duration-300'></Image>
                        
                        <div className='p-10'>
                            <h5 className='font-sans '> - Comix Book App -</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-10">My first project using API's with ReactJs. This app allows
                    customers to sign up or log in to search for comics, edit
                    comics, delete comics, and read comics of their choice.</p>
                            
                            <button onClick={onButtonClick} className='text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            
                        </div>
                    </div>
                    
                        <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                            
                                <Image src={Remodel} className="object-contain h-72 w-96 hover:scale-110 ease-in-out duration-300"></Image>
                            
                            <div className='p-10'>
                                <h5 className='font-sans p-1 px-0'> - JB Home Remodeling App-</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-14">My Final project at Eleven Fifty Academy is where I built a
                        construction management website that uses ReactJs,
                        TypeScript, and Ant Design.</p>
                                
                                <button onClick={onButton1Click} className=' text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                
                            </div>
                        </div>
                    
                    <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                        
                        <Image src={Bar} className="object-fill h-72 w-96 hover:scale-110 ease-in-out duration-300 rounded-lg"></Image>
                        
                        <div className='p-10'>
                            <h5 className='font-sans p-1 px-0'> - Fletcher's Garden Bar -</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-14">My Final project at Eleven Fifty Academy is where I built a
                    construction management website that uses ReactJs,
                    TypeScript, and Ant Design.</p>
                            
                            <button onClick={onButton2Click} className=' text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            
                        </div>
                    </div>

                    <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                            
                                <Image src={Path} className="object-contain h-72 w-96 bg-black rounded hover:scale-110 ease-in-out duration-300"></Image>
                            
                            <div className='p-10'>
                                <h5 className='font-sans p-1 px-0 '> - Create Your Path Academy -</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-14">My Final project at Eleven Fifty Academy is where I built a
                        construction management website that uses ReactJs,
                        TypeScript, and Ant Design.</p>
                                
                                <button onClick={onButton3Click} className=' text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                
                            </div>
                        </div>

                        <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                            
                                <Image src={Vax} className="object-fill h-72 w-96 rounded-lg hover:scale-110 ease-in-out duration-300"></Image>
                            
                            <div className='p-10'>
                                <h5 className='font-sans p-1 px-0'> - VaxGuide Mobile App -</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-14">My Final project at Eleven Fifty Academy is where I built a
                        construction management website that uses ReactJs,
                        TypeScript, and Ant Design.</p>
                                
                                <button onClick={onButton4Click} className=' text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                
                            </div>
                        </div>

                        <div className='max-w-sm bg-white border border-gray-600 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                            
                                <Image src={Vax} className="object-fill h-72 w-96 rounded-lg hover:scale-110 ease-in-out duration-300"></Image>
                            
                            <div className='p-10'>
                                <h5 className='font-sans p-1 px-0'> - VaxGuide Web App -</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-2 pb-14">My Final project at Eleven Fifty Academy is where I built a
                        construction management website that uses ReactJs,
                        TypeScript, and Ant Design.</p>
                                
                                <button onClick={onButton5Click} className=' text-white bg-[#4361EE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg inline-flex items-center  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Project
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;