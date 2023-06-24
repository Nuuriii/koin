import React from "react";
import Accessible from "/img/Accessible.svg";
import Financial from "/img/Financial.svg";
import Monitoring from "/img/Monitoring.svg";
import Suggestion from "/img/Suggestion.svg";

function Service() {
   return (
      <>
         <div className='py-5 bg-white px-7 md:py-10 md:pb-64'>
            <h2 className='text-3xl font-semibold'>Our Service</h2>
            <div className='grid items-center content-center justify-center grid-rows-4 gap-10 py-4 sm:grid-rows-none sm:grid-cols-2 justify-items-center'>
               <div className='sm:col-span-1'>
                  <div className='flex items-center p-3 rounded-full w-14 h-14 bg-violet-950'>
                     <img src={Accessible} alt='' />
                  </div>
                  <h3 className='my-2 font-semibold md:text-2xl'>
                     Accessible and Convenient
                  </h3>
                  <p className='md:text-xl'>
                     Access the app from anywhere, anytime, stay on top of your
                     finances. No unnecessary fees, and manage your finances
                     with ease.
                  </p>
               </div>
               <div className='sm:col-span-1'>
                  <div className='flex items-center p-3 rounded-full w-14 h-14 bg-violet-950'>
                     <img src={Suggestion} alt='' />
                  </div>
                  <h3 className='my-2 font-semibold md:text-2xl'>
                     Personalized Suggestions
                  </h3>
                  <p className='md:text-xl'>
                     Our app analyzes your spending patterns and offers advice
                     to help you improve your habits, helping you save more and
                     spend less
                  </p>
               </div>
               <div className='sm:col-span-1'>
                  <div className='flex items-center p-3 rounded-full w-14 h-14 bg-violet-950'>
                     <img src={Financial} alt='' />
                  </div>
                  <h3 className='my-2 font-semibold md:text-2xl'>
                     Improved Financial Management
                  </h3>
                  <p className='md:text-xl'>
                     Our budgeting app provides a complete overview of your
                     finances. Track your spending, set budgets, and monitor
                     your progress.
                  </p>
               </div>
               <div className='sm:col-span-1'>
                  <div className='flex items-center p-3 rounded-full w-14 h-14 bg-violet-950'>
                     <img src={Monitoring} alt='' />
                  </div>
                  <h3 className='my-2 font-semibold md:text-2xl'>
                     Automated expenses
                  </h3>
                  <p className='md:text-xl'>
                     Automatically categorizes your transactions, making it
                     easier to monitor your spending and budgeting.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Service;
