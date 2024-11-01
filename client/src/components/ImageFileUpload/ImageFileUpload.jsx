import styled from "styled-components";

const ImageUploadPaddingBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 250px;
        width: 400px;
`;


const ImageUploadIcon = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1.5px dashed #979797;
        border-radius: 45px;
        height: 45px;
        width: 45px;
        transition: border-color 0.4s ease;
`;

const ImageUploadTextPaddingBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 40px;
        width: 200px;
`;

const ImageUploadText = styled.div`
        font-size: 16px;
        color: #979797;
        transition: color 0.4s ease;
`;


const ImageFileUploadComponent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1.5px dashed #979797;
        border-radius: 45px;
        height: 150px;
        width: 288px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
        transition: border-color 0.2s ease;

        &:hover {
                border-color: #60BAFF;

                /* 하위 요소에 적용할 스타일을 위해 네스팅 */
                ${ImageUploadIcon} {
                        border-color: #60BAFF;
                }

                ${ImageUploadText} {
                        color: #60BAFF;
                }
        }
`;

export { ImageUploadPaddingBox, ImageFileUploadComponent, ImageUploadIcon, ImageUploadTextPaddingBox, ImageUploadText };
