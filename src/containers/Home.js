// React includes
import React from 'react';
import styled from 'styled-components';


//local inclues
import Background from '../components/background';
// import Navigation from '../components/Navigation';
import Header from '../components/header';
import Footer from '../components/footer';

const AboutWrapper = styled.div`
    // text-align: center
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2.125rem;
    background-color: white;
`;

class Home extends React.Component {
    render() {
        return (
            <div>              
                <Header />
                <AboutWrapper>
                    <Background />
                </AboutWrapper>
                <Footer />
            </div>
        )
    }
}

export default Home;
