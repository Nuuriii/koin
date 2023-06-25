import React from "react";
import KoinImage from "/img/Koin.svg";
import { Link } from "react-router-dom";
import Linkedin from "/img/linkedin.svg";
import Instagram from "/img/instagram.svg";
import Facebook from "/img/facebook.svg";
import Twitter from "/img/twitter.svg";
import AppStore from "/img/AppStore.svg";
import GooglePlay from "/img/GooglePlay.svg";

function Footer() {
   return (
      <>
         <div className='px-5 text-white sm:flex sm:flex-row sm:justify-between md:items-center bg-violet-950 py-9 lg:py-5 lg:px-14'>
            <div className='flex flex-col sm:gap-y-5 '>
               <div>
                  <img src={KoinImage} alt='' />
               </div>
               <div className='flex flex-col gap-4 text-xl md:text-md md:gap-2 lg:gap-5 lg:flex-row '>
                  <Link to='/'>FAQ's</Link>
                  <Link to='/'>Contact Us</Link>
                  <Link to='/'>Terms & Conditions</Link>
                  <Link to='/'>Privacy Policy</Link>
               </div>
               <div className='items-center hidden gap-5 my-2 sm:flex '>
                  <img src={Instagram} alt='Instagram' />
                  <img src={Facebook} alt='Facebook' />
                  <img src={Twitter} alt='' />
                  <img src={Linkedin} alt='' />
               </div>
            </div>
            <div className='items-center mt-4 md:flex md:gap-3 md:flex-col md:justify-center'>
               <form className=''>
                  <label className='text-xl ' htmlFor='email'>
                     Join our Mailing List
                  </label>
                  <div className='flex items-center'>
                     <input
                        className='px-6 py-5 mt-2 text-gray-500 rounded-l-lg placeholder:text-gray-500'
                        type='email'
                        id='email'
                        placeholder='Enter Your Email'
                     />
                     <button className='relative px-6 py-5 font-semibold text-black rounded-lg top-1 right-4 bg-violet-400'>
                        Send
                     </button>
                  </div>
               </form>
               <div className='flex items-center gap-5 my-6 sm:hidden'>
                  <img src={Instagram} alt='' />
                  <img src={Facebook} alt='' />
                  <img src={Twitter} alt='' />
                  <img src={Linkedin} alt='' />
               </div>
               <div className='flex items-center justify-start gap-1 px-1 md:px-1 md:pt-0 sm:pt-4'>
                  <img src={AppStore} alt='' />
                  <img src={GooglePlay} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Footer;
