import React from "react";

function Information() {
   return (
      <>
         <div className='relative flex justify-center w-full bottom-20'>
            <div className='flex items-center justify-center w-3/4 gap-32 px-10 py-5 my-10 bg-white rounded-md shadow-md bottom-20 shadow-gray-400'>
               <div className='flex flex-col'>
                  <h1 className='text-4xl'>
                     10K<span className='text-violet-600'>+</span>
                  </h1>
                  <p>Active users</p>
               </div>
               <div className='flex flex-col'>
                  <h1 className='text-4xl'>
                     $2M<span className='text-violet-600'>+</span>
                  </h1>
                  <p>Transaction</p>
               </div>
               <div className='flex flex-col'>
                  <h1 className='text-4xl'>
                     70<span className='text-violet-600'>+</span>
                  </h1>
                  <p>Countries</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Information;
