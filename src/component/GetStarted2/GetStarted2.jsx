import React from "react";
import PeopleImage from "/img/people.svg";
import ArrowIcon from "/img/ArrowRight.svg";

function GetStarted2() {
   return (
      <>
         <div className='flex items-center px-10 pt-2 pb-20 font-poppins'>
            <div className='flex justify-center w-1/2'>
               <img src={PeopleImage} className='w-[500px] h-[500px]' alt='' />
            </div>
            <div className='flex flex-col justify-center w-1/2'>
               <h1 className='text-5xl'>
                  Finances, made easy. Track, manage & reach your financial
                  goals.
               </h1>
               <p className='my-5 text-xl'>
                  Designed to help you take control of your finances and achieve
                  your financial goals. Our app is easy to use and provides a
                  complete overview of your finances, allowing you to manage
                  your money with confidence.
               </p>
               <button className='flex items-center justify-center px-5 py-2 rounded-md w-44 bg-violet-400'>
                  <span>Get Started</span>
                  <img src={ArrowIcon} alt='' />
               </button>
            </div>
         </div>
      </>
   );
}

export default GetStarted2;
