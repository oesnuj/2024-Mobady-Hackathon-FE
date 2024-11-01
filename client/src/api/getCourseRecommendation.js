import axios from 'axios';

// 출발 및 도착 좌표와 내용을 기반으로 경로 추천 데이터를 가져오는 함수
export const getCourseRecommendation = async (
  startLng,
  startLat,
  endLng,
  endLat,
  contents,
) => {
  console.log(startLng, startLat, endLng, endLat, contents);
  try {
    const response = await axios.get(
      'https://port-0-hackathon-m2vobgdn7a22cb40.sel4.cloudtype.app/api/course',
      {
        params: {
          startX: startLng,
          startY: startLat,
          endX: endLng,
          endY: endLat,
          contents: contents,
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('경로 추천 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
};
