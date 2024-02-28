import React from 'react';
import pumps from '../asserts/3.png';

const Pumps = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <img src={pumps} alt='img' className=' w-9/12  mt-10' />
      </div>

      <div className='flex justify-center '>
        <p className='mt-4 text-sm mb-5 max-lg:mx-6'>
          Valves - Pumps - Pipes - Iot drivers & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className='w-screen  mb-5 border-b-2 border-red-500'></div>
    </div>
  );
};

export default Pumps;