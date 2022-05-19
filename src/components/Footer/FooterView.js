import React, { useEffect, useState } from 'react';
import { Footer } from 'bento-components';
import FooterData, { getBackendVersion } from '../../bento/globalFooterData';
import env from '../../utils/env';

const FILE_SERVICE_API = env.REACT_APP_FILE_SERVICE_API;

const ICDCFooter = () => {
  const [footerUpdatedData, setFooterUpdatedData] = useState(FooterData);

  useEffect(async () => {
    const fetchFileService = () => fetch(`${FILE_SERVICE_API}version`)
      .then((resp) => (resp.json())).catch(() => ({ version: '' }));

    const [fileServiceRes, backendServiceRes] = await Promise.all([
      fetchFileService(),
      getBackendVersion()]);
    const fileServData = fileServiceRes;
    setFooterUpdatedData({
      ...FooterData,
      ...{ FileServiceVersion: fileServData.version || '' },
      ...{ BEversion: backendServiceRes['Bento API Version'] || backendServiceRes.version || '' },
    });
  }, [FooterData]);

  return <><Footer data={footerUpdatedData} background={FooterData.bg} /></>;
};

export default ICDCFooter;
