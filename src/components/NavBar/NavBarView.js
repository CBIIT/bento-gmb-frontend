import React from 'react';
import { NavBar } from 'bento-components';
// import { useSelector } from 'react-redux';
import {
  navBarData, navBarCartData, navBarstyling,
} from '../../bento/navigationBarData';
import Login from '../GoogleAuth/loginComponent';
import globalData from '../../bento/siteWideConfig';

const BentoNavBar = ({ cartFieldIds }) => (
  <>
    {console.log(`authentication enabled ${globalData.enableAuthentication}`) /* eslint-disable-line no-console */}
    {globalData.enableAuthentication ? (
      <NavBar
        navBarData={navBarData}
        navBarCartData={navBarCartData}
        navBarstyling={navBarstyling}
        numberOfCases={cartFieldIds.length || 0}
        LoginComponent={Login}
      />
    ) : (
      <NavBar
        navBarData={navBarData}
        navBarCartData={navBarCartData}
        navBarstyling={navBarstyling}
        numberOfCases={cartFieldIds.length || 0}
      />
    )}
  </>
);
export default BentoNavBar;
