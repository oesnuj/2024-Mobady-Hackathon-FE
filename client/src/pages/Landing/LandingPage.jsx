import React from "react";
import {InitialBackground} from "../../components/InitialBackground/InitialBackground";
const LandingPage = () => {
    return (
        <InitialBackground>
            <img src={process.env.PUBLIC_URL + '/images/obobo_logo_with_title.png'} alt="Splash Screen"/>
        </InitialBackground>
    );
};

export default LandingPage;