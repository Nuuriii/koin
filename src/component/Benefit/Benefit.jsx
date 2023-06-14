import React from "react";
import WomanImage from "/img/Women.svg";
import CheckIcon from "/img/CheckMark.svg";

function Benefit() {
   return (
      <>
         <div className='flex items-center justify-center gap-5 px-10 mb-20 mt-9 font-poppins'>
            <div className='flex justify-center w-1/2'>
               <img className='w-[400px]' src={WomanImage} alt='' />
            </div>
            <div className='flex flex-col w-1/2 gap-y-3'>
               <h1 className='text-4xl font-semibold'>Benefits</h1>
               <p className='text-xl text-justify'>
                  Designed to help you take control of your finances and achieve
                  your financial goals. Our app is easy to use and provides a
                  complete overview of your finances, allowing you to manage
                  your money with confidence.
               </p>
               <div className='flex flex-col gap-y-3'>
                  <div className='flex items-center gap-5'>
                     <div className='flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-purple-600'>
                        <img src={CheckIcon} alt='' />
                     </div>
                     <p className='text-xl'>Personalized Suggestions</p>
                  </div>
                  <div className='flex items-center gap-5'>
                     <div className='flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-purple-600'>
                        <img src={CheckIcon} alt='' />
                     </div>
                     <p className='text-xl'>Personalized Suggestions</p>
                  </div>
                  <div className='flex items-center gap-5'>
                     <div className='flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-purple-600'>
                        <img src={CheckIcon} alt='' />
                     </div>
                     <p className='text-xl'>Personalized Suggestions</p>
                  </div>
                  <div className='flex items-center gap-5'>
                     <div className='flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-purple-600'>
                        <img src={CheckIcon} alt='' />
                     </div>
                     <p className='text-xl'>Personalized Suggestions</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Benefit;
