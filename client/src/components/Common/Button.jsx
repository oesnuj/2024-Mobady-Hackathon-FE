import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 10px auto;
  font-size: 1.0em;
  font-weight: bold;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  user-select: none;
  margin-top: 20px;

  &:hover {
    background-color: #e0e0e0; /* 예시로 hover 스타일 추가 */
  }
`;

export default Button;
