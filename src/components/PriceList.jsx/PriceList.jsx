import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState ([])
    useEffect(() => {
        fetch('prices.json')
          .then(res => res.json())
          .then(data => {
            setPrices(data);
          })
          .catch(error => console.error('Error fetching prices:', error));
      }, []);
    return (
        <div className='mx-12 mb-80' id='priceList'>
    <h2 className='text-6xl text-center bg-purple-300 font-bold p-4 text-purple-950'>Awesome Affordable price</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
              prices.map(price =><PriceCart
              key={price.id}
              price = {price}
              ></PriceCart>)
            }
            </div>
           
        </div>
    );
};

export default PriceList;