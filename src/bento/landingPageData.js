import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
  callToActionTitle: 'Prostate Cancer Natural History Study- data portal',
  callToActionDescription: '',
  callToActionButtonText: 'Search Subjects',
  callToActionLink: '/subjects',
  landingPageHero: {
    alt: 'Hero Image',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/gmb/images/icons/png/landing_Hero_Graphic.png',
  },
  landingPageTexture: {
    alt: 'Background Texture Image',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/gmb-assets/gmb/images/icons/png/landing_backgroundTexture-LP.jpg',
  },
  landingPageStatsBar: [
    {
      statTitle: 'Trials',
      statAPI: 'numberOfTrials',
    },
    {
      statTitle: 'Subjects',
      statAPI: 'numberOfSubjects',
    },
    {
      statTitle: 'files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/gmb/images/icons/png/landing_tileAbout.png',
    titleText: 'About Prostate Cancer Natural History (PCNH)',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    callToActionText: 'Explore',
    callToActionLink: '/purpose', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/gmb/images/icons/png/landing_tileTrials.png',
    titleText: 'Trials',
    descriptionText: 'View summaries of clinical trials within GMB.',
    callToActionText: 'Read More',
    callToActionLink: '/trials', // This links to the Programs Listing Page.
  },
  tile3: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/gmb/images/icons/png/landing_tileRequestAccess.png',
    titleText: 'This Space Open',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum at purus.',
    callToActionText: 'Read More',
    callToActionLink: '/request-access', // This links to the "Request Access" static page.
  },
  tile4: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/gmb/images/icons/png/landing_tileSubjects.png',
    titleText: 'Subjects',
    descriptionText: 'Search all the subjects and build cohorts from all the Programs/Studies within the GMB. The data files from these cohorts can then be analyzed in the Cloud Resources.',
    callToActionText: 'Explore',
    callToActionLink: '/subjects', // This links to the cases dashboard.
  },
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
    
    numberOfSubjects
    numberOfFiles
  }
  `;
//numberOfTrials