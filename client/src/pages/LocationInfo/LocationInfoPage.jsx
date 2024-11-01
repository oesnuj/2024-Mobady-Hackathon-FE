import React, {useEffect, useState} from 'react';
import {InitialBackground} from '../../components/Common/InitialBackground';
import {useLocation} from 'react-router-dom';
import {Header, HeaderImage} from '../../components/Common/Header';
import {ImageContainer} from '../../components/ImageContainer/ImageContainer';
import {PlaceInfo} from '../../components/PlaceInfo/PlaceInfo';
import {ToggleMapContainer} from '../../components/LocationInfo/ToggleMapContainer';
import styled from 'styled-components';
import {LocationPinningMap} from '../../components/LocationPinningMap/LocationPinningMap';

const ButtonContainer = styled.div`
  z-index: 1000;
  top: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 10px;
  width: 90%;
  padding: 25px;
`;

const ShowInfoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.active ? '#5A9BF7' : '#FFFFFF')};
  color: ${props => (props.active ? '#FFFFFF' : '#000000')};
  border: 1px solid #5a9bf7;
  cursor: pointer;
`;

const ShowMapButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.active ? '#5A9BF7' : '#FFFFFF')};
  color: ${props => (props.active ? '#FFFFFF' : '#000000')};
  border: 1px solid #5a9bf7;
  border-radius: 5px;
  cursor: pointer;
`;

const LocationInfoPage = () => {
  const location = useLocation();
  const {cardData} = location.state || {};
  const [mapToggle, setMapToggle] = useState(false); // true일 때 '지도' 버튼 활성화, false일 때 '정보' 버튼 활성화

  useEffect(() => {
    console.log(cardData);
  }, []);

  return (
    <InitialBackground>
      <Header>
        <HeaderImage>
          <img
            src={process.env.PUBLIC_URL + '/images/header_logo.png'}
            height="90%"
            alt="Header Logo"
          />
        </HeaderImage>
      </Header>
      <ImageContainer src={cardData.imageUrl} />
      <ToggleMapContainer>
        <ButtonContainer>
          <ShowMapButton active={mapToggle} onClick={() => setMapToggle(true)}>
            정보
          </ShowMapButton>
          <ShowInfoButton
            active={!mapToggle}
            onClick={() => setMapToggle(false)}
          >
            지도
          </ShowInfoButton>
        </ButtonContainer>
        {mapToggle ? (
          <PlaceInfo>{cardData.summary}</PlaceInfo>
        ) : (
          <LocationPinningMap />
        )}
      </ToggleMapContainer>
    </InitialBackground>
  );
};

export default LocationInfoPage;
