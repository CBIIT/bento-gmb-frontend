import gql from 'graphql-tag';
import { FileOnRowsSelect } from '../utils/fileTable';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Site:',
  dataField: 'siteName',
};

const pageSubTitle = {
  dataField: 'site_id',
};

const breadCrumb = {
  label: 'ALL SITES',
  link: '/sites',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'subjects',
  dataField: 'num_subjects',
  link: '/subjects',
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

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
};

export const tab = {
  items: [
    {
      index: 0,
      label: 'ASSOCIATED SUBJECTS',
      value: 'table1',
      primaryColor: '#D6F2EA',
    },
    {
      index: 1,
      label: 'ASSOCIATED FILES',
      value: 'table2',
      primaryColor: '#F7D7F7',
    },
  ],
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

// --------------- Table 1: ASSOCIATED SUBJECTS --------------
const table1 = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  tableTitle: 'ASSOCIATED SUBJECTS',
  // Field name for files data, need to be updated only when using a different GraphQL query
  dataField: 'subjects',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'subject_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // viewColumns 'true' or 'false'
  viewColumns: true,
  // download csv 'true' or 'false'
  download: true,
  // downloaded File Name
  downloadFileName: 'SUBJECTS_CSV_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'subject_id',
      header: 'Subject ID',
      link: '/subject/{subject_id}',
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
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: FileOnRowsSelect,
};

// --------------- Table 2: ASSOCIATED FILES --------------
const table2 = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  tableTitle: 'ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  dataField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // viewColumns 'true' or 'false'
  viewColumns: true,
  // download csv 'true' or 'false'
  download: true,
  // downloaded File Name
  downloadFileName: 'Files_CSV_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: FileOnRowsSelect,
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
        files {
        subject_id
        file_name
        file_type
        file_description
        file_format
        file_size
        file_id
        md5sum
      }
    }
    siteSubjectCountByStageAtEntry(site_id: $site_id){
        group
        subjects
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
  table1,
  table2,
};
