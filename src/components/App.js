import React from 'react';
import Header from './Header';
import Trophy from './Trophy';
import Content from './Content';
import Pumps from './Pumps';
import Footer from './Footer';

const App = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-b  from-white to-yellow-200 overflow-auto overflow-x-hidden'>
      <Header />
      <div className='flex justify-between max-lg:block '>
        <Trophy />
        <Content />
      </div>
      <div className='w-fit mx-auto mt-10'>
      <p className='mx-auto text-sm font-bold max-lg:mx-8'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVINGS OF MORE THAN 9,000 MILLION UNITS OF POWER FOR
        THE NATION
      </p>
      </div>
      <Pumps/>
      <Footer/>
    </div>
  );
};

export default App;