import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropertyItem from '../propertyItem';

const SiteCard = ({ data, classes, index }) => {
  const properties = [
    {
      label: 'Site ID',
      dataField: 'site_id',
      link: '/site/{site_id}',

    },
    {
      label: 'Site Name',
      dataField: 'site_name',
    },
    {
      label: 'Site Type',
      dataField: 'site_type',

    },
  ];
  const propertiesWithLinks = prepareLinks(properties, data);

  return (
    <>
      <Grid item container className={classes.card}>
        <Grid item xs={1} className={classes.indexContainer}>
          {index + 1 }
        </Grid>
        <Grid item xs={11} className={classes.propertyContainer}>
          <div>
            <span className={classes.detailContainerHeader}>SITE</span>
            <span className={classes.cardTitle}>
              <Link to={`/site/${data.site_id}`} className={classes.cardTitle}>
                {data.site_id}
              </Link>

            </span>
          </div>

          {propertiesWithLinks.map((prop) => (
            <PropertyItem
              label={prop.label}
              value={data[prop.dataField]}
              link={prop.link}
              // labelLink={prop.labelLink}
              // classes={classes}
              index
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

const styles = () => ({
  content: {
    fontSize: '12px',
  },
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
    color: '#7747FF',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Nunito',
    paddingLeft: '9px',
    verticalAlign: 'middle',
  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    padding: '2px 8px',
    backgroundColor: '#DBDBDB',
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '12px',
    fontWeight: '400',
    letterSpacing: '0.9px',
    verticalAlign: 'middle',
    borderRadius: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(SiteCard);
