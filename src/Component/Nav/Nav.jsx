import React, { useState } from "react";
import Koin from "/img/Koin.svg";
import Vector from "/img/Vector.svg";
import { Link } from "react-router-dom";

function Nav() {
   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

   return (
      <div className='flex items-center justify-between pt-5 pb-9 px-7 bg-violet-950'>
         <a href='/'>
            <img src={Koin} alt='logo' />
         </a>
         <nav>
            <section className='flex MOBILE-MENU lg:hidden'>
               <div
                  className='space-y-2 HAMBURGER-ICON'
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
               >
                  <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
                  <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
                  <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
               </div>

               <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  {" "}
                  <div
                     className='absolute top-0 right-0 px-8 py-8 CROSS-ICON'
                     onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                     <svg
                        className='w-8 h-8 text-gray-600'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        <line x1='18' y1='6' x2='6' y2='18' />
                        <line x1='6' y1='6' x2='18' y2='18' />
                     </svg>
                  </div>
                  <ul className='MENU-LINK-MOBILE-OPEN flex flex-col  justify-between min-h-[250px]'>
                     <li className='flex justify-center my-8 uppercase border-b border-gray-400 '>
                        <Link className='hover:text-gray-500' to={"/home"}>
                           Home
                        </Link>
                     </li>
                     <li className='flex justify-center my-8 uppercase border-b border-gray-400'>
                        <Link className='hover:text-gray-500' to={"/about"}>
                           About
                        </Link>
                     </li>
                     <li className='flex justify-center my-8 uppercase border-b border-gray-400'>
                        <Link className='hover:text-gray-500' to={"/payment"}>
                           Payment
                        </Link>
                     </li>
                     <li className='flex justify-center my-8 uppercase border-b border-gray-400'>
                        <Link className='hover:text-gray-500' to={"/services"}>
                           Services
                        </Link>
                     </li>
                     <li className='flex justify-center my-8 uppercase border-b border-gray-400'>
                        <Link className='hover:text-gray-500' to={"/contact"}>
                           Contact Us
                        </Link>
                     </li>
                     <li className='flex justify-center my-8 uppercase'>
                        <button className='px-3 py-2 rounded-md bg-violet-400 hover:bg-violet-300'>
                           SIGN IN{" "}
                        </button>
                     </li>
                  </ul>
               </div>
            </section>

            <ul className='hidden space-x-8 DESKTOP-MENU lg:flex lg:items-center'>
               <li>
                  <Link to={"/home"} className='text-white hover:text-gray-300'>
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to={"/about"}
                     className='text-white hover:text-gray-300'
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     to={"/payment"}
                     className='text-white hover:text-gray-300'
                  >
                     Payment
                  </Link>
               </li>
               <li>
                  <Link
                     to={"/services"}
                     className='text-white hover:text-gray-300'
                  >
                     Services
                  </Link>
               </li>
               <li>
                  <Link
                     to={"/contact"}
                     className='text-white hover:text-gray-300'
                  >
                     Contact Us
                  </Link>
               </li>
               <li>
                  <button className='px-5 py-2 rounded-md hover:bg-violet-300 bg-violet-400'>
                     Sign In
                  </button>
               </li>
            </ul>
         </nav>
         <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
   );
}

export default Nav;
