import React from 'react';
import Header from './Header';
import Trophy from './Trophy';
import Content from './Content';
import Pumps from './Pumps';
import Footer from './Footer';

const App = () => {
  return (
    <div className=' w-screen h-screen bg-gradient-to-b  from-white to-yellow-200 overflow-auto overflow-x-hidden'>
      <Header />
      <div className='flex justify-between'>
        <Trophy />
        <Content />
      </div>
      <p className='ml-20 mt-8 text-sm'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVINGS OF MORE THAN 9,000 MILLION UNITS OF POWER FOR
        THE NATION
      </p>
      <Pumps/>
      <Footer/>
    </div>
  );
};

export default App;
