import React, {useState} from 'react';
import AddressSearch from '../../components/AddressSearch/AddressSearch';
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBox,
  SearchButton,
  ModalStyle,
  ModalContentStyle,
} from './DepartureInputModalContent.styles';
import {getCoordinate} from '../../api/getCoordinate';
import {getCourseRecommendation} from '../../api/getCourseRecommendation';
import {
  saveStartCoordinate,
  getStartCoordinate,
  getEndCoordinate,
} from '../../utils/storage';

const Start = getStartCoordinate();

const DepartureInputModalContent = ({
  setRecommendationList,
  closeInputModal,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소 관리
  const [startCoordinate, setStartCoordinate] = useState({
    lng: Start.lng,
    lat: Start.lat,
  });
  const [selectedCategories, setSelectedCategories] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSelect = async address => {
    setSelectedAddress(address);
    closeModal();

    try {
      const startCoord = await getCoordinate(address);
      setStartCoordinate({
        lng: startCoord.lng,
        lat: startCoord.lat,
      });
      console.log('좌표:', startCoord);
      saveStartCoordinate(startCoord);
    } catch (error) {
      console.error('좌표를 가져오는 데 실패했습니다:', error);
    }
  };

  const handleCheckboxChange = category => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(item => item !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const selectedCategoriesString = selectedCategories.join(' ');

  const handleCourseRecommendation = async () => {
    try {
      if (!startCoordinate.lng || !startCoordinate.lat) {
        console.error('시작 좌표가 설정되지 않았습니다.');
        return;
      }

      const endCoordinate = getEndCoordinate();
      if (!endCoordinate || !endCoordinate.lng || !endCoordinate.lat) {
        console.error('도착 좌표가 설정되지 않았습니다.');
        return;
      }
      closeInputModal();
      const recommendationData = await getCourseRecommendation(
        Number(startCoordinate.lng),
        Number(startCoordinate.lat),
        endCoordinate.lng,
        endCoordinate.lat,
        selectedCategoriesString,
      );
      console.log('추천 데이터:', recommendationData);
      setRecommendationList(recommendationData); // 상위 컴포넌트 상태 업데이트
    } catch (error) {
      console.error('코스 추천을 가져오는 데 실패했습니다:', error);
    }
  };
  return (
    <div>
      <SearchContainer onClick={openModal}>
        <SearchInput placeholder="내 위치" value={selectedAddress} readOnly />
        <SearchIcon>🔍</SearchIcon>
      </SearchContainer>
      <p style={{fontSize: '0.75em', color: '#666', marginTop: '8px'}}>
        선택한 옵션에 따라 사용자 맞춤 코스를 제공합니다
      </p>
      <CheckBoxContainer>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={selectedCategories.includes('음식점')}
            onChange={() => handleCheckboxChange('음식점')}
          />
          음식점
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={selectedCategories.includes('숙박')}
            onChange={() => handleCheckboxChange('숙박')}
          />
          숙박
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={selectedCategories.includes('관광지')}
            onChange={() => handleCheckboxChange('관광지')}
          />
          관광지
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={selectedCategories.includes('문화시설')}
            onChange={() => handleCheckboxChange('문화시설')}
          />
          문화시설
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={selectedCategories.includes('레포츠')}
            onChange={() => handleCheckboxChange('레포츠')}
          />
          레포츠
        </CheckBoxLabel>
      </CheckBoxContainer>
      <div style={{fontSize: '0.85em'}}>
        선택된 테마: {selectedCategoriesString}
      </div>
      <SearchButton onClick={handleCourseRecommendation}>
        경로 재탐색
      </SearchButton>
      {isModalOpen && (
        <div style={ModalStyle} onClick={closeModal}>
          <div style={ModalContentStyle} onClick={e => e.stopPropagation()}>
            <AddressSearch
              onComplete={data => handleAddressSelect(data.address)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartureInputModalContent;
