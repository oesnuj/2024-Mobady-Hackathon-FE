import React from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

const AddressSearch = props => {
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <DaumPostcodeEmbed
      onComplete={handleComplete}
      style={{width: '100%', height: '500px'}}
      {...props}
    />
  );
};

export default AddressSearch;
