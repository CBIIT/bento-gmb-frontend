import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import SiteView from './siteDetailView';
import { Typography } from '../../components/Wrappers/Wrappers';
import { GET_SITE_DETAIL_DATA_QUERY } from '../../bento/siteDetailData';

const SiteDetailContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_SITE_DETAIL_DATA_QUERY, {
    variables: { site_id: match.params.id },
  });

  if (loading) return <CircularProgress />;
  if (error || !data || data.siteDetail.site_id !== match.params.id) {
    return (
      <Typography variant="headline" color="error" size="sm">
        {error ? `An error has occurred in loading stats component: ${error}` : 'Recieved wrong data'}
      </Typography>
    );
  }
  return <SiteView data={data} />;
};

export default SiteDetailContainer;
