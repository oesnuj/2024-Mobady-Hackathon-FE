import React, { useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../../api/imageUploader"; // uploadImage 함수 임포트
import { useNavigate } from 'react-router-dom';
import { InitialBackground } from "../../components/Common/InitialBackground";
import {
    ImageFileUploadComponent, ImageUploadIcon,
    ImageUploadPaddingBox, ImageUploadText, ImageUploadTextPaddingBox
} from "../../components/ImageFileUpload/ImageFileUpload";

const UploadIcon = styled.img`
    position: absolute;
    transition: opacity 0.4s ease;
    opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
`;

const DefaultIcon = styled.img`
    position: absolute;
    transition: opacity 0.4s ease;
    opacity: ${({ isHovered }) => (isHovered ? 0 : 1)};
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const HomePage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = React.useRef(null);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleFileUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files ? event.target.files[0] : event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(file)
            try {
                const imageUrl = await uploadImage(file);
                navigate('/recommend', { state: {imageUrl : imageUrl}});

            } catch (error) {
                console.error("File upload failed:", error);
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsHovered(true);
    };

    const handleDragLeave = () => {
        setIsHovered(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsHovered(false);
        handleFileChange(event);
    };

    const preventDragDropOutside = (event) => {
        event.preventDefault();
    };

    return (
        <InitialBackground onDragOver={preventDragDropOutside} onDrop={preventDragDropOutside}>
            <img src={process.env.PUBLIC_URL + '/images/obabo_logo_with_title.png'} alt="Splash Screen" />
            <ImageUploadPaddingBox>
                <ImageFileUploadComponent
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleFileUploadClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <ImageUploadIcon>
                        <DefaultIcon
                            src={process.env.PUBLIC_URL + '/images/icons/photo_upload_icon.png'}
                            isHovered={isHovered}
                        />
                        <UploadIcon
                            src={process.env.PUBLIC_URL + '/images/icons/photo_upload_active_icon.png'}
                            isHovered={isHovered}
                        />
                    </ImageUploadIcon>
                    <ImageUploadTextPaddingBox>
                        <ImageUploadText>
                            어딜 가고 싶나요?
                        </ImageUploadText>
                        <ImageUploadText>
                            이미지로 알려주세요!
                        </ImageUploadText>
                    </ImageUploadTextPaddingBox>
                </ImageFileUploadComponent>
                <HiddenFileInput
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                {selectedImage && (
                    <img src={selectedImage} alt="Selected" style={{ marginTop: "20px", maxWidth: "100%" }} />
                )}
            </ImageUploadPaddingBox>
        </InitialBackground>
    );
};

export default HomePage;
