import React from "react";
import AccessIcon from "/img/Accessible.svg";
import FinancialIcon from "/img/Financial.svg";
import MonitoringIcon from "/img/Monitoring.svg";
import Suggestion from "/img/Suggestion.svg";

function Service() {
   return (
      <>
         <div className='px-64 pt-10 pb-52 bg-gray-50'>
            <h1 className='mb-20 text-5xl font-semibold'>Our Service</h1>
            <div className='flex justify-center gap-32 px-10'>
               <div className='flex flex-col gap-y-5'>
                  <div className='w-96'>
                     <div className='flex items-center px-3 py-3 rounded-full w-14 h-14 bg-purple-950'>
                        <img src={AccessIcon} alt='' />
                     </div>

                     <h3 className='my-2 text-xl'>Accessible and Convenient</h3>
                     <p className='text-xl'>
                        Access the app from anywhere, anytime, stay on top of
                        your finances. No unnecessary fees, and manage your
                        finances with ease.
                     </p>
                  </div>
                  <div className='w-96'>
                     <div className='flex items-center px-3 py-3 rounded-full w-14 h-14 bg-purple-950'>
                        <img src={FinancialIcon} alt='' />
                     </div>

                     <h3 className='my-2 text-xl'>
                        Improved Financial Management
                     </h3>
                     <p className='text-xl'>
                        Our budgeting app provides a complete overview of your
                        finances. Track your spending, set budgets, and monitor
                        your progress.
                     </p>
                  </div>
               </div>
               <div className='flex flex-col gap-y-5'>
                  <div className='w-96'>
                     <div className='flex items-center px-3 py-3 rounded-full w-14 h-14 bg-purple-950'>
                        <img src={Suggestion} alt='' />
                     </div>

                     <h3 className='my-2 text-xl'>Personalized Suggestions</h3>
                     <p className='text-xl'>
                        Our app analyzes your spending patterns and offers
                        advice to help you improve your habits, helping you save
                        more and spend less
                     </p>
                  </div>
                  <div className='w-96'>
                     <div className='flex items-center px-3 py-3 rounded-full w-14 h-14 bg-purple-950'>
                        <img src={MonitoringIcon} alt='' />
                     </div>

                     <h3 className='my-2 text-xl'>Automated expenses</h3>
                     <p className='text-xl'>
                        Automatically categorizes your transactions, making it
                        easier to monitor your spending and budgeting.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Service;
