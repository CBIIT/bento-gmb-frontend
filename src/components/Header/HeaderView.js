import React from 'react';
import { Header } from 'bento-components';
import headerData from '../../bento/globalHeaderData';

const customStyle = {
  nihLogoImg: {
    width: '463px',
    height: '100px',
    marginLeft: '0px',
    minHeight: '54px',
    maxHeight: '100px',
  },
  headerBar: {
    top: '0px',
    zIndex: '999',
  },
};

const ICDCHeader = () => (
  <>
    <Header
      logo={headerData.globalHeaderLogo}
      easter={headerData.globalHeaderImage}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      customStyle={customStyle}
    />
  </>
);
export default ICDCHeader;
