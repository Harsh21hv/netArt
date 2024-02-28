import React from 'react';
import Fb from '../asserts/facebook.svg';

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <p className='font-extrabold font-serif text-sm'>
          C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
      </div>
      <div className='w-[1418px] h-32 bg-red-500 mb-5 mt-3 ml-[10px] flex justify-evenly  '>
        <p className='text-white p-8 font-serif text-sm'>
          <span className='text-3xl'>📞</span> Toll free{' '}
          <span className='font-semibold'>1800 200 1234</span>{' '}
        </p>
        <div className='flex pb-10'>
          <img src={Fb} alt='img' className='w-10 '/>
          <p className='text-white pt-12 pr-6 font-serif text-sm'>
            www.facebook.com/cripumps
          </p>
        </div>
        <p className='text-white pt-8 font-serif text-sm'><span className='text-4xl'>🌐</span> www.crigroups.com</p>
      </div>
    </div>
  );
};

export default Footer;
