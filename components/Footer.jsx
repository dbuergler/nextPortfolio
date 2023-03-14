import React, {useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa';
import Link from "next/link";


const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);




    return (
        <div className='font-sans'>
            <footer class="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Daniel Buergler™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110 scroll-smooth">Home</Link>
        </li>
        <li>
            <Link href="/#about" className="mr-4 hover:underline md:mr-6 uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110 scroll-smooth ">About</Link>
        </li>
        <li>
            <Link href="/#contact" className="mr-4 hover:underline md:mr-6 uppercase underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:scale-110 scroll-smooth">Contact</Link>
        </li>
        <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <button className=" bottom-0 right-0 p-2 bg-blue-600 rounded-2xl" ><FaArrowUp></FaArrowUp></button>
        </div>
      )}
    </div>
    </ul>
</footer>
        </div>
    )
}

export default Footer;