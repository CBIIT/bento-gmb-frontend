import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { prepareLinks } from '@bento-core/util';
import PropertyItem from './PropertyItem';

const CARD_PROPERTIES = [
  {
    label: 'File ID',
    dataField: 'file_id',
  },
  {
    label: 'File Name',
    dataField: 'file_name',
  },
  {
    label: 'File Format',
    dataField: 'file_format',
  },
  {
    label: 'File Description',
    dataField: 'file_description',
  },
  {
    label: 'Trial ID',
    dataField: 'clinical_trial_id',
    link: '/trial/{clinical_trial_id}',
  },
  {
    label: 'Subject ID',
    dataField: 'subject_id',
    link: '/subject/{subject_id}',
  },
];

const FileCard = ({ data, classes, index }) => {
  const propertiesWithLinks = prepareLinks(CARD_PROPERTIES, data);

  return (
    <Grid item container className={classes.card} id={`global_search_card_${index}`}>
      <Grid item xs={1} className={classes.indexContainer}>
        {index + 1}
      </Grid>
      <Grid item xs={11} className={classes.propertyContainer}>
        <div>
          <span className={classes.cardTitle}>
            <Link to={`/subject/${data.subject_id}`} className={classes.cardTitle}>
              {data.file_id}
            </Link>
          </span>
        </div>
        {propertiesWithLinks.map((prop, idx) => (
          <PropertyItem
            index={idx}
            label={prop.label}
            value={data[prop.dataField]}
            link={prop.link}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  indexContainer: {
    padding: '18px 0px 18px 18px',
    color: '#747474',
    fontFamily: 'Inter',
    fontSize: '13px',
  },
  propertyContainer: {
    padding: '16px 16px 16px 0px',
    borderBottom: '2px solid #E7EEF5',
  },
  cardTitle: {
    color: theme.palette.text.link,
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Nunito',
    paddingLeft: '9px',
    verticalAlign: 'middle',
  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    padding: '2px 8px',
    backgroundColor: '#F5C3F1',
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '12px',
    fontWeight: '400',
    letterSpacing: '0.9px',
    verticalAlign: 'middle',
    borderRadius: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(FileCard);
