import Image from 'next/image';

const BrandList = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-[1440px] sm:py-16 lg:px-14'>
        <div className='max-w-screen-md mb-8 lg:mb-16 md:ml-10 lg:ml-0'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-black-100 '>
            Search by Brands
          </h2>
          <p className='text-gray-500 text-md '>
            We offer you a selection of premium brand cars for your
            consideration
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0'>
          <div>
            <div className='flex items-center justify-center  h-[100px]'>
              <Image src='/benz.png' alt='benz-logo' width={80} height={80} />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center  h-[100px]'>
              <Image src='/bmw.png' alt='bmw-logo' width={60} height={60} />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center  h-[100px]'>
              <Image src='/audi.png' alt='audi-logo' width={80} height={80} />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center  h-[100px]'>
              <Image src='/ford.png' alt='ford-logo' width={80} height={80} />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center  h-[100px]'>
              <Image src='/gmc.png' alt='gmc-logo' width={80} height={80} />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center h-[100px]'>
              <Image
                src='/toyota.png'
                alt='toyota-logo'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center h-[100px]'>
              <Image
                src='/nissan.png'
                alt='nissan-logo'
                width={60}
                height={60}
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center h-[100px]'>
              <Image src='/mazda.png' alt='mazda-logo' width={80} height={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandList;
