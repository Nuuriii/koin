import React from "react";
import GooglePlay from "/img/GooglePlay.svg";
import AppStore from "/img/AppStore.svg";
import MobileImage from "/img/Mobile.svg";

function Download() {
   return (
      <>
         <div className='pt-12 pb-20 mb-2 bg-violet-950 font-poppins'>
            <div className='flex flex-col pl-28 gap-y-5'>
               <h1 className='text-3xl font-semibold text-white'>
                  Make your control for your money
               </h1>
               <div className='flex gap-5'>
                  <div>
                     <img src={GooglePlay} alt='' />
                  </div>
                  <div>
                     <img src={AppStore} alt='' />
                  </div>
               </div>
            </div>
            <div className='relative flex justify-end bottom-80'>
               <img className='absolute ' src={MobileImage} alt='' />
            </div>
         </div>
      </>
   );
}

export default Download;
