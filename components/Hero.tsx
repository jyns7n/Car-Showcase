'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-40 padding-x'>
        <h1 className='hero__title'>
          Arrive in Style, Depart with Memories –<br />
          <span className='text-[42px]'>Rent from the Best!</span>
        </h1>

        <p className='hero__subtitle'>
          Elevate Your Car Rental Experience with Our Effortless Booking
          Process.
        </p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-red-800 text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src='/hero-bmw.png'
            alt='hero'
            fill
            className='object-contain'
          />
        </div>

        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};

export default Hero;
