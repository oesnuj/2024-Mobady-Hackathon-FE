import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Map, Polyline} from 'react-kakao-maps-sdk';
import Maker from './Maker';
import {getStartCoordinate, getEndCoordinate} from '../../utils/storage.js';
import {getCarDirection} from '../../api/getCarDirection';

const KakaoMap = CourseResponse => {
  const [linePath, setLinePath] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const storedEndCoord = getEndCoordinate();
  const storedStartCoord = getStartCoordinate();
  // 경로 데이터를 받아오는 함수 (최초 렌더링 시 한 번만 실행)
  const fetchDirection = async () => {
    setIsLoading(true);
    console.log(storedStartCoord, storedEndCoord, CourseResponse, setLinePath);
    await getCarDirection(
      storedStartCoord,
      storedEndCoord,
      CourseResponse,
      setLinePath,
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDirection();
  }, [CourseResponse.CourseResponse]);

  return (
    <>
      {isLoading ? (
        <p>로딩 중...</p> // 로딩 표시
      ) : (
        <Map
          id="map"
          center={{
            lat: CourseResponse?.centerY || Number(storedStartCoord?.lat),
            lng: CourseResponse?.centerX || Number(storedStartCoord?.lng),
          }}
          style={{
            width: '420px',
            height: '350px',
          }}
          level={8}
        >
          <Maker
            course={storedStartCoord}
            markerImageUrl={
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png'
            }
            size={{width: 45, height: 40}}
          />

          {CourseResponse.CourseResponse.courseDtos &&
            CourseResponse.CourseResponse.courseDtos.map((course, index) => (
              <Maker
                key={`${course.name}-${index}`}
                course={course}
                markerImageUrl={
                  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'
                }
              />
            ))}

          <Maker
            course={storedEndCoord}
            markerImageUrl={
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png'
            }
            size={{width: 45, height: 40}}
          />

          {linePath.length > 0 && (
            <Polyline
              path={linePath}
              strokeWeight={2}
              strokeColor="#FF0000"
              strokeOpacity={0.7}
              strokeStyle="solid"
            />
          )}
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
