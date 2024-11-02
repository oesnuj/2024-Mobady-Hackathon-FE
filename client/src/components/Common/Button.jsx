import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <div style={buttonStyle} onClick={onClick}>
      {text}
    </div>
  );
};

const buttonStyle = {
  width: '95%',
  padding: '15px 0',
  margin: '10px auto',
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#77757',
  backgroundColor: '#F4F4F4',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  userSelect: 'none',
};

export default Button;
