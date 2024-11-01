import axios from 'axios';

export async function getCarDirection(
  storedStartCoord,
  storedEndCoord,
  CourseResponse,
  setLinePath,
) {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY; // 실제 API 키로 교체
  const url = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';

  const headers = {
    Authorization: `KakaoAK ${REST_API_KEY}`,
    'Content-Type': 'application/json',
  };

  // 요청 데이터
  const requestData = {
    origin: {
      x: storedStartCoord.lng,
      y: storedStartCoord.lat,
    },
    destination: {
      x: storedEndCoord.lng,
      y: storedEndCoord.lat,
    },
    waypoints: CourseResponse.CourseResponse.courseDtos?.map(
      (course, index) => ({
        name: `waypoint${index}`,
        x: course.lng,
        y: course.lat,
      }),
    ),
    priority: 'RECOMMEND', // 경로 우선순위 설정
    car_fuel: 'GASOLINE', // 차량 연료 종류
    car_hipass: false, // 하이패스 사용 여부
    alternatives: true, // 대안 경로 미제공
    road_details: true, // 도로 세부 정보 포함 여부
  };

  try {
    const response = await axios.post(url, requestData, {headers});
    const data = response.data;
    // 전체 경로를 위한 배열 초기화
    const completePath = [];

    // 모든 경로 구간을 하나의 배열로 수집
    data.routes[0].sections.forEach(section => {
      section.roads.forEach(road => {
        road.vertexes.forEach((vertex, index) => {
          if (index % 2 === 0) {
            completePath.push({lat: road.vertexes[index + 1], lng: vertex});
          }
        });
      });
    });

    console.log(completePath); // 전체 경로 확인
    setLinePath(completePath); // linePath 상태 업데이트
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}
