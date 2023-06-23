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
         <div className='px-5 text-white bg-violet-950 py-9'>
            <div>
               <div>
                  <img src={KoinImage} alt='' />
               </div>
               <div className='grid grid-rows-4 gap-4 mt-4 text-xl'>
                  <Link to='/'>FAQ's</Link>
                  <Link to='/'>Contact Us</Link>
                  <Link to='/'>Terms & Conditions</Link>
                  <Link to='/'>Privacy Policy</Link>
               </div>
            </div>
            <div className='mt-4'>
               <form>
                  <label className='text-xl ' htmlFor='email'>
                     Join our Mailing List
                  </label>
                  <input
                     className='px-6 py-5 mt-2 text-gray-500 rounded-l-lg placeholder:text-gray-500'
                     type='email'
                     id='email'
                     placeholder='Enter Your Email'
                  />
                  <button className='relative px-6 py-5 font-semibold text-black rounded-lg right-4 bg-violet-400'>
                     Send
                  </button>
               </form>
               <div className='flex items-center gap-5 my-6'>
                  <img src={Instagram} alt='' />
                  <img src={Facebook} alt='' />
                  <img src={Twitter} alt='' />
                  <img src={Linkedin} alt='' />
               </div>
               <div className='flex items-center justify-center gap-2'>
                  <img src={AppStore} alt='' />
                  <img src={GooglePlay} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Footer;
