import React, { useEffect, useState } from 'react';

const SuppliersRegion = () => {
    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch('./suppliarRegion.json')
            .then((res) => res.json())
            .then((data) => setRegions(data))
            .catch((error) => console.error('Error fetching data:', error));
        console.log(regions);
    }, [])

    return (
        <div className='container mx-auto mt-6' >
            <h2 className='text-2xl font-bold mb-6'>Suppliers by region</h2>
            <div className='grid grid-cols-5 gap-2'>
                {
                    regions.map((region) =>
                        <div key={region.name}>
                            <div className='flex items-center gap-2 align-middle'>
                                <div>
                                    <img src={region.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='font-semibold text-lg'>{region.name}</h2>
                                    <p>{region.url}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SuppliersRegion;