import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Wrappers/Wrappers';
import { landingPageData } from '../../bento/landingPageData';
import icon from '../../assets/landing/LP_ReadMore.svg';
import iconAbout from '../../assets/landing/LP_About_Fullarticle.Arrow.svg';

const LandingView = ({ classes, statsData }) => (
  <div className={classes.page}>
    <div className={classes.container}>
      <div className={classes.hero}>
        <Grid container spacing={16} direction="row">
          <div className={classes.heroImage} />
          <div className={classes.heroTextContainer}>
            <div className={classes.heroTextWrapper}>
              <div className={classes.headerTitle}>
                { landingPageData.callToActionTitle }
              </div>
              <div className={classes.headerContent}>
                { landingPageData.callToActionDescription}
              </div>
              <div className={classes.headerButtonSection}>
                <Link to={landingPageData.callToActionLink} className={classes.headerLink}>
                  <Button className={classes.transparentButton} bgColor="neonBlue" color="white">
                    {landingPageData.callToActionButtonText}
                    <span className={classes.rightArrow}>
                      ▶
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
    <div className={classes.whiteSection} />
    <div className={classes.container}>
      <Grid container spacing={16} direction="row" className={`${classes.bannerBackground} ${classes.paddingTop30} ${classes.paddingLeft50}`}>
        <div className={classes.bannerTexture}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </div>
      </Grid>
      <Grid container spacing={16} direction="row" className={`${classes.bannerBackground} ${classes.paddingTop30} ${classes.paddingLeft50}`}>
        <div className={classes.ButtonSection}>
          <Link to="/subjects" className={classes.grayButton}>Learn More</Link>
        </div>
      </Grid>
    </div>
    <div className={classes.container}>
      <div className={classes.texture}>
        <Grid container spacing={16} direction="row" className={classes.landingContainer}>
          <div className={classes.contentLeft}>
            <div className={classes.about}>
              <div className={classes.aboutImageSection}>
                <img
                  src={landingPageData.tile1.img}
                  className={classes.aboutImage}
                  alt={landingPageData.tile1.alt}
                  id="tile1_image"
                />
              </div>
              <div className={classes.DCWords} id="tile1_title">
                {landingPageData.tile1.titleText.split(' ').map((word, index) => (
                  <>
                    {word}
                    {index === 0 && <br />}
                    {' '}
                  </>
                ))}
              </div>
              <div className={classes.aboutContent} id="tile1_description">
                {landingPageData.tile1.descriptionText}
              </div>
              <div className={classes.aboutButtonSection}>
                <div className={classes.aboutButtonLeft}>
                  <img src={iconAbout} className={classes.iconAbout} alt="CTDC about icon" />
                </div>
                <div className={classes.aboutButtonRight} id="tile1_button">
                  <Link
                    to={landingPageData.tile1.callToActionLink}
                    className={classes.aboutButton}
                  >
                    {landingPageData.tile1.callToActionText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.contentRight}>
            <div className={classes.contentRightTop}>
              <div className={classes.program}>
                <div className={classes.programImg}>
                  <img
                    className={classes.image}
                    src={landingPageData.tile2.img}
                    alt={landingPageData.tile2.alt}
                    id="tile2_image"
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.contentHeader} id="tile2_title">
                    {landingPageData.tile2.titleText}
                  </div>
                  <div className={classes.contentContainer} id="tile2_description">
                    {landingPageData.tile2.descriptionText}
                  </div>

                </div>
                <div className={classes.yellowButton}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.icon} src={icon} alt="GMB Trials" />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile2_button">
                    <Link
                      to={landingPageData.tile2.callToActionLink}
                      className={classes.yellowButton}
                    >
                      {landingPageData.tile2.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>
              <div className={classes.studies}>
                <div className={classes.programImg}>
                  <img
                    className={classes.image}
                    src={landingPageData.tile3.img}
                    alt={landingPageData.tile3.alt}
                    id="tile3_image"
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.contentHeader} id="tile3_title">
                    {landingPageData.tile3.titleText}
                  </div>
                  <div className={classes.contentContainer} id="tile3_description">
                    {landingPageData.tile3.descriptionText}
                  </div>

                </div>
                <div className={classes.brownButton}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.icon} src={icon} alt="GMB Request Access" />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile3_button">
                    <Link
                      to={landingPageData.tile3.callToActionLink}
                      className={classes.brownButton}
                    >
                      {landingPageData.tile3.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className={classes.contentRightBottom}>
              <div className={classes.cases} id="tile4_image">
                <div className={classes.mountainMeadowContentHeader} id="tile4_title">
                  {landingPageData.tile4.titleText}
                </div>
                <div className={classes.mountainMeadowContent} id="tile4_description">
                  {landingPageData.tile4.descriptionText}
                </div>
                <div className={classes.mountainMeadowButtonSection}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.mountainMeadowIcon} src={icon} alt="CTDC about " />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile4_button">
                    <Link
                      to={landingPageData.tile4.callToActionLink}
                      className={classes.mountainMeadowButton}
                    >
                      {landingPageData.tile4.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>

    </div>
  </div>
);
const styles = () => ({
  page: {
    marginTop: '-53px',
  },
  heroImage: {
    width: '100%',
    height: '562px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${landingPageData.landingPageHero.img})`,
  },
  texture: {
    backgroundSize: 'cover',
    backgroundImage: `url(${landingPageData.landingPageTexture.img})`,
    background: '#CAE6FC',
    padding: '120px 0 80px 0',
  },
  container: {
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',

  },

  bannerBackground: {
    backgroundColor: '#FFFFFF',
  },
  bannerTexture: {
    color: '#4898B4',
    fontFamily: 'Nunito',
    fontSize: '19px',
    lineHeight: '30px',
    textAlign: 'center',
    margin: '0 auto',
    letterSpacing: '0.050pt',
    textTransform: 'uppercase',
    width: '869px',
  },
  ButtonSection: {
    margin: '0 auto -15px auto',
    background: '#505050',
    width: '179px',
    height: '47px',
    borderRadius: '50px',
    textAlign: 'center',
  },
  grayButton: {
    height: '13px',
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '47px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },

  whiteSection: {
    height: '8px',
    background: 'white',
  },
  redButton: {
    height: '13px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '47px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  headerTitle: {
    paddingTop: '94px',
    fontFamily: 'Inter',
    fontSize: '38px',
    fontWeight: '300',
    lineHeight: '35px',
    color: '#0F253A',
    letterSpacing: '-0px',
    textTransform: 'uppercase',
  },
  paddingLeft50: {
    paddingLeft: '50px',
  },
  headerContent: {
    color: '#1E66A4',
    fontFamily: 'Nunito',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '27px',
    marginTop: '16px',
    marginBottom: '26px',
  },
  headerLink: {
    textDecoration: 'none',
  },

  iconAbout: {
    height: '17px',
    width: '9px',
    marginTop: '15px',
    marginLeft: '20px',
  },
  icon: {
    width: '20px',
    marginTop: '13px',
    marginLeft: '23px',
  },

  aboutImage: {
    width: '297px',
    height: '249px',
    padding: '14px',
  },
  aboutImageSection: {
    height: '249px',
  },
  DCWords: {
    height: '200px',
    background: '#0F253A',
    color: '#FFFFFF',
    fontSize: '26px',
    fontWeight: '300',
    textTransform: 'uppercase',
    lineHeight: '106.52%',
    padding: '30px 29px 30px 24px',
    fontFamily: 'Inter',
    letterSpacing: '-0.02em',
  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentLeft: {
    float: 'left',
    paddingRight: '10px',
  },
  about: {
    width: '300px',
    backgroundColor: '#76C4E4',
  },
  image: {
    width: '293px',
    height: '249px',
  },
  aboutContent: {
    background: '#76C4E4',
    minHeight: '372px',
    width: '300px',
    padding: '30px 30px 32px 30px',
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20.8px',
  },
  aboutButtonSection: {
    background: '#76C4E4',
    height: '71px',
  },
  imgIconAbout: {
    width: '49px',
  },
  aboutButtonLeft: {
    float: 'left',
    background: '#0F253A',
    height: '45px',
    width: '48px',
  },
  aboutButtonRight: {
    background: '#1E66A4',
    float: 'left',
    height: '45px',
    width: '132px',
  },
  aboutButton: {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '45px',
    paddingLeft: '20px',
    boxShadow: 'none',
    letterSpacing: '1px',
  },

  content: {
    width: '100%',
    height: '155px',
    overflowY: 'auto',
    background: '#fff',
    paddingLeft: '30px',
    paddingTop: '5px',
    minHeight: '138px',
  },
  contentHeader: {
    color: '#0F253A',
    fontFamily: 'Inter',
    fontSize: '26px',
    fontWeight: '300',
    lineHeight: '27.7px',
    padding: '10px 0',
    textTransform: 'uppercase',
    letterSpacing: '2%',
  },
  contentContainer: {
    width: '215px',
    color: '#010101',
    fontFamily: 'Nunito',
    fontSize: '16px',
    lineHeight: '22px',
    paddingLeft: '2px',
    paddingBottom: '10px',
  },

  program: {
    float: 'left',
    padding: '0 10px 6.8px 0px',
  },
  programImg: {
    background: '#fff',
    height: '249px',
  },
  studies: {
    float: 'left',
  },

  contentRightBottom: {
    float: 'left',
    width: '597px',
    background: '#fff',
    backgroundImage: `url(${landingPageData.tile4.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cases: {
    height: '436px',
    paddingLeft: '340px',
    paddingTop: '70px',
  },
  mountainMeadowButtonSection: {
    height: '46px',
    width: '176px',
    backgroundColor: '#1E66A4',
    marginTop: '20px',

  },
  blueButton: {
    height: '45px',
    background: '#0074DB',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '25px',
    paddingLeft: '8px',
    textDecoration: 'none',
    letterSpacing: '1px',
  },
  yellowButton: {
    height: '45px',
    background: '#E5A553',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '14px',
    paddingLeft: '8px',
    textDecoration: 'none',
  },
  brownButton: {
    height: '45px',
    background: '#8C7D6B',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '14px',
    paddingLeft: '8px',
    textDecoration: 'none',
  },
  blueButtonLeft: {
    float: 'left',
  },
  blueButtonRight: {
    float: 'left',
    lineHeight: '44px',
    marginLeft: '8px',
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#fff',
    textTransform: 'uppercase',
  },
  mountainMeadowContentHeader: {
    color: '#0F253A',
    fontFamily: 'Inter',
    fontSize: '26px',
    fontWeight: '300',
    lineHeight: '32px',
    padding: '15px 0',
    textTransform: 'uppercase',
  },
  mountainMeadowContent: {
    height: '143px',
    width: '230px',
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '16px',
    lineHeight: '22px',
  },
  mountainMeadowIcon: {
    width: '20px',
    marginTop: '12px',
    marginLeft: '28px',
  },
  mountainMeadowButton: {
    padding: '15px 5px 0 0',
    height: '9px',
    width: '71px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '19.31px',
    textDecoration: 'none',
    marginLeft: '8px',
    letterSpacing: '1px',
    '&:hover': {
      color: '#ffffff',
    },
  },
  paddingBottom50: {
    paddingBottom: '50px',
  },
  paddingTop30: {
    paddingTop: '30px',
  },
  animationContainer: {
    position: 'relative',
    left: '33%',
  },

  paddingLeft2: {
    paddingLeft: '2px',
  },
  heroTextContainer: {
    position: 'absolute',
    width: '400px',
    margin: 'auto',
    left: '12px',
    right: 0,
    '@media (min-width: 900px)': {
      width: '906px',
    },
  },
  heroTextWrapper: {
    width: '360px',
  },
  buttonText: {
    padding: '12px 30px',
    height: '40px',
  },
  transparentButton: {
    padding: '12px 15px',
    height: '40px',
    color: '#505050 !important',
    backgroundColor: '#ffffff00 !important',
    fontSize: '16px',
    borderBottom: ' 2px #79C5E4 solid',
    borderRadius: '0px',
  },
  rightArrow: {
    marginLeft: '5px',
    fontSize: '16px',
    color: '#76C4E4',
  },
});
export default withStyles(styles, { withTheme: true })(LandingView);
