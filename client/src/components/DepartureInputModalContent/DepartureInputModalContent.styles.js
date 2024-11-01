import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 25px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1em;
  color: #999;
  &::placeholder {
    color: #ccc;
  }
`;

const SearchIcon = styled.div`
  font-size: 1.5em;
  color: #999;
`;

const CheckBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #333;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

const SearchButton = styled.button`
  background-color: #d8e8ff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b0d4ff;
  }
`;

const ModalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const ModalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '15px',
  width: '90%',
  maxWidth: '400px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
};

export {
  SearchContainer,
  SearchInput,
  SearchIcon,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBox,
  SearchButton,
  ModalStyle,
  ModalContentStyle,
};
