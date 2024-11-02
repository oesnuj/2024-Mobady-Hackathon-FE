import React from 'react';
import {Map} from 'react-kakao-maps-sdk';
import Maker from '../../components/KakaoMap/Maker';
import {getEndCoordinate} from '../../utils/storage';

const LocationInfoMap = () => {
  const storedEndCoord = getEndCoordinate();
  return (
    <>
        <Map
          id="map"
          center={{
            lat: storedEndCoord?.lat,
            lng: storedEndCoord?.lng,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={8}
        >

          <Maker
            course={storedEndCoord}
            markerImageUrl={
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png'
            }
            size={{width: 45, height: 40}}
          />

        </Map>
    </>
  );
};

export default LocationInfoMap;
