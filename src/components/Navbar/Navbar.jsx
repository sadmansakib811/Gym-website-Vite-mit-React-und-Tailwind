import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 4,
          name: "Products",
          path: "/products"
        },
        {
          id: 5,
          name: "Product Detail",
          path: "/products/:id"
        }
      ];

      const [open, setOpen]=useState(false);
      
    return (
        <nav className='bg-purple-400  fixed top-0 left-0 right-0 z-50'>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                
                <span>{open===true ? <XMarkIcon className="h-6 w-6 text-purple-600" />:<Bars3Icon className="h-6 w-6 text-purple-600" />}</span>
            
            
            </div>
            
            {/*  */}
         <ul className={`md:flex absolute md:static pl-8 pb-4 py-2 md:text-white duration-500 bg-purple-400 ${open? 'top-6': '-top-36'}`}>
            {
                routes.map(link=> <Link
                key={link.id}
                link = {link}
                ></Link>)
            }
         </ul>
        </nav>
    );
};

export default Navbar;