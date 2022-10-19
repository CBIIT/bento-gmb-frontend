import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import StatsView from './StatsView';
import { fetchDataForStats } from './StatsState';
import { utilities as utils } from '../../utils/objectUtils';

const Stats = () => {
  const isSignedIn = useSelector(
    (state) => state.login.isSignedIn,
  );
  if (!isSignedIn) {
    return '';
  }
  const data = useSelector((state) => {
    if (!state.stats.isFetched) {
      const dispatch = useDispatch();
      dispatch(fetchDataForStats());
    }
    return (utils.hasOwnProp(state.stats.data, 'searchSubjects')
      ? state.stats.data.searchSubjects : state.stats.data);
  });

  return (!data || data.length === 0 ? (<CircularProgress />) : <StatsView data={data} />);
};

export default (Stats);
