import React from "react";

function Information() {
   return (
      <>
         <div className='relative flex flex-col items-center justify-between px-20 py-10 mx-5 bg-gray-200 shadow-md md:mx-10 sm:gap-5 sm:py-3 sm:flex-row shadow-gray-400 rounded-xl bottom-9'>
            <div className='flex flex-col items-center'>
               <h2 className='text-4xl font-semibold '>
                  10K<span className='text-violet-900'>+</span>
               </h2>
               <p className='font-semibold'>Active Users</p>
            </div>
            <div className='flex flex-col items-center my-5'>
               <h2 className='text-4xl font-semibold'>
                  $2M<span className='text-violet-800'>+</span>
               </h2>
               <p className='font-semibold'>Transaction</p>
            </div>
            <div className='flex flex-col items-center'>
               <h2 className='text-4xl font-semibold'>
                  70<span className='text-violet-900'>+</span>
               </h2>
               <p className='font-semibold'>Countries</p>
            </div>
         </div>
      </>
   );
}

export default Information;
