import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Site:',
  dataField: 'siteName',
};

const pageSubTitle = {
  dataField: 'site_id',
};

const breadCrumb = {
  label: 'ALL Trials',
  link: '/trials',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Cases',
  dataField: 'num_subjects',
  link: '/cases',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for programDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const siteDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'GMB Site logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Left Pannel configuration --------------
// A maximum of 6 leftPanelattributes are allowed
const leftPanel = {
  attributes: [
    {
      dataField: 'siteName',
      label: 'Site',
    },
    {
      dataField: 'site_id',
      label: 'Site Id',
    },
    {
      dataField: 'siteContact',
      label: 'Contact Person',
    },
    {
      dataField: 'siteEmail',
      label: 'Email',
    },
    {
      dataField: 'sitePhone',
      label: 'Phone',
    },
    {
      dataField: 'siteStatus',
      label: 'Status',
    },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      dataField: 'diagnoses',
      label: 'Diagnosis',
      display: true,
    },
  ],
  files: [
    {
      dataField: 'num_files',
      label: 'Number of files',
      fileIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programNumberofFilesIcon.svg',
      fileIconAlt: 'Number of files icon',
      display: true,
    },
  ],
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'Cases',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'subjects',
  // Value must be one of the 'field' in columns
  defaultSortField: 'subject_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'subject_id',
      header: 'Case ID',
      link: '/case/{subject_id}',
    },
    {
      dataField: 'race',
      header: 'Race',
    },
    {
      dataField: 'diseaseTerm',
      header: 'DiseaseTerm',
    },
  ],
};

// --------------- GraphQL query - Retrieve program details --------------
const GET_SITE_DETAIL_DATA_QUERY = gql`
query siteDetail($site_id: String){
    siteDetail(site_id: $site_id){
        site_id
        siteName
        siteAddress
        siteContact
        sitePhone
        siteEmail
        siteStatus
        num_subjects
        num_files
        subjects{
            subject_id
            race
            diseaseTerm
        }
    }
}`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  siteDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_SITE_DETAIL_DATA_QUERY,
  table,
};
