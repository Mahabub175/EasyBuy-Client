import React from 'react';

const ProductsCard = ({ product }) => {
    const { picture_url, price, name, category } = product
    return (
        <div
            className=" group bg-white border hover:shadow-md transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg"
        >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
                <img
                    className="absolute top-2 left-[15%] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl p-2"
                    src={picture_url}
                    alt="Image Description"
                />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    ${price}
                </h3>
                <p className=" text-gray-900 dark:text-gray-40 font-semibold">
                  {name}
                </p>
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                  {category}
                </p>
            </div>
        </div>

    );
};

export default ProductsCard;
