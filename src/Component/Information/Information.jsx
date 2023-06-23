import React from "react";

function Information() {
   return (
      <>
         <div className='relative flex flex-col items-center justify-between px-20 py-10 mx-5 bg-white shadow-md md:mx-10 sm:gap-5 sm:py-3 sm:flex-row shadow-gray-400 rounded-xl bottom-9'>
            <div className='flex flex-col items-center'>
               <h2 className='text-4xl'>
                  10K<span className='text-violet-400'>+</span>
               </h2>
               <p>Active Users</p>
            </div>
            <div className='flex flex-col items-center my-5'>
               <h2 className='text-4xl'>
                  $2M<span className='text-violet-400'>+</span>
               </h2>
               <p>Transaction</p>
            </div>
            <div className='flex flex-col items-center'>
               <h2 className='text-4xl'>
                  70<span className='text-violet-400'>+</span>
               </h2>
               <p>Countrie</p>
            </div>
         </div>
      </>
   );
}

export default Information;
