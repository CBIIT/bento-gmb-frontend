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
  labelText: 'Cases',
  dataField: 'num_subjects',
  link: '/cases',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for programDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const programDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
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
  attributes: [
    {
      dataField: 'trialName',
      label: 'Trial',
    },
  ],
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
      link: '/cases/{subject_id}',
    },
    {
      dataField: 'race',
      header: 'Race',
    },
    {
      dataField: 'diseaseTerm',
      header: 'DiseaseTerm',
    },
    {
      dataField: 'registeringInstitution',
      header: 'Registering Institution',
    },
  ],
};

// --------------- GraphQL query - Retrieve program details --------------
const GET_PROGRAM_DETAIL_DATA_QUERY = gql`
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
        subjects{
            subject_id
            race
            registeringInstitution
            diseaseTerm
        }
    }
}`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  programDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_PROGRAM_DETAIL_DATA_QUERY,
  table,
};
// stageAtEntry{
//   group
//   subjects
// }
