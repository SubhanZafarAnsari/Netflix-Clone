import React from 'react';
import Input from '@/components/Input';

function page() {
  return (
    // Setting up the background
    <div className="relative h-full w-full bg-[url('./images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* giving an opacity */}
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        {/* Setting up a simple navigation bar to display logo */}
        <nav className='px-12 py-5'>
          <img src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt="Logo" className='h-12' />
        </nav>
        <div className=' flex justify-center'>
          <div className="bg-black bg-opacity-70 px-16 py-16 self-centre mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className=' text-white text-4xl mb-8 font-semibold'>
              Sign in
            </h2>
            <div className='flex flex-col gap-4'>
              <Input isFor='E-mail'></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page