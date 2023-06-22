import React from "react";
import Star from "/img/star.svg";
import Customer1 from "/img/Customer1.svg";
import LeftIcon from "/img/left.svg";
import RightIcon from "/img/right.svg";

function Customer() {
   return (
      <>
         <div className='mt-5 bg-white px-7 font-poppins mb-7'>
            <h2 className='text-xl font-semibold'>
               See what our customers have to say
            </h2>
            <div className='mt-7'>
               <div className='flex flex-col px-3 pt-5 pb-3 shadow-md rounded-2xl shadow-gray-400 gap-y-3 bg-gradient-to-b from-gray-200 to-white'>
                  <h3 className='font-semibold'>Game Changer</h3>
                  <p>
                     It's been a game changer for me. Before, I would often
                     overspend without realizing it. But with this app, I can
                     easily see where my money is going and set budgets to stay
                     on track.
                  </p>
                  <div className='flex'>
                     <img src={Star} alt='' />
                     <img src={Star} alt='' />
                     <img src={Star} alt='' />
                     <img src={Star} alt='' />
                     <img src={Star} alt='' />
                  </div>

                  <div className='flex items-center gap-4'>
                     <div>
                        <img className='rounded-full' src={Customer1} alt='' />
                     </div>
                     <div>
                        <p className='font-semibold'>Chamlikra Shevin</p>
                        <p>London</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex justify-center gap-16 mt-4'>
               <div className='flex items-center justify-center p-2 rounded-full w-9 h-9 ring-2 ring-violet-400'>
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
