// src/components/Common/Loading.js
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 상단에 배치 */
`;

const LoadingImage = styled.img`
  width: 80px; /* 이미지 크기 */
  height: 80px;
  margin-bottom: 10px;
  animation: jump 0.6s ease-in-out infinite;

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px); /* 위로 이동하는 거리 */
    }
  }
`;

const LoadingMap = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['오바부가 경로를 찾고 있어요 🥹', '조금만 기다려주세요 😎'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000); // 2초마다 텍스트 변경

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  return (
    <LoadingContainer>
      <LoadingImage
        src={process.env.PUBLIC_URL + '/images/obabo_logo.png'}
        alt="Loading"
      />
      <div>{texts[textIndex]}</div>
    </LoadingContainer>
  );
};

export default LoadingMap;
