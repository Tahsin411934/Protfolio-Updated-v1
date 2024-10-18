import React from 'react';

const Service = ({ service }) => {
    return (
        <div data-aos="fade-right" className='font-inter pb-5'>
            <div >
                <div  className="border hover:scale-95 transition-transform duration-300 ease-in-out border-blue-200 rounded-lg p-10 shadow-md text-center h-full">
                    <div className='flex justify-center items-center'>
                        <img width={80} height={80} src={service.image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-2xl my-4'>
                            {service.title}
                        </h1>
                        <p className='text-base'>{service.details}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;