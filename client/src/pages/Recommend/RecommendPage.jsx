import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRecommendPlaceData } from "../../api/recommendPlaceDataGetter";
import { InitialBackground } from "../../components/Common/InitialBackground";
import { Header, HeaderImage } from "../../components/Common/Header";
import { RecommendCardContainer } from "../../components/Recommend/RecommendCardContainer";
import {
    CardContainer,
    ImageContainer,
    CardImage,
    TextContainer,
    Title,
    Description,
    Location,
} from "../../components/Recommend/RecommendCard";

const RecommendCard = ({ cardData }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={cardData.imageUrl} alt="감천 문화 마을" />
            </ImageContainer>
            <TextContainer>
                <Title>{cardData.name}</Title>
                <Description>
                    {cardData.summary.length > 20 ? cardData.summary.substring(0, 20) + "..." : cardData.summary}
                </Description>
                <Location>{cardData.address}</Location>
            </TextContainer>
        </CardContainer>
    );
};

const RecommendPage = () => {
    const location = useLocation();
    const { imageUrl } = location.state || {};
    const [cardDataList, setCardDataList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(imageUrl);
                const recommendData = await getRecommendPlaceData(imageUrl);
                console.log(recommendData.touristAttractions);
                setCardDataList(recommendData.touristAttractions);
            } catch (error) {
                console.error("Failed to fetch recommendation data:", error);
            }
        };

        fetchData();
    }, [imageUrl]);

    return (
        <InitialBackground>
            <Header>
                <HeaderImage>
                    <img src={process.env.PUBLIC_URL + '/images/header_logo.png'} height='90%' alt="Header Logo" />
                </HeaderImage>
            </Header>

            <RecommendCardContainer>
                {cardDataList.map((cardData, index) => (
                    <RecommendCard key={index} cardData={cardData} />
                ))}
            </RecommendCardContainer>
        </InitialBackground>
    );
};

export default RecommendPage;
