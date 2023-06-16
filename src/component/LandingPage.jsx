import React from "react";
import Nav from "./Nav/nav";
import GetStarted1 from "./GetStarted1/GetStarted1";
import Information from "./Information/Information";
import GetStarted2 from "./GetStarted2/GetStarted2";
import Service from "./Service/Service";
import Download from "./Download/Download";
import Benefit from "./Benefit/Benefit";
import Rating from "./Rating/Rating";
import Footer from "./Footer/Footer";

export default function LandingPage() {
   return (
      <>
         <div>
            <Nav />
            <GetStarted1 />
            <Information />
            <GetStarted2 />
            <Service />
            <Download />
            <Benefit />
            <Rating />
            <Footer />
         </div>
      </>
   );
}
