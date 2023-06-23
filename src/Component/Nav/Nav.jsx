import React from "react";
import Koin from "/img/Koin.svg";
import Vector from "/img/Vector.svg";

function Nav() {
   return (
      <>
         <div className='flex items-center justify-between py-5 px-7 bg-violet-950'>
            <div>
               <img src={Koin} alt='' />
            </div>
            <div>
               <div>
                  <img id='hamburger' src={Vector} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Nav;
