import React from 'react';

const Link = ({link}) => {
    return (
        <li className='mr-12 hover:bg-purple-500'>
           <a href={link.path}>{link.name}</a> 
        </li>
    );
};

export default Link;