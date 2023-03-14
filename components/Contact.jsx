import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {



    const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ns5txjp', 'template_sydxzfz', form.current, 'P533h3gJjEeFy3q2W')
        .then((result) => {
            toast.success("Successfully submitted message. Talk to you soon!", result.status, result.text )
        }, (error) => {
            toast.error('Form is not submitted. Please fill in all fields and try again', error.status, error.text)
        });
        e.target.reset();
    };





    return (
        <div id="contact" className="container my-24 px-4 mx-auto font-sans">
            <section class="mb-32 text-gray-800 shadow-xl shadow-gray-400 rounded-xl lg:p-8">
                <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <h2 class="text-3xl font-bold mb-6 mt-4">Let's Connect!</h2>
                    <p class="text-gray-500 mb-6">
                    Want to collborate on a project? Have a question about my experience? Just want to chat about life? Connect with me and let's go on this journey together!
                    </p>
                    <div className='flex items-center space-x-4 py-4'>
                  <a
                    href=''
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href=''
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href=''
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill/>
                    </div>
                  </a>
                </div>
                </div>
                <div class="grow-0 shrink-0 basis-auto mb-10 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group mb-6 mt-4">
                        <input for='name' type="text" name='name' class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        placeholder="Name" required  />
                    </div>
                    <div class="form-group mb-6">
                        <input for='email' type="email" name='email' class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Email address" required />
                    </div>
                    <div class="form-group mb-6">
                        <input for='subject'  type="text" name='subject' class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Subject" required />
                    </div>
                    <div for="message" type='text' name='message' class="form-group mb-6">
                        <textarea class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="exampleFormControlTextarea13" rows="3" placeholder="Message" required  ></textarea>
                    </div>
                    <ToastContainer theme='dark' className='font-sans'/>
                    <button type="submit" className="
                    mb-6
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send</button>
                    </form>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;