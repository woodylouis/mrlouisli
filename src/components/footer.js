import React from 'react';

import Typography from "@material-ui/core/Typography";
import Heading from './heading';
import styled from 'styled-components';
import FacebookLogo from '../images/facebook_logo.svg';
import LinkedInLogo from '../images/linkedin_logo.svg';


const Facebook = {
    imgSrc: FacebookLogo,
    link: "https://www.facebook.com/manzeon.lei"
}

const LinkedIn = {
    imgSrc: LinkedInLogo,
    link: "https://www.linkedin.com/in/mrlouisli/"
}


const Message = styled.div`
    color: grey;
`


const SocailToolLogo = styled.img`
    display: inline-block;
    margin-left: auto;
    margin-right: 1%;
    margin-bottom: 2.125rem;
    height: 5%;
    width: 5%;
    background: black;
    border-radius: 20%;
    
    
`

class Footer extends React.Component {
    render() {
        return(
            <div>
                
                <Heading>
                    <Typography variant="p" align="center">
                        <SocailToolLogo src={Facebook.imgSrc} alt="facebook" />
                        <SocailToolLogo src={LinkedIn.imgSrc} alt="linkedin" />
                        <Message>Let's get in touch. LinkedIn or Facebook messages work best. </Message>
                    </Typography>
                </Heading>                
            </div>
        )
    }
}

export default Footer;