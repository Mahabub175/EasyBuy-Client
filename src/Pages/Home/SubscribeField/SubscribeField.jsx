import React from 'react';
import { TfiEmail } from "react-icons/tfi";

const SubscribeField = () => {
    return (
        <div className='mt-6 bg-gray-200'>
           <div className='py-5'>
           <div className='text-center '>
                <h2 className='font-bold text-2xl '>Subscribe on our newsletter</h2>
                <p className='my-2'>Get daily news on upcoming offers from many suppliers all over the world</p>
            </div>
            <div>
           </div>
                <form className="flex items-center justify-center">
                    <label htmlFor="voice-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-[25%]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <TfiEmail className='text-xl'></TfiEmail>
                        </div>
                        <input
                            type="text"
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            required="Must Type Your Email"
                        />

                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SubscribeField;