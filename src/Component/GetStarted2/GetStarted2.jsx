import React from "react";
import People from "/img/people.svg";
import ArrowRight from "/img/ArrowRight.svg";

function GetStarted2() {
   return (
      <>
         <div className='flex flex-col items-center justify-center pt-3 pb-4 bg-gray-100 font-poppins px-7'>
            <div>
               <img src={People} alt='' />
            </div>
            <div>
               <h2 className='text-4xl'>
                  Finances, made easy. Track, manage & reach your financial
                  goals.
               </h2>
               <p className='my-5'>
                  Designed to help you take control of your finances and achieve
                  your financial goals. Our app is easy to use and provides a
                  complete overview of your finances, allowing you to manage
                  your money with confidence.
               </p>
               <button className='flex items-center px-4 font-semibold rounded-md bg-violet-400 hover:bg-violet-300'>
                  <span>Get Started</span>
                  <img src={ArrowRight} alt='' />
               </button>
            </div>
         </div>
      </>
   );
}

export default GetStarted2;
