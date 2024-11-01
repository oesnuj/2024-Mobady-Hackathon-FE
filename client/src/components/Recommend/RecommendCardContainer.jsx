import styled from "styled-components";

const RecommendCardContainer = styled.div`
    display: grid;
    gap: 16px;
    padding: 16px;
    overflow-y: scroll;
  
  /* 데스크탑 화면에서는 2개의 Card가 한 행에 나타남 */
  grid-template-columns: repeat(2, 1fr);
    margin-top: 80px;
    align-items: flex-start;

  /* 모바일 화면에서는 1개의 Card가 한 행에 나타남 */
  @media (max-width: 768px) {
      margin-top: 60px;
    grid-template-columns: 1fr;
      align-items: flex-start;
      padding-top: 24px;
  }
`;

export { RecommendCardContainer };