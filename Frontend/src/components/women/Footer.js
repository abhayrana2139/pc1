import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { FaApple } from "react-icons/fa";


function Footer() {
  return (
    <footer className="  bg-gray-800 text-white py-4 bottom-4">
   
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className='justify-between '>
          <p className="text-sm">Contact us at:</p>
          <p className="text-lg font-bold">7018799374</p>
</div>
          <div className='flex space-x-3'>
            <FaApple/>
            <AiFillFacebook/>
            <AiFillTwitterCircle />
          </div>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-400">


        
        
        
          </a>
        </div>
      
    </footer>
  );
}

export default Footer;