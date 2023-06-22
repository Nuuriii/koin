import React from "react";
import AppStore from "/img/AppStore.svg";
import GooglePlay from "/img/GooglePlay.svg";
import Mobile from "/img/Mobile.svg";

function Dowload() {
   return (
      <>
         <div className='flex flex-col items-center py-5 font-poppins px-7 bg-violet-950'>
            <h1 className='text-3xl font-semibold text-white'>
               More Your Control for Your Money
            </h1>
            <div className='flex justify-center gap-2 py-3'>
               <img src={AppStore} alt='' />
               <img src={GooglePlay} alt='' />
            </div>
            <div>
               <img src={Mobile} alt='' />
            </div>
         </div>
      </>
   );
}

export default Dowload;
