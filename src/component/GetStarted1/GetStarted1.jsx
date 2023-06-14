import React from "react";
import ArrowIcon from "/img/ArrowRight.svg";
import CardImage from "/img/Card.svg";

function GetStarted1() {
   return (
      <>
         <div className='flex items-center justify-between px-10 py-20 font-poppins bg-violet-950'>
            <div className='flex flex-col w-1/2 '>
               <h1 className='text-5xl text-white'>
                  Your one stop Budgeting tool{" "}
               </h1>
               <p className='my-5 text-xl text-white'>
                  A budget is a plan for every dollar you have. It’s not magic,
                  but it represents more financial freedom and a life with much
                  less stress A budget is a plan,{" "}
               </p>
               <button className='flex items-center justify-center px-5 py-2 rounded-md w-44 bg-violet-200'>
                  <span>Get Started</span>
                  <img src={ArrowIcon} alt='' />
               </button>
            </div>
            <div className='flex justify-center w-1/2'>
               <img src={CardImage} alt='' />
            </div>
         </div>
      </>
   );
}

export default GetStarted1;
