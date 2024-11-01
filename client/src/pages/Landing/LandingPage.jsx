import React from "react";
import {InitialBackground} from "../../components/Common/InitialBackground";
const LandingPage = () => {
    return (
        <InitialBackground>
            <img src={process.env.PUBLIC_URL + '/images/obabo_logo_with_title.png'}/>
        </InitialBackground>
    );
};

export default LandingPage;