import React from 'react';
import styled from 'styled-components';
import Heading from './heading';
import Typography from "@material-ui/core/Typography";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LooksAustralia from '@material-ui/icons/LooksOne';
import LooksChina from '@material-ui/icons/LooksTwo';
import LooksUSA from '@material-ui/icons/Looks3';

import GalleryContainer from 'react-photo-gallery';
import Lightbox from 'react-images';

//Image import
import AustraliaOne from '../images/Australia_1.jpg';
import AustraliaTwo from '../images/Australia_2.jpg';
import AustraliaThree from '../images/Australia_3.jpg';
import AustraliaFour from '../images/Australia_4.jpg';
import AustraliaFive from '../images/Australia_5.jpg';
import AustraliaSix from '../images/Australia_6.jpg';
import ChinaOne from '../images/China_1.jpg';
import ChinaTwo from '../images/China_2.jpg';
import ChinaThree from '../images/China_3.jpg';
import ChinaFour from '../images/China_4.jpg';
import ChinaFive from '../images/China_5.jpg';
import ChinaSix from '../images/China_6.jpg';
import ChinaSeven from '../images/China_7.jpg';
import ChinaEight from '../images/China_8.jpg';
import ChinaNine from '../images/China_9.jpg';
import USAOne from '../images/america_1.jpg';
import USATwo from '../images/america_2.jpg';
import USAThree from '../images/america_3.jpg';

const GalleryImage = styled.img`
    height: 50%;
    width: 30%;
    display: inline-block
`

const ausPhotos = [
    { src: AustraliaOne, width: 1.5, height: 1 },
    { src: AustraliaTwo, width: 1.5, height: 1},
    { src: AustraliaThree, width: 1, height: 1},
    { src: AustraliaFour, width: 1.5, height: 1},
    { src: AustraliaFive, width: 1.3, height: 1},
    { src: AustraliaSix, width: 1.5, height: 1},
];

const chinaPhotos = [
    { src: ChinaOne, width: 1.5, height: 1},
    { src: ChinaTwo, width: 1.3, height: 1.3},
    { src: ChinaThree, width: 1, height: 1},
    { src: ChinaFour, width: 1, height: 1},
    { src: ChinaFive, width: 1.3, height: 1.3},
    { src: ChinaSix, width: 2, height: 1},
    { src: ChinaSeven, width: 2, height: 1},
    { src: ChinaEight, width: 2, height: 1.2},
    { src: ChinaNine, width: 1.3, height: 2},
];

const usaPhotos = [
    { src: USAOne, width: 4, height: 3 },
    { src: USATwo, width: 1, height: 1},
    { src: USAThree, width: 3, height: 3}
];

export class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.state = { value: 0}; //initial state for gallery
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return(
            <div>
                <Heading>
                    <Typography variant="h4" align="center">
                    - My journey Starts here -
                    </Typography>
                </Heading>
                
                <Tabs value={value} indicatorColor='none' onChange={this.handleChange} centered>
                    <Tab icon={<LooksAustralia />} label="Australia"/>
                    <Tab icon={<LooksChina />} label="China"/>
                    {/* <Tab icon={<LooksUSA />} label="USA"/> */}
                </Tabs>

                { value === 0 && (
                    <div>                 
                        <GalleryContainer photos={ausPhotos} onClick={this.openLightbox} />  
                        <Lightbox images={ausPhotos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        />                          
                    </div>

                )}

                { value === 1 && (
                    <div>
                        <GalleryContainer photos={chinaPhotos} onClick={this.openLightbox} />  
                        <Lightbox images={chinaPhotos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        /> 
                    </div>
                )}

                {/* { value === 2 && (
                    <div>
                        <GalleryContainer photos={usaPhotos} onClick={this.openLightbox} />  
                        <Lightbox images={usaPhotos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        /> 
                    </div>
                )} */}
            </div>
        );
    }
}
