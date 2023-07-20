import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import SubjectDetailView from './subjectDetailView';
import { Typography } from '../../components/Wrappers/Wrappers';
import {
  GET_CASE_DETAIL_DATA_QUERY, dataRoot, subjectIDField,
} from '../../bento/subjectDetailData';

const SubjectDetailContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_CASE_DETAIL_DATA_QUERY, {
    variables: { [subjectIDField]: match.params.id },
  });

  if (loading) return <CircularProgress />;
  if (error || !data || data[dataRoot][subjectIDField] !== match.params.id) {
    return (
      <Typography variant="h5" color="error" size="sm">
        {error ? `An error has occurred in loading stats component: ${error}` : 'Recieved wrong data'}
      </Typography>
    );
  }

  return (
    <SubjectDetailView
      data={data[dataRoot]}
      subjectId={match.params.id}
    />
  );
};

export default SubjectDetailContainer;
