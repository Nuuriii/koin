import React from "react";
import People from "/img/people.svg";
import ArrowRight from "/img/ArrowRight.svg";

function GetStarted2() {
   return (
      <>
         <div className='grid items-center justify-center grid-rows-2 pt-3 pb-4 bg- sm:grid-cols-2 sm:grid-rows-none sm:flex-row font-poppins px-7'>
            <div className='flex justify-center'>
               <img className='lg:h-3/5 lg:w-3/5' src={People} alt='' />
            </div>
            <div>
               <h2 className='text-4xl'>
                  Finances, made easy. Track, manage & reach your financial
                  goals.
               </h2>
               <p className='my-5 md:text-xl'>
                  Designed to help you take control of your finances and achieve
                  your financial goals. Our app is easy to use and provides a
                  complete overview of your finances, allowing you to manage
                  your money with confidence.
               </p>
               <button className='flex items-center justify-center px-4 py-2 font-semibold rounded-md w-44 bg-violet-400 hover:bg-violet-300'>
                  <span>Get Started</span>
                  <img src={ArrowRight} alt='' />
               </button>
            </div>
         </div>
      </>
   );
}

export default GetStarted2;
