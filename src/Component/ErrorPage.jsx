import { useRouteError } from "react-router-dom";
import NotFoundImage from "/img/NotFound.svg";

export default function ErrorPage() {
   /* const error = useRouteError();
   console.error(error);
 */
   return (
      <div
         id='error-page'
         className='flex flex-col items-center justify-center h-screen px-5'
      >
         <div>
            <img className='w-96 h-96' src={NotFoundImage} alt='' />
         </div>
         <div>
            <p className='pt-2 font-semibold text-center font-poppins'>
               maaf halaman yang anda cari belum dibuat
            </p>
         </div>
      </div>
   );
}
