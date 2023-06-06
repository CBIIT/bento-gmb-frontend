export const navBarstyling = {
  global: {
    backgroundColor: '#003F74',
    height: '39px',
    padding: '9px 20px 0px 20px',
  },
  dropDownIcon: {
    displayIcon: false,
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
  },
  dropdownMenu: {
    paper: {
      background: '#1E66A4',
      width: '200px',
      padding: '5px 18px 18px 18px',
      marginLeft: '15px',
      position: 'absolute',
      marginTop: '-1px',
      borderRadius: '0',
    },
    link: {
      overflowWrap: 'normal',
      textDecoration: 'none',
      color: 'white',
      fontSize: '14px',
      fontWeight: '400',
      lineSpacing: '1px',
      lineHeight: '18px',
      fontFamily: 'Inter',
      display: 'block',
      marginTop: '10px',
      '&:hover': {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#003F74',
        fontWeight: '800',
      },
    },
  },
  cart: {
    iconSize: '30px',
    padding: '6px 20px 0px 5px',
  },
};

export const navBarData = [
  // A maximum of 5 nav bar items are allowed
  // A maximum of 9 dropDownLinks items are allowed
  {
    labelText: 'home',
    type: 'link',
    link: '/home',
  },
  {
    labelText: 'trials',
    type: 'link',
    link: '/trials',
  },
  {
    labelText: 'sites',
    type: 'link',
    link: '/sites',
  },
  {
    labelText: 'subjects',
    type: 'link',
    link: '/subjects',
  },
  {
    labelText: 'about',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'Bento',
        link: '/bento',
      },
      {
        labelText: 'Resources',
        link: '/resources',
      },
      {
        labelText: 'Graphql',
        link: '/graphql',
      },
    ],
  },
];

export const navBarCartData = {
  cartLabel: '',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
  cartLabelType: 'labelUnderCount',
};
