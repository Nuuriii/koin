import React from "react";
import ArrowRIght from "/img/ArrowRight.svg";
import Card from "/img/Card.svg";

function GetStarted1() {
   return (
      <>
         <div className='grid grid-rows-2 text-white pb-14 font-poppins bg-violet-950 px-7'>
            <div className='flex flex-col justify-center gap-y-5'>
               <h1 className='text-4xl font-bold'>
                  Your one stop Budgeting tool{" "}
               </h1>
               <p>
                  A budget is a plan for every dollar you have. It’s not magic,
                  but it represents more financial freedom and a life with much
                  less stress A budget is a plan,{" "}
               </p>
               <button className='flex items-center justify-center font-semibold text-black rounded-md w-36 bg-violet-400 hover:bg-violet-300'>
                  <span>Get Started</span>
                  <img src={ArrowRIght} alt='' />
               </button>
            </div>
            <div>
               <img src={Card} alt='' />
            </div>
         </div>
      </>
   );
}

export default GetStarted1;
