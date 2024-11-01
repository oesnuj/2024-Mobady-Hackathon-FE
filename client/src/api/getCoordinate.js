import axios from 'axios';

export const getCoordinate = async address => {
  try {
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/search/address.json',
      {
        params: {query: address},
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
        },
      },
    );

    if (response.data.documents.length > 0) {
      const {x, y} = response.data.documents[0];
      return {lat: y, lng: x}; // 좌표 객체 반환
    } else {
      throw new Error('좌표를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error; // 에러를 호출한 쪽에서 처리할 수 있도록 에러 던지기
  }
};
