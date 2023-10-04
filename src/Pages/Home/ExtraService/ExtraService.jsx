import React from 'react';
import { TfiSearch } from "react-icons/tfi";
const ExtraService = () => {

    const services = [
        {
            image: "https://i.ibb.co/Xy2Dghd/service-1.png",
            title: "Source from Industry Hubs",
            icon: <TfiSearch />
        },
        {
            image: "https://i.ibb.co/cFgq2kT/service-2.png",
            title: "Customize Your Products",
            icon: <TfiSearch />
        },
        {
            image: "https://i.ibb.co/vLBTSrM/service-3.png",
            title: "Source from Industry Hubs",
            icon: <TfiSearch />
        },
        {
            image: "https://i.ibb.co/gzfBNSj/service-4.png",
            title: "Source from Industry Hubs",
            icon: <TfiSearch />
        }

    ]



    return (
        <div className='container mx-auto mt-6'>
            <h2 className='text-2xl font-bold'>Our extra services</h2>
            <div className='flex gap-5 mt-6'>
                {
                    services.map((service) =>
                        <div key={service.title}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src={service.image} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {service.title}
                                        </h5>
                                    </a>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default ExtraService;