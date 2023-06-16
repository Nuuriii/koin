import React from "react";
import { Link } from "react-router-dom";
import AppStore from "/img/AppStore.svg";
import GooglePlay from "/img/GooglePlay.svg";
import FacebookImage from "/img/facebook.svg";
import InstagramImage from "/img/instagram.svg";
import LinkedinImage from "/img/linkedin.svg";
import TwitterImage from "/img/twitter.svg";

function Footer() {
   return (
      <>
         <footer className='flex items-center justify-between px-16 py-14 font-poppins bg-violet-950'>
            <div className='flex flex-col gap-y-8'>
               <h4 className='text-5xl font-semibold text-white'>
                  K<span className='text-purple-400'>o</span>in
               </h4>
               <div className='flex text-white gap-7'>
                  <Link>FAQ's</Link>
                  <Link>Contact Us</Link>
                  <Link>Terms & Conditions</Link>
                  <Link>Privacy Policy</Link>
               </div>
               <div className='flex items-center gap-4'>
                  <Link>
                     <img
                        className='w-full h-full'
                        src={InstagramImage}
                        alt=''
                     />
                  </Link>
                  <Link>
                     <img
                        className='w-full h-full'
                        src={FacebookImage}
                        alt=''
                     />
                  </Link>
                  <Link>
                     <img className='w-full h-full' src={TwitterImage} alt='' />
                  </Link>
                  <Link>
                     <img
                        className='w-full h-full'
                        src={LinkedinImage}
                        alt=''
                     />
                  </Link>
               </div>
            </div>
            <div className='flex flex-col justify-center'>
               <h4 className='mb-1 text-white'>Join our mailing list</h4>
               <form action=''>
                  <input
                     className='w-2/4 px-4 py-3 rounded-l-md'
                     type='email'
                     name='email'
                     id='email'
                     placeholder='Enter Your Email. . .'
                  />
                  <button className='relative px-5 py-3 font-semibold bg-purple-400 rounded-md right-2'>
                     Send
                  </button>
               </form>
               <div className='flex gap-4 mt-7'>
                  <img src={GooglePlay} alt='' />
                  <img src={AppStore} alt='' />
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;
