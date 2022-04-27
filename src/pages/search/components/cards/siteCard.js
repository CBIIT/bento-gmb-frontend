import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropertyItem from '../propertyItem';
import BaseCard, { styles } from './baseCard';

class SiteCard extends BaseCard {
  options = {
    properties: [
      {
        label: 'Program ID',
        dataField: 'program_id',
        link: '/program/{program_id}',

      },
      {
        label: 'Study Name',
        dataField: 'study_name',
      },
      {
        label: 'Study Type',
        dataField: 'study_type',

      },
    ],
  };

  render() {
    const ctx = this;
    const propertiesWithLinks = this.buildPropertiesWithLinks();

    return (
      <>
        <Grid item container className={ctx.props.classes.card}>
          <Grid item xs={1} className={ctx.props.classes.indexContainer}>
            {ctx.props.index + 1}
          </Grid>
          <Grid item xs={11} className={ctx.props.classes.propertyContainer}>
            <div>
              <span className={ctx.props.classes.detailContainerHeader}>SITE</span>
              <span className={ctx.props.classes.cardTitle}>
                <Link to={`/site/${ctx.props.data.site_id}`} className={ctx.props.classes.cardTitle}>
                  {ctx.props.data.site_id}
                </Link>

              </span>
            </div>

            {propertiesWithLinks.map((prop) => (
              <PropertyItem
                label={prop.label}
                value={ctx.props.data[prop.dataField]}
                link={prop.link}
                index
              />
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SiteCard);

// const SiteCard = ({ data, classes, index }) => {
//   const properties = [
//     {
//       label: 'Program ID',
//       dataField: 'program_id',
//       link: '/program/{program_id}',
//
//     },
//     {
//       label: 'Study Name',
//       dataField: 'study_name',
//     },
//     {
//       label: 'Study Type',
//       dataField: 'study_type',
//
//     },
//   ];
//   const propertiesWithLinks = prepareLinks(properties, data);
//
//   return (
//     <>
//       <Grid item container className={classes.card}>
//         <Grid item xs={1} className={classes.indexContainer}>
//           {index + 1 }
//         </Grid>
//         <Grid item xs={11} className={classes.propertyContainer}>
//           <div>
//             <span className={classes.detailContainerHeader}>STUDY</span>
//             <span className={classes.cardTitle}>
//               <Link to={`/arm/${data.study_code}`} className={classes.cardTitle}>
//                 {data.study_id}
//               </Link>
//
//             </span>
//           </div>
//
//           {propertiesWithLinks.map((prop) => (
//             <PropertyItem
//               label={prop.label}
//               value={data[prop.dataField]}
//               link={prop.link}
//               // labelLink={prop.labelLink}
//               // classes={classes}
//               index
//             />
//           ))}
//         </Grid>
//       </Grid>
//     </>
//   );
// };
//
// const styles = () => ({
//   content: {
//     fontSize: '12px',
//   },
//   indexContainer: {
//     padding: '18px 0px 18px 18px',
//     color: '#747474',
//     fontFamily: 'Inter',
//     fontSize: '13px',
//   },
//   propertyContainer: {
//     padding: '16px 16px 16px 0px',
//     borderBottom: '2px solid #E7EEF5',
//   },
//   cardTitle: {
//     color: '#7747FF',
//     textDecoration: 'none',
//     fontSize: '16px',
//     fontFamily: 'Nunito',
//     paddingLeft: '9px',
//     verticalAlign: 'middle',
//   },
//   detailContainerHeader: {
//     textTransform: 'uppercase',
//     padding: '2px 8px',
//     backgroundColor: '#DBDBDB',
//     color: '#000000',
//     fontFamily: 'Nunito',
//     fontSize: '12px',
//     fontWeight: '400',
//     letterSpacing: '0.9px',
//     verticalAlign: 'middle',
//     borderRadius: '4px',
//   },
// });
//
// export default withStyles(styles, { withTheme: true })(SiteCard);
