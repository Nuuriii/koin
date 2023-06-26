import React from "react";
import ArrowRIght from "/img/ArrowRight.svg";
import Card from "/img/Card.svg";

function GetStarted1() {
   return (
      <>
         <div className='grid items-center justify-center grid-rows-2 text-white pb-14 sm:grid-cols-2 sm:grid-rows-none font-poppins bg-violet-950 px-7'>
            <div className='flex flex-col justify-center gap-y-5'>
               <h1 className='text-4xl font-semibold lg:text-6xl'>
                  Your one stop Budgeting tool
               </h1>
               <p className='md:text-xl lg:text-2xl'>
                  A budget is a plan for every dollar you have. It’s not magic,
                  but it represents more financial freedom and a life with much
                  less stress A budget is a plan,{" "}
               </p>
               <button className='flex items-center justify-center px-3 py-2 font-semibold text-black rounded-md w-44 md:text-lg bg-violet-400 hover:bg-violet-300'>
                  <span>Get Started</span>
                  <img src={ArrowRIght} alt='' />
               </button>
            </div>
            <div className='flex justify-center'>
               <img className='lg:h-3/4 lg:w-3/4' src={Card} alt='' />
            </div>
         </div>
      </>
   );
}

export default GetStarted1;
