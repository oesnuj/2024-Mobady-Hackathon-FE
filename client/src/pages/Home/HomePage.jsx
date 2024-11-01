import React from "react";
import {InitialBackground} from "../../components/Common/InitialBackground";
import {
    ImageFileUploadComponent,
    ImageUploadPaddingBox
} from "../../components/ImageFileUploadComponent/ImageFileUploadComponent";

const HomePage = () => {
    return (
        <InitialBackground>
            <img src={process.env.PUBLIC_URL + '/images/obobo_logo_with_title.png'} alt="Splash Screen"/>
            <ImageUploadPaddingBox>
                <ImageFileUploadComponent />
            </ImageUploadPaddingBox>

        </InitialBackground>
    );
};

export default HomePage;