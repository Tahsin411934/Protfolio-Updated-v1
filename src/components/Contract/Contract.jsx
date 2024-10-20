import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTheme from '../../Hook/useTheme';

const Contract = () => {
    const form = useRef();
    const { theme } = useTheme();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        emailjs
            .sendForm('service_frlziug', 'template_12dgd07', form.current, {
                publicKey: 'v5u2aSk9Q6zT0zP3G',
            })
            .then(
                (result) => {
                    console.log(result.status);
                    if (result.status == 200) {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "An Email Sent Succefully",
                            showConfirmButton: false,
                            timer: 6500
                        });
                    }
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div data-aos="fade-right" className={`font-inter ${theme === 'light' ? 'bg-gray-200' : 'bg-[#111828] text-[#BEB3CF]'} m-0 pt-1 h-full`}>
            <div className="text-3xl font-bold flex items-center justify-center p-10">
                <h1 className="">Contact</h1>
            </div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid item-center justify-center max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-20 md:py-16 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Chittagong, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+8801822479975</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>abrarfahimtasin@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate className="flex  flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" {...register('fullName', { required: 'Full name is required' })} placeholder="Leroy Jenkins" className={`text-gray-950 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 ${errors.fullName ? 'border-red-500' : ''}`} />
                            {errors.fullName && <span className="text-sm text-red-500">{errors.fullName.message}</span>}
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} placeholder="leroy@jenkins.com" className={`text-gray-950 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 ${errors.email ? 'border-red-500' : ''}`} />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" {...register('message', { required: 'Message is required' })} className={`block w-full text-gray-950 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 ${errors.message ? 'border-red-500' : ''}`} />
                            {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
                        </label>
                        <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 border border-blue-400">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contract;
