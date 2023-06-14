import React from "react";
import Koin from "/img/Koin.svg";
import { Link } from "react-router-dom";

function Nav() {
   return (
      <>
         <div className='flex items-center justify-between px-10 py-5 bg-violet-950'>
            <div>
               <img src={Koin} alt='' />
            </div>
            <div>
               <ul className='flex items-center gap-20 text-white'>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>Payment</Link>
                  <Link>Services</Link>
                  <Link>Contact Us</Link>
                  <button className='px-5 py-2 text-black rounded-md bg-violet-300'>
                     Sign in
                  </button>
               </ul>
            </div>
         </div>
      </>
   );
}

export default Nav;
