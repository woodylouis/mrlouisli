import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../images/background_desktop.jpg';

const HeaderContainer = styled.div`
    box-shadow: 1px 1px 2px 0px black, 0 0 25px grey, 0 0 5px grey;
    position: relative;
    background: transparent;
    height: 100vh;
    display: block;
`

const MyHeaderImage = styled.img`
    height: 100%;
    width: 100%;
    background-size: cover;
    overflow: hidden;
    background: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    
`
// const SayHi = styled.p`
//     position: absolute;
//     font-size: 1.75rem;
//     line-height: 1.75rem;
//     color: #fff;
//     font-weight: 400;
//     font-style: italic;
//     left: 50%;
//     top: 40%;
//     -webkit-transform: translateX(-40%);
//     transform: translateX(-40%);
// `

const Name = styled.p`
    position: absolute;
    font-size: 3.25rem;
    line-height: 1.75rem;
    color: #fff;
    font-weight: bold;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
`
// Load header image
const BackgroundHeader = ({children}) => (
    <HeaderContainer>
        {/* <SayHi>{children}</SayHi> */}
        {/* <SayHi></SayHi> */}
        <Name>Hey, I'm LOUIS LI</Name>
        {/* <Name>- LOUIS LI -</Name> */}
        <MyHeaderImage src={HeaderImage} alt="header-background" />
    </HeaderContainer>
);

export default BackgroundHeader;