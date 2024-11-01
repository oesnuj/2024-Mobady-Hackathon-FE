import React from 'react';
import {MapMarker} from 'react-kakao-maps-sdk';

const MarkerComponent = ({
  course,
  markerImageUrl,
  size = {width: 24, height: 35},
}) => {
  return (
    <MapMarker
      position={{
        lat: course.lat,
        lng: course.lng,
      }}
      image={{
        src: markerImageUrl,
        size: size,
      }}
      title={course.name}
    ></MapMarker>
  );
};

export default MarkerComponent;
