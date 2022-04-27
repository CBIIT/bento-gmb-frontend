import React from 'react';
import { Header } from 'bento-components';
import { withRouter } from 'react-router-dom';
import headerData from '../../bento/globalHeaderData';
import SearchAutoFill from '../Search/searchAutoFillComponent';

const customStyle = {
  nihLogoImg: {
    width: '463px',
    height: '70px',
    marginLeft: '0px',
    minHeight: '54px',
    maxHeight: '100px',
  },
  headerBar: {
    top: '0px',
    zIndex: '999',
    height: '70px',
    minHeight: '50px',
  },
};

const ICDCHeader = (props) => {
  const { location } = props;

  return location && location.pathname.match('/search') ? (
    <>
      <Header
        logo={headerData.globalHeaderLogo}
        easter={headerData.globalHeaderImage}
        alt={headerData.globalHeaderLogoAltText}
        homeLink={headerData.globalHeaderLogoLink}
        customStyle={customStyle}
      />
    </>
  ) : (
    <>
      <Header
        logo={headerData.globalHeaderLogo}
        easter={headerData.globalHeaderImage}
        alt={headerData.globalHeaderLogoAltText}
        homeLink={headerData.globalHeaderLogoLink}
        customStyle={customStyle}
        SearchComponent={SearchAutoFill}
      />
    </>
  );
};
export default withRouter(ICDCHeader);
