import React from "react";
import CheckMark from "/img/CheckMark.svg";

function Benefit() {
   return (
      <>
         <div className='mt-6 mb-8 px-7'>
            <h2 className='text-3xl font-semibold'>Benefits</h2>
            <div className='pt-2 pb-4'>
               <p>
                  Designed to help you take control of your finances and achieve
                  your financial goals. Our app is easy to use and provides a
                  complete overview of your finances, allowing you to manage
                  your money with confidence.
               </p>
            </div>
            <div className='grid grid-rows-4 gap-3'>
               <div className='flex items-center gap-3'>
                  <div className='flex items-center justify-center rounded-full w-7 h-7 ring-2 ring-violet-400'>
                     <img src={CheckMark} alt='' />
                  </div>
                  <p>Accessible and Convenient</p>
               </div>
               <div className='flex items-center gap-3'>
                  <div className='flex items-center justify-center rounded-full w-7 h-7 ring-2 ring-violet-400'>
                     <img src={CheckMark} alt='' />
                  </div>
                  <p>Personalized Suggestions</p>
               </div>
               <div className='flex items-center gap-3'>
                  <div className='flex items-center justify-center rounded-full w-7 h-7 ring-2 ring-violet-400'>
                     <img src={CheckMark} alt='' />
                  </div>
                  <p>Improved Financial Management</p>
               </div>
               <div className='flex items-center gap-3'>
                  <div className='flex items-center justify-center rounded-full w-7 h-7 ring-2 ring-violet-400'>
                     <img src={CheckMark} alt='' />
                  </div>
                  <p>Automated expenses</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Benefit;
