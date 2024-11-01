import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {getRecommendPlaceData} from '../../api/recommendPlaceDataGetter';
import {InitialBackground} from '../../components/Common/InitialBackground';
import {Header, HeaderImage} from '../../components/Common/Header';
import {RecommendCardContainer} from '../../components/Recommend/RecommendCardContainer';
import Loading from '../../components/Common/Loading'; // Loading 컴포넌트 임포트
import {
  CardContainer,
  ImageContainer,
  CardImage,
  TextContainer,
  Title,
  Description,
  Location,
} from '../../components/Recommend/RecommendCard';

const RecommendCard = ({cardData}) => {
  const navigate = useNavigate();
  const navigateLocationInfo = cardData => {
    navigate('/locationInfo', {state: {cardData: cardData}});
  };

  return (
    <CardContainer onClick={() => navigateLocationInfo(cardData)}>
      <ImageContainer>
        <CardImage src={cardData.imageUrl} alt="감천 문화 마을" />
      </ImageContainer>
      <TextContainer>
        <Title>{cardData.name}</Title>
        <Description>
          {cardData.summary.length > 20
            ? cardData.summary.substring(0, 20) + '...'
            : cardData.summary}
        </Description>
        <Location>{cardData.address}</Location>
      </TextContainer>
    </CardContainer>
  );
};

const RecommendPage = () => {
  const location = useLocation();
  const {imageUrl} = location.state || {};
  const [cardDataList, setCardDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false); // 에러 초기화
      try {
        const recommendData = await getRecommendPlaceData(imageUrl);
        setCardDataList(recommendData.touristAttractions);
      } catch (error) {
        console.error('Failed to fetch recommendation data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [imageUrl]);

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

      {isLoading && (
        <Loading src={process.env.PUBLIC_URL + '/images/loading_icon.png'} />
      )}

      {!isLoading && isError && (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <img
            src={process.env.PUBLIC_URL + '/images/error_logo.png'}
            width="130px"
            height="150px"
            alt="Error"
          />
          <p>분석을 맡겨주신 사진과 일치하는 장소가 없어요...</p>
          <p>다른 사진을 넣어주시면 감사하겠습니다!</p>
        </div>
      )}

      {!isLoading && !isError && (
        <RecommendCardContainer>
          {cardDataList.map((cardData, index) => (
            <RecommendCard key={index} cardData={cardData} />
          ))}
        </RecommendCardContainer>
      )}
    </InitialBackground>
  );
};

export default RecommendPage;
