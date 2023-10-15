import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { MdPrivacyTip } from "react-icons/md";
const ExtraService = () => {

    const services = [
        {
            image: "https://i.ibb.co/Xy2Dghd/service-1.png",
            title: "Source from Industry Hubs",
            icon: <IoMdSearch className='text-3xl'/>
        },
        {
            image: "https://i.ibb.co/cFgq2kT/service-2.png",
            title: "Customize Your Products Hubs",
            icon: <AiFillEdit className='text-3xl'/>
        },
        {
            image: "https://i.ibb.co/vLBTSrM/service-3.png",
            title: "Fast, reliable shipping by ocean or air",
            icon: <HiMiniPaperAirplane className='text-3xl'/>
        },
        {
            image: "https://i.ibb.co/gzfBNSj/service-4.png",
            title: "Product monitoring and inspection",
            icon: <MdPrivacyTip className='text-3xl'/>
        }

    ]



    return (
        <div className='container mx-auto mt-6'>
            <h2 className='text-2xl font-bold'>Our extra services</h2>
            <div className='flex gap-10 mt-6'>
                {
                    services.map((service) =>
                        <div key={service.title}>
                            <div className="h-[
                                250px] w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-36 w-full" src={service.image} alt="" />
                                </a>
                                
                                <div className="p-5 relative">
                                <div className='border-4 right-3 border-white -top-8 p-3 absolute bg-secondary rounded-full'>
                                    {service.icon}
                                </div>
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                                            {service.title.slice(0, 22)}...
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