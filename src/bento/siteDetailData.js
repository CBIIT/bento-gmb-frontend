import gql from 'graphql-tag';
import { cellTypes, dataFormatTypes } from '@bento-core/table';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  arrow: true,
  placement: 'top-end',
  sample: 'Click button to add selected files associated with the selected sample(s).',
  files: 'Click button to add selected files.',
};

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Site:',
  dataField: 'site_name',
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
  labelText: 'Subjects',
  dataField: 'num_subjects',
  link: '/subjects',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for siteDetailIcon is 107x107 px
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
      dataField: 'site_name',
      label: 'Site',
    },
    {
      dataField: 'site_id',
      label: 'Site ID',
    },
    {
      dataField: 'site_contact',
      label: 'Contact Person',
    },
    {
      dataField: 'site_email',
      label: 'Email',
    },
    {
      dataField: 'site_phone',
      label: 'Phone',
    },
    {
      dataField: 'site_status',
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
      label: 'STAGE AT ENTRY DISTRIBUTION',
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

// --------------- Tables: ASSOCIATED SUBJECTS & ASSOCIATED FILES --------------
const tables = [
  {
    // Set 'display' to false to hide the table entirely
    name: 'subjects',
    display: true,
    dataKey: 'subject_id',
    tableID: 'subjects_tab_table',
    // Table title
    tableTitle: 'ASSOCIATED SUBJECTS',
    // For extracting data from graphql response
    queryField: 'siteDetail',
    dataField: 'subjects',
    // Value must be one of the 'field' in columns
    defaultSortField: 'subject_id',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected files associated with the selected subject(s).',
    helpMessage: 'Here help message',
    //show view columns button
    viewColumns: true,
    //show download csv button
    download: true,
    //downloaded File Name
    downloadFileName: 'GMB_subjects_files_download',
    // Set 'selectableRows' to true to show the row selection
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        role: cellTypes.CHECKBOX,
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Subject ID',
        sort: 'asc',
        primary: true, //what this
        display: true,
        tooltipText: 'sort',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/subject',
          pathParams: ['subject_id'],
        },
      },
      {
        dataField: 'race',
        header: 'Race',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'disease_term',
        header: 'Disease Term',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
  },
  {
    // Set 'display' to false to hide the table entirely
    name: 'files',
    display: true,
    dataKey: 'subject_id',
    tableID: 'files_tab_table',
    // Table title
    tableTitle: 'ASSOCIATED FILES',
    // For extracting data from graphql response
    queryField: 'siteDetail',
    dataField: 'files',
    // Value must be one of the 'field' in columns
    defaultSortField: 'file_name',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected files.',
    helpMessage: 'Here help message',
    //show view columns button
    viewColumns: true,
    //show download csv button
    download: true,
    //downloaded File Name
    downloadFileName: 'GMB_files_download',
    // Set 'selectableRows' to true to show the row selection
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_type',
        header: 'File Type',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_description',
        header: 'Description',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_format',
        header: 'Format',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_size',
        header: 'Size',
        // set formatBytes to true to display file size (in bytes) in a more human readable format
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
        dataFormatType: dataFormatTypes.FORMAT_BYTES,
        cellType: cellTypes.FORMAT_DATA,
      },
    ],
  },
];

// --------------- GraphQL query - Retrieve site details --------------
const GET_SITE_DETAIL_DATA_QUERY = gql`
query siteDetail($site_id: String!) {
  siteDetail(site_id: $site_id) {
    site_id
        site_name
        site_address
        site_contact
        site_phone
        site_email
        site_status
        num_subjects
        num_files
        subjects{
            subject_id
            race
            disease_term
        }
        files{
            file_id
            file_name
            file_description
            file_format
            file_size
            trial_id
            trial_short_name
            arm
            subject_id
            file_type
            md5sum
        }
  }

  siteSubjectCountByStageAtEntry(
    site_id: $site_id
  ){
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
  tables
};