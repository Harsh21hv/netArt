import React from 'react';
import logo from '../asserts/logo.png';

const Header = () => {
  return (
    <div className=' flex justify-center'>
      <img src={logo} alt='logo' className='w-[320px]' />
    </div>
  );
};

export default Header;
