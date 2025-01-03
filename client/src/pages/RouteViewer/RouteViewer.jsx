import React, {useState, useEffect} from 'react';
import KakaoMap from '../../components/KakaoMap/KakaoMap';
import Modal from '../../components/Common/Modal/Modal';
import DepartureInputModalContent from '../../components/DepartureInputModalContent/DepartureInputModalContent';
import {InitialBackground} from '../../components/Common/InitialBackground';
import {Header, HeaderImage} from '../../components/Common/Header';
import styled from 'styled-components';
import Button from '../../components/Common/Button';
const ButtonBox = styled.div`
  width: 420px;
`;


const RouteViewer = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false); // "경로 정보 보기" 모달 상태
  const [isPinInfoModalOpen, setIsPinInfoModalOpen] = useState(false); // 핀 클릭 시 모달 상태
  const [selectedPin, setSelectedPin] = useState(null); // 핀 클릭 시 선택된 핀의 정보
  const [recommendationList, setRecommendationList] = useState({});

  const openInputModal = () => setIsInputModalOpen(true);
  const closeInputModal = () => setIsInputModalOpen(false);

  const openPinInfoModal = pinData => {
    setSelectedPin(pinData); // 선택된 핀의 데이터 설정
    setIsPinInfoModalOpen(true);
  };
  const closePinInfoModal = () => setIsPinInfoModalOpen(false);
  console.log(recommendationList);

  useEffect(() => {
    // 추천 경로 리스트를 로드하는 로직을 여기에 추가할 수 있음
    // 예시: setRecommendationList([...]);
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
      <KakaoMap CourseResponse={recommendationList} />

      {/* "경로 정보 보기" 버튼과 모달 */}
      <ButtonBox>
      <Button text={"경로 재탐색"} onClick={openInputModal} />
      </ButtonBox>
      {isInputModalOpen && (
        <Modal isOpen={isInputModalOpen} onClose={closeInputModal}>
          <DepartureInputModalContent
            setRecommendationList={setRecommendationList}
            closeInputModal={closeInputModal}
          />
        </Modal>
      )}

      {/* 핀 클릭 시 나타나는 모달 */}
      {isPinInfoModalOpen && selectedPin && (
        <Modal isOpen={isPinInfoModalOpen} onClose={closePinInfoModal}>
          <h2>{selectedPin.name}</h2>
          <p>{selectedPin.address}</p>
          <img
            src={selectedPin.imageUrl}
            alt={selectedPin.name}
            style={{width: '100%', borderRadius: '8px'}}
          />
        </Modal>
      )}
    </InitialBackground>
  );
};

export default RouteViewer;
