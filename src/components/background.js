import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import CSIROlogo from '../images/CSIRO_dutton_park.jpeg';
import GriffithLogo from '../images/griffith_library.jpg';
import NDIALogo from '../images/ndis_logo.png';
import Heading from './heading';

// const Title = styled.div`
//   // text-align: center;
//   padding-top: 4.725rem;
//   padding-bottom: 3.125rem;
// `

const csiro = {
  imgSrc: CSIROlogo,
  company: "CSIRO Land and Water",
  title: "Python Developer",
  when: "2018",
  place: "Dutton Park, Brisbane",
  detail: "The goals of my project - 'Sniffing for Services' were to make a database for scientists to support their research in CSIRO. The project is to capture description the containers may have and categories metadata for all data services from such kinds of data servers."
}

const griffith = {
  imgSrc: GriffithLogo,
  company: "Griffith University",
  title: "MIT in Computer Science",
  when: "2018",
  place: "Gold Coast",
  detail: "Griffith University presented unprecedented scale and diversity of opportunity. My two years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview. My experience dancing with project management showed me the power of empathetic leadership and expanded my artistic comfort zone. My tenure throwing major, campus-wide events validated that quality stems from attention to detail. My last semester abroad at China's GuangDong Unversity of Forieign Studies humbled me to explore my place in the world. My engagement in Griffith's tech & innovation initiatives exercised my creative muscle, sparked my obsession with design, and strengthened my tolerance to adversity."
}

const ndia = {
  imgSrc: NDIALogo,
  company: "Nation Disability Insurance Agency",
  title: "Software Engineer",
  when: "Since 2018",
  place: "Chermside",
  detail: "My team works on building amazing user experiences for NDIS employees. I helped carry out the top-to-bottom design and implementation of PANDA's UI, and currently work as a front-end developer. "
}

const CompanyLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-color: transpartent;
  width: 100%;
  height: 200px;
  overflow: hidden;
  // background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
`

const CompanyName = styled.h3`
  padding-top: 10px;
  color: #37c;
  font-size: 2em;
`

const JobTitle = styled.p`
  padding-top: 10px;
  color: #689F38;
  font-weight: 700;
`
const Place = styled.p`
  padding-top: 10px;
  color: grey;
`

const JobDetail = styled.p`
  padding-top: 25px;
  color: black;
  font-weight: normal;
  font-size: 100%;
  font-style: normal;
  line-height: 130%;
`
const JustSpace = styled.p`
  padding: 25px;
`

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: "center",
    color: theme.palette.text.secondary,
    // display: "block"
    borderColor: theme.palette.text.contrastText
  }
});

function Background(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Heading>
        <Typography variant="h4" align="center">
          - Here's what I've done so far -
        </Typography>
      </Heading>
      {/* NDIA */}
      <Grid container spacing={40} justify = "center">
        <Grid item sm={3} xs={10}>
          <CompanyLogo src={ndia.imgSrc} alt="csiro"  />
        </Grid>
        <Grid item sm={6} xs={10}>
          <CompanyName>{ndia.company}</CompanyName>
          <JobTitle>{ndia.title}, {ndia.when}</JobTitle>
          <Place>{ndia.place}</Place>
          <JobDetail>{ndia.detail}</JobDetail>
        </Grid>
      </Grid>
      <JustSpace />
      {/* CSIRO */}
      <Grid container spacing={40} justify = "center">
        <Grid item sm={3} xs={10}>
          <CompanyLogo src={csiro.imgSrc} alt="csiro"  />
        </Grid>
        <Grid item sm={6} xs={10}>
          <CompanyName>{csiro.company}</CompanyName>
          <JobTitle>{csiro.title}, {csiro.when}</JobTitle>
          <Place>{csiro.place}</Place>
          <JobDetail>{csiro.detail}</JobDetail>
        </Grid>
      </Grid>
      <JustSpace />
      {/* Griffith University */}
      <Grid container spacing={40} justify = "center">
        <Grid item sm={3} xs={10}>
          <CompanyLogo src={griffith.imgSrc} alt="griffith"  />
        </Grid>
        <Grid item sm={6} xs={10}>
          <CompanyName>{griffith.company}</CompanyName>
          <JobTitle>{griffith.title}, {griffith.when}</JobTitle>
          <Place>{griffith.place}</Place>
          <JobDetail>{griffith.detail}</JobDetail>
        </Grid>
      </Grid>
    </div>
  );
}

Background.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);
