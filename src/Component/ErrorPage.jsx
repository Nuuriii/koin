import { useRouteError } from "react-router-dom";
import NotFoundImage from "/img/NotFound.svg";

export default function ErrorPage() {
   /* const error = useRouteError();
   console.error(error);
 */
   return (
      <div
         id='error-page'
         className='flex flex-col items-center justify-center h-screen'
      >
         <div>
            <img src={NotFoundImage} alt='' />
         </div>
         <p className='pt-4 font-semibold font-poppins'>
            Maaf halaman yang anda cari belum dibuat
         </p>
      </div>
   );
}
