import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 350px;
    transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

    /* 데스크탑 화면에서 크기 증가 */
    @media (min-width: 1024px) {
        max-width: 600px;
        padding: 20px;
        margin-right: 20px;
        transform: scale(1.05); /* 카드가 약간 커지는 효과 */
    }
`;

const ImageContainer = styled.div`
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 16px;

    /* 데스크탑 화면에서 이미지 크기 증가 */
    @media (min-width: 1024px) {
        width: 200px;
        height: 200px;
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;

    /* 데스크탑 화면에서 제목 크기 증가 */
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

const Description = styled.p`
    font-size: 12px;
    color: #666;
    margin: 4px 0;
    line-height: 1.4;
`;

const Location = styled.p`
    font-size: 12px;
    color: #999;
    margin: 4px 0;
    line-height: 1.4;
`;

export {CardContainer, Location, Title, CardImage, Description, ImageContainer, TextContainer}
