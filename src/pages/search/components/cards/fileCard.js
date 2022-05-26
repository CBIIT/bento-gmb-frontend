import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { prepareLinks } from 'bento-components';
import PropertyItem from '../propertyItem';

class FileCard extends React.Component {
  properties = [
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
  ]

  constructor({ data, classes, index }) {
    // eslint-disable-next-line prefer-rest-params
    super();
    this.data = data || [];
    this.classes = classes;
    this.index = index;
  }

  render() {
    const {
      classes, data, properties, index,
    } = this;
    const propertiesWithLinks = prepareLinks(properties, data);
    const to = `/subject/${data.subject_id}`;
    return (
      <>
        <Grid item container className={classes.card}>
          <Grid item xs={1} className={classes.indexContainer}>
            {index + 1 }
          </Grid>
          <Grid item xs={11} className={classes.propertyContainer}>
            <div>
              <span className={classes.detailContainerHeader}>FILE</span>
              <span className={classes.cardTitle}>
                <Link to={to} className={classes.cardTitle}>
                  {data.subject_id}
                </Link>
              </span>

            </div>
            {propertiesWithLinks.map((prop) => (
              <PropertyItem
                label={prop.label}
                value={data[prop.dataField]}
                link={prop.link}
              />
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

const styles = () => ({
  cartIcon: {
    height: '22px',
    margin: '0px 0px 0px 6px',
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
  content: {
    fontSize: '12px',
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
