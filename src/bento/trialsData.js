import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'Trials',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'trialsInfo',
  // Value must be one of the 'field' in columns
  defaultSortField: 'trial_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'trial_id',
      header: 'Trial ID',
      link: '/trial/{trial_id}',
    },
    {
      dataField: 'trialName',
      header: 'Trial Name',
    },
    {
      dataField: 'trialType',
      header: 'Trial Type',
    },
    {
      dataField: 'num_subjects',
      header: 'Associated Cases',
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_TRIALS_DATA_QUERY = gql`{
  trialsInfo{
      trial_id
      trialName
      trialType
      trialDescription
      num_subjects
  }
}
 `;

export {
  programListingIcon,
  externalLinkIcon,
  table,
  GET_TRIALS_DATA_QUERY,
};
