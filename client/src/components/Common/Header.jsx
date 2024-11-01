import styled from "styled-components";

const Header = styled.div`
    position: fixed;
    top: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    padding-bottom: 25px;
    background-color : #E6F8FF;
    border-bottom: 2px solid #FFFFFF;
`

const HeaderImage = styled.div`
    display: flex;
    align-items: center;
    padding-top: 25px;
    padding-left: 20px;
`

export {Header, HeaderImage};