import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Trial:',
  dataField: 'trialName',
};

const pageSubTitle = {
  dataField: 'trial_id',
};

const breadCrumb = {
  label: 'ALL Trials',
  link: '/trials',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Subjects',
  dataField: 'num_subjects',
  link: '/subjects',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for trialDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const trialDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'GMB trial logo',
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
      dataField: 'trialName',
      label: 'Trial',
    },
    {
      dataField: 'trialLongName',
      label: 'Trial Name',
    },
    {
      dataField: 'trial_id',
      label: 'Trial Id',
      externalLinkToDataField: true,
    },
    {
      dataField: 'trialDesription',
      label: 'Trial Description',
    },
    {
      dataField: 'leadOrganization',
      label: 'Lead Organization',
    },
    {
      dataField: 'trialPrincipalInvestigator',
      label: 'Principal Investigator',
    },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      dataField: 'N/A',
      label: 'Stage at Entry Distribution',
      display: true,
      titleText: 'Subjects',
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
  title: 'Sites',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'sites',
  // Value must be one of the 'field' in columns
  defaultSortField: 'site_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // viewColumns 'true' or 'false'
  viewColumns: true,
  // download csv 'true' or 'false'
  download: true,
  // downloaded File Name
  downloadFileName: 'samples_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'site_id',
      header: 'Site ID',
      link: '/site/{site_id}',
    },
    {
      dataField: 'siteName',
      header: 'Name',
    },
    {
      dataField: 'siteAddress',
      header: 'Address',
    },
    {
      dataField: 'siteStatus',
      header: 'Status',
    },
    {
      dataField: 'num_subjects',
      header: 'Subjects',
    },
  ],
};

// --------------- GraphQL query - Retrieve trial details --------------
const GET_TRIAL_DETAIL_DATA_QUERY = gql`
    query trialDetail($trial_id: String){
        trialDetail(trial_id: $trial_id){
            trial_id
            trialName
            trialLongName
            trialDesription
            leadOrganization
            trialType
            trialPrincipalInvestigator
            num_subjects
            num_files
            sites{
                site_id
                siteName
                siteAddress
                siteStatus
                subjectCount
                num_subjects: subjectCount
            }
        }
        trialSubjectCountByStageAtEntry(trial_id: $trial_id){
            group
            subjects
        }
    }`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  trialDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_TRIAL_DETAIL_DATA_QUERY,
  table,
};
