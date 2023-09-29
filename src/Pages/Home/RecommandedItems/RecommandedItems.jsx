import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductsCard from './ProductsCard';

const RecommandedItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/recommanedItems.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
        console.log(products);

    }, [])

    return (
        <div>
            Recommended Items
            <div className='grid grid-cols-5 gap-2 p-2'>
                {
                    products.map((product) => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        ></ProductsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default RecommandedItems;