import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-yellow-300 mt-4 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
               <span className='text-purple-700 text-5xl font-extrabold'>${price.price}</span> 
               <span className='text-2xl font-bold'>/ month</span>
            </h1>
           <h4 className='text-2xl my-6 font-bold text-center'>{price.name}</h4>
            <p className='underline font-bold text-green-900'>Features:</p>
            {
                price.features.map((feature, idx)=> <Feature 
                    key={idx}
                    feature ={feature}></Feature>)
            }
            <div className='text-center mt-auto'> 
                <button className=" w-fit bg-green-500 (green) hover:bg-green-600 text-black font-bold py-2 px-4 rounded text-center">
             
                     Buy Now
                </button>
             
             </div>
            
            
            
        </div>
    );
};

export default PriceCart;