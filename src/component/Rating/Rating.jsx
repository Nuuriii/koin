import React from "react";
import StartIcon from "/img/star.svg";
import Customer1 from "/img/Customer1.svg";
import Customer2 from "/img/Customer2.svg";
import RightIcon from "/img/right.svg";
import LeftIcon from "/img/left.svg";

function Rating() {
   return (
      <>
         <div className='flex flex-col items-center mt-5 mb-10 bg-gray-50 font-poppins'>
            <h3 className='my-8 font-semibold'>
               See what our customers have to say
            </h3>
            <div>
               <div className='flex items-center justify-center gap-4'>
                  <div className='flex justify-center w-8 h-8 p-2 mr-5 rounded-full items-center-center ring-2 ring-purple-400'>
                     <img src={LeftIcon} alt='' />
                  </div>

                  <div className='flex flex-col w-1/3 h-full px-5 py-6 shadow-md rounded-3xl shadow-gray-400'>
                     <h1 className='text-lg font-semibold'>Game Changer</h1>
                     <p className='my-2 text-sm'>
                        It's been a game changer for me. Before, I would often
                        overspend without realizing it. But with this app, I can
                        easily see where my money is going and set budgets to
                        stay on track.
                     </p>
                     <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                           <div className='w-16 h-16'>
                              <img
                                 className='rounded-full '
                                 src={Customer1}
                                 alt=''
                              />
                           </div>
                           <div>
                              <h4 className='font-semibold text-md'>
                                 Chamilikra Shevin
                              </h4>
                              <p className='text-sm'>London</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                        </div>
                     </div>
                  </div>
                  <div className='flex flex-col w-1/3 h-full px-5 py-5 shadow-md rounded-3xl shadow-gray-400'>
                     <h1 className='text-lg font-semibold'>
                        More control of my finances
                     </h1>
                     <p className='my-5 text-sm'>
                        I've been able to save more money and feel more in
                        control of my finances. I would definitely recommend
                        this app to anyone who wants to take control of their
                        finances.
                     </p>
                     <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                           <div className='w-16 h-16'>
                              <img
                                 className='w-full h-full rounded-full'
                                 src={Customer2}
                                 alt=''
                              />
                           </div>
                           <div>
                              <h4 className='font-semibold text-md'>
                                 John Nima
                              </h4>
                              <p className='text-sm'>New Castle</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                           <img src={StartIcon} alt='' />
                        </div>
                     </div>
                  </div>

                  <div className='flex justify-center w-8 h-8 p-2 ml-5 rounded-full items-center-center ring-2 ring-purple-400'>
                     <img src={RightIcon} alt='' />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Rating;
