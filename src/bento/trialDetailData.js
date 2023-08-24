import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Trial:',
  dataField: 'trial_name',
};

const pageSubTitle = {
  dataField: 'trial_id',
};

const breadCrumb = {
  label: 'ALL TRIALS',
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
  alt: 'GMB Trial logo',
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
      dataField: 'trial_name',
      label: 'Trial',
    },
    {
      dataField: 'trial_long_name',
      label: 'Trial Name',
    },
    {
      dataField: 'trial_id',
      label: 'Trial Id',
      externalLink: true,
      actualLink: 'https://classic.clinicaltrials.gov/ct2/show/NCT04706663',

    },
    {
      dataField: 'trial_description',
      label: 'Trial Description',
    },
    {
      dataField: 'lead_organization',
      label: 'Lead Organization',
    },
    {
      dataField: 'trial_principal_investigator',
      label: 'Principal Investigator',
    },/*
    {
      dataField: 'program_external_url',
      label: 'External Link to Program',
      externalLinkToLabel: true,
    },*/
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      label: 'Stage at Entry Distribution',
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
  title: 'SITES',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'sites',
  // Value must be one of the 'field' in columns
  defaultSortField: 'study_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'site_id',
      header: 'Site ID',
      link: '/site/{site_id}'
    },
    {
      dataField: 'site_name',
      header: 'Site Name',
    },
    {
      dataField: 'site_address',
      header: 'Site Address',
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

// --------------- GraphQL query - Retrieve trial details --------------
const GET_TRIAL_DETAIL_DATA_QUERY = gql`
query trialDetail(
  $trial_id: String
){

  trialSubjectCountByStageAtEntry(
    trial_id: $trial_id
){
    group
    subjects
}
  trialDetail(
      trial_id: $trial_id
  ){
      trial_id
      trial_name
      trial_long_name
      trial_description
      lead_organization
      trial_type
      trial_principal_investigator
      num_subjects
      num_files
      sites{
          site_id
          site_name
          site_address
          site_status
          num_subjects
      }
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
