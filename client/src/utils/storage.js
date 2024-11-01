// storage.js

// 시작 및 도착 좌표 저장 함수
export const saveStartCoordinate = start => {
  localStorage.setItem('startCoord', JSON.stringify(start));
};

// 도착 좌표 저장 함수
export const saveEndCoordinate = end => {
  localStorage.setItem('endCoord', JSON.stringify(end));
};

// 시작 좌표 불러오기 함수
export const getStartCoordinate = () => {
  const startCoord = localStorage.getItem('startCoord');
  return startCoord ? JSON.parse(startCoord) : null;
};

// 도착 좌표 불러오기 함수
export const getEndCoordinate = () => {
  const endCoord = localStorage.getItem('endCoord');
  return endCoord ? JSON.parse(endCoord) : null;
};

// 좌표 삭제 함수 (필요할 경우 추가)
export const clearCoordinates = () => {
  localStorage.removeItem('startCoord');
  localStorage.removeItem('endCoord');
};
