import React from "react";
import AboutUs from "./middle2";
import Navbar from "./nav4";
import StatsSection from "./statesection";

import ImageWithPlayButton from "./imgwithplaybutton";
import TeamAndCompanies from "./teamandcompanies";
import WorkWithUs from "./workwithus";
import Footer4 from "./footer 4";
export default function aboutUs(){

    return(
        <><Navbar />
        <AboutUs />
        <StatsSection/>
        <ImageWithPlayButton/>
        <TeamAndCompanies/>
        <WorkWithUs />
        <Footer4 />

        </>


    )
}