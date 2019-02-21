// React includes
import React from 'react';
import styled from 'styled-components';


//local inclues
import Background from '../components/background';
// import Navigation from '../components/Navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import { Gallery } from '../components/gallery';

const AboutWrapper = styled.div`
    // text-align: center
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 4.725rem;
    background-color: white;
`;


const GalleryWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2.125rem;
    background-color: #f7f5f0;
`

const FooterWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2.125rem;
    background-color: white;
`

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { country: 'Australia'}
    //     this.changeCountryOption = this.changeCountryOption.bind(this);
    // }

    // changeCountryOption(newCountryOption) {
    //     this.setState({
    //         country: newCountryOption
    //     });
    // }

    render() {
        return (
            <div>              
                <Header />
                <AboutWrapper>
                    <Background />
                </AboutWrapper>

                <GalleryWrapper>
                    {/* <Gallery country={this.state.country} onChange={this.changeCountryOption} /> */}
                    <Gallery />
                </GalleryWrapper>

                {/* <FooterWrapper>
                    <Footer />
                </FooterWrapper> */}
            </div>
        )
    }
}

export default Home;
