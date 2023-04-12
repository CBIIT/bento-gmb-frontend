import React from 'react';
import { Header } from 'bento-components';
import { withRouter } from 'react-router-dom';
import headerData from '../../bento/globalHeaderData';
import SearchAUtoFill from '../Search/searchAutoFillComponent';

const customStyle = {
  nihLogoImg: {
    width: '463px',
    height: '100px',
    marginLeft: '0px',
    minHeight: '54px',
    maxHeight: '100px',
  },
};

const ICDCHeader = (props) => {
  const { location } = props;
  return location.pathname.match('/search') ? (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      customStyle={customStyle}
    />
  ) : (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      SearchComponent={SearchAUtoFill}
      customStyle={customStyle}
    />
  );
};

export default withRouter(ICDCHeader);
