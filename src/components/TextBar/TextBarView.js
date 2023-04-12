import React from 'react';
import { TextBar } from 'bento-components';
import textBarData from '../../bento/globalTextBarData';

const customStyle = {
  textBarStyle: {
    fontSize: '16px',
    top: '90px',
    height: '30px',
  },
};

const Component = () => (
  <>
    <TextBar
      content={textBarData.globalTextBarText}
      customStyle={customStyle}
    />
  </>
);
export default Component;
