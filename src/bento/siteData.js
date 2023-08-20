import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for siteListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const siteListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento site logo',
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
  title: 'Sites',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'sitesInfo',
  // Value must be one of the 'field' in columns
  defaultSortField: 'site_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'site_id',
      header: 'Site ID',
      link: '/site/{site_id}',
      display: true
    },
    {
      dataField: 'site_name',
      header: 'Site Name',
    },
    {
      dataField: 'site_address',
      header: 'Address',
    },
    {
      dataField: 'site_status',
      header: 'Status',
    },
    {
      dataField: 'num_subjects',
      header: 'Associated Subjects',
    },
  ],
};

// --------------- GraphQL query - Retrieve site info --------------
const GET_SITES_DATA_QUERY = gql`{
  sitesInfo{
    site_id
    site_name
    site_address
    site_status
    num_subjects
}
}
 `;

export {
  siteListingIcon,
  externalLinkIcon,
  table,
  GET_SITES_DATA_QUERY,
};
