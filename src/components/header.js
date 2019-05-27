import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../images/background_desktop.jpg';
import NavBar from './nav';
const HeaderContainer = styled.div`
    
    box-shadow: 1px 1px 2px 0px black, 0 0 25px grey, 0 0 5px grey;
    position: relative;
    background: transparent;
    height: 100vh;
    display: block;
`

const MyHeaderImage = styled.img`
    height: 100vh;
    width: 100%;
    background-size: cover;
    overflow: hidden;
    background: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
`
const Name = styled.p`
    @media (max-width: 700px) {
        font-size: 2.1rem;
        line-height: 2.75rem;
    }
    @media (min-width: 701px) {
        font-size: 3.25rem;
    }
    position: absolute;
    top: 45%;
    left: 50%;
    color: #fff;
    font-weight: bold;
    -webkit-transform: translateX(-30%);
    transform: translateX(-50%)
`
// Load header image
const header = () => (
    <HeaderContainer>
        
        <Name>
            Hey! <br/>I'm LOUIS LI
            <NavBar />
        </Name>
        
        <MyHeaderImage src={HeaderImage} alt="header-background" />
    </HeaderContainer>
);

export default header;