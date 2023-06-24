import React from "react";
import Star from "/img/star.svg";
import Customer1 from "/img/Customer1.svg";
import Customer2 from "/img/Customer2.svg";
import LeftIcon from "/img/left.svg";
import RightIcon from "/img/right.svg";

function Customer() {
   return (
      <>
         <div className='pt-5 bg-white px-7 font-poppins pb-7'>
            <h2 className='text-xl font-semibold'>
               See what our customers have to say
            </h2>
            <div className='gap-3 mt-7 md:grid lg:content-center md:grid-cols-1 lg:grid-cols-5 lg:items-center lg:justify-center'>
               {/* Left Icon for lg++ */}
               <div className='items-center justify-end hidden w-20 bg-red-900 lg:flex'>
                  <div className='flex items-center justify-center p-2 rounded-full lg:col-span-1 w-9 h-9 ring-2 ring-violet-400'>
                     <img src={LeftIcon} alt='' />
                  </div>
               </div>
               <div className='flex w-full lg:gap-4 lg:col-span-3'>
                  <div className='flex flex-col px-3 pt-5 pb-3 shadow-md sm:px-8 rounded-2xl shadow-gray-400 gap-y-3 bg-gradient-to-b from-sky-100 to-white'>
                     <h3 className='font-semibold'>Game Changer</h3>
                     <p>
                        It's been a game changer for me. Before, I would often
                        overspend without realizing it. But with this app, I can
                        easily see where my money is going and set budgets to
                        stay on track.
                     </p>
                     <div className='flex sm:hidden'>
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                     </div>

                     <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-4'>
                           <div>
                              <img
                                 className='rounded-full md:h-14 md:w-14'
                                 src={Customer1}
                                 alt=''
                              />
                           </div>
                           <div>
                              <p className='font-semibold md:text-sm'>
                                 Johnson
                              </p>
                              <p className='md:text-sm'>London</p>
                           </div>
                        </div>
                        <div className='hidden sm:flex'>
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                        </div>
                     </div>
                  </div>
                  <div className='flex-col hidden px-3 pt-5 pb-3 shadow-md md:flex sm:px-8 rounded-2xl shadow-gray-400 gap-y-3 bg-gradient-to-b from-sky-100 to-white'>
                     <h3 className='font-semibold'>
                        More control of my finances{" "}
                     </h3>
                     <p>
                        I've been able to save more money and feel more in
                        control of my finances. I would definitely recommend
                        this app to anyone who wants to take control of their
                        finances.
                     </p>
                     <div className='flex sm:hidden'>
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                        <img src={Star} alt='' />
                     </div>

                     <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-4'>
                           <div>
                              <img
                                 className='md:h-14 md:w-14'
                                 src={Customer2}
                                 alt=''
                              />
                           </div>
                           <div className='w-auto'>
                              <p className='font-semibold md:text-sm'>
                                 John Nima
                              </p>
                              <p className='md:text-sm'>New Castle</p>
                           </div>
                        </div>
                        <div className='hidden sm:flex'>
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                           <img src={Star} alt='' />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Icon for lg++ */}
               <div className='justify-end hidden w-20 bg-red-900 lg:flex'>
                  <div className='flex items-center justify-center p-2 rounded-full w-9 h-9 ring-2 ring-violet-400 lg:col-span-1'>
                     <img src={RightIcon} alt='' />
                  </div>
               </div>
            </div>

            {/* Arrow left rigth sm - md */}
            <div className='flex justify-center gap-16 mt-4 lg:hidden'>
               <div className='items-center justify-center hidden p-2 rounded-full lg:flex w-9 h-9 ring-2 ring-violet-400'>
                  <img src={LeftIcon} alt='' />
               </div>

               <div className='flex items-center justify-center p-2 rounded-full w-9 h-9 ring-2 ring-violet-400'>
                  <img src={RightIcon} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Customer;
