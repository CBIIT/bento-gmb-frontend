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

// -------------- Case ID area configurations --------------
const caseHeader = {
  label: 'Subject ID',
  dataField: 'subject_id',
};

// --------------- Data panel configuration --------------
const leftPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    sectionHeader: 'Demographics',
    // sectionDesc: 'Demographic Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Race',
        dataField: 'race',
      },
      {
        label: 'Age at Entry',
        dataField: 'age_at_entry',
      },
      {
        label: 'Registering Institution',
        dataField: 'registering_institution',
      },
      {
        label: 'Disease Term',
        dataField: 'disease_term',
      },
      {
        label: 'Patient Subgroup',
        dataField: 'patient_subgroup',
      },
    ],
  },
];

const rightPanel = [];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'subjectDetail';
// Primary ID field used to query a case
const caseIDField = 'subject_id';

// GraphQL query to retrieve detailed info for a case
const GET_CASE_DETAIL_DATA_QUERY = gql`
  query subjectDetail($subject_id: String!) {
    subjectDetail(subject_id: $subject_id) {
      subject_id
        gender
        age_at_entry
        race
        registering_institution
        disease_term
        patient_subgroup
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
        enrollments{
          date_of_diagnosis
          histology
          eligibility
          gleason_score
          consent_signed_date
          consent_version_date
          stage_at_entry
          labs_inclusion_start_date
        }
        adverse_events{
          course
          course_day
          onset_date
          resolved_date
          term
          organ_class
          event_description
          grade
          research_attribution
          disease_attribution
          other_attribution
          other_extra
          unexpected_adverse_events
          serious
          action
          therapy
          outcome
          expedited_report_to_IRB
          expedited_report_to_CCR
        }
        somatic_variant{
          gene_panel_500
          gene_pathogenic_variant
          somatic_pathogenicity
        }
        germline_variant{
          panel_code
          gene_pathogenic_variant
          germline_pathogenicity
        }
    }
  }
`;

export {
  caseHeader,
  dataRoot,
  caseIDField,
  leftPanel,
  rightPanel,
  GET_CASE_DETAIL_DATA_QUERY,
};

// --------------- Table configurations --------------
// Adverse Events, Germline Variant, Somatic Variant, Associated Files
export const tables = [
  {
    // Set 'display' to false to hide the table entirely
    name: 'adverse_events',
    display: true,
    dataKey: 'adverse_events',
    tableID: 'adverse_events_tab_table',
    // Table title
    tableTitle: 'ADVERSE EVENTS',
    // Field name for files data, need to be updated only when using a different GraphQL query
    dataField: 'adverse_events',
    // Value must be one of the 'field' in columns
    defaultSortField: 'organ_class',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected files associated with the selected adverse event(s).',
    helpMessage: 'Here help message',
    tableMsg: {
      noMatch: 'Sorry, no matching records found',
    },
    // show view columns button
    viewColumns: true,
    // show download csv button
    download: true,
    // downloaded File Name
    downloadFileName: 'GMB_adverse_events_files_download',
    // Set 'select' to true to show a checkbox for each row
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        role: cellTypes.CHECKBOX,
        display: true,
      },
      {
        dataField: 'organ_class',
        header: 'Organ Class',
        sort: 'asc',
        primary: true,
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'outcome',
        header: 'Outcome',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'serious',
        header: 'Serious',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
  },
  {
    // Set 'display' to false to hide the table entirely
    name: 'germline_variant',
    display: true,
    dataKey: 'germline_variant',
    tableID: 'germline_variant_tab_table',
    // Table title
    tableTitle: 'GERMLINE VARIANT',
    // Field name for files data, need to be updated only when using a different GraphQL query
    dataField: 'germline_variant',
    // Value must be one of the 'field' in columns
    defaultSortField: 'panel_code',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected files associated with the selected germline variant(s).',
    helpMessage: 'Here help message',
    tableMsg: {
      noMatch: 'Sorry, no matching records found',
    },
    // show view columns button
    viewColumns: true,
    // show download csv button
    download: true,
    // downloaded File Name
    downloadFileName: 'GMB_germline_variant_files_download',
    // Set 'select' to true to show a checkbox for each row
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        role: cellTypes.CHECKBOX,
        display: true,
      },
      {
        dataField: 'panel_code',
        header: 'Panel Code',
        sort: 'asc',
        primary: true,
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'germline_pathogenicity',
        header: 'Pathogenicity',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'gene_pathogenic_variant',
        header: 'Pathogenic Variant',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
  },
  {
    // Set 'display' to false to hide the table entirely
    name: 'somatic_variant',
    display: true,
    dataKey: 'somatic_variant',
    tableID: 'somatic_variant_tab_table',
    // Table title
    tableTitle: 'SOMATIC VARIANT',
    // Field name for files data, need to be updated only when using a different GraphQL query
    dataField: 'somatic_variant',
    // Value must be one of the 'field' in columns
    defaultSortField: 'gene_panel_500',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected files associated with the selected somatic variant(s).',
    helpMessage: 'Here help message',
    tableMsg: {
      noMatch: 'Sorry, no matching records found',
    },
    // show view columns button
    viewColumns: true,
    // show download csv button
    download: true,
    // downloaded File Name
    downloadFileName: 'GMB_somatic_variant_files_download',
    // Set 'select' to true to show a checkbox for each row
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        role: cellTypes.CHECKBOX,
        display: true,
      },
      {
        dataField: 'gene_panel_500',
        header: 'Panel Code',
        sort: 'asc',
        primary: true,
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'somatic_pathogenicity',
        header: 'Pathogenicity',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'gene_pathogenic_variant',
        header: 'Pathogenic Variant',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
  },
  {
    // Set 'display' to false to hide the table entirely
    name: 'associated_files',
    display: true,
    dataKey: 'file_id',
    tableID: 'file_tab_table',
    // Table title
    tableTitle: 'ASSOCIATED FILES',
    // Field name for files data, need to be updated only when using a different GraphQL query
    dataField: 'files',
    // Value must be one of the 'field' in columns
    defaultSortField: 'file_name',
    // 'asc' or 'desc'
    defaultSortDirection: 'asc',
    // Text to appear on Add to cart button
    buttonText: 'Add Selected Files',
    // Help Icon Message
    tooltipMessage: 'Click button to add selected file(s).',
    helpMessage: 'Here help message',
    tableMsg: {
      noMatch: 'Sorry, no matching records found',
    },
    // show view columns button
    viewColumns: true,
    // show download csv button
    download: true,
    // downloaded File Name
    downloadFileName: 'GMB_files_download',
    // Set 'select' to true to show a checkbox for each row
    selectableRows: true,
    // A maximum of 10 columns are allowed
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        role: cellTypes.CHECKBOX,
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

  }
];

// --------------- Case Table configuration --------------
export const sampleTable = {
  // Set 'display' to false to hide the table entirely
  name: 'sample',
  display: true,
  dataKey: 'sample_id',
  // Table title
  tableTitle: 'ASSOCIATED SAMPLES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'samples',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'sample_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files associated with the selected sample(s).',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_files_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      cellType: cellTypes.CHECKBOX,
      display: true,
    },
    {
      dataField: 'sample_id',
      header: 'Sample ID',
      sort: 'asc',
      primary: true,
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'disease_subtype',
      header: 'Diagnosis',
      dataFromRoot: true,
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'tissue_type',
      header: 'Tissue Type',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'composition',
      header: 'Tissue Composition',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'sample_anatomic_site',
      header: 'Sample Anatomic Site',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'method_of_sample_procurement',
      header: 'Sample Procurement Method',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'test_name',
      header: 'Platform',
      display: true,
      tooltipText: 'sort',
      dataFromRoot: true,
      role: cellTypes.DISPLAY,
    },
  ],
  addFilesRequestVariableKey: 'sample_ids',
  addFilesResponseKeys: ['fileIDsFromList'],
  addAllFilesResponseKeys: ['sampleOverview', 'files'],
  tableMsg: {
    noMatch: 'No Matching Records Found',
  },
};

// --------------- Files Table configuration --------------
export const filesTable = {
  // Table title
  name: 'files',
  tableTitle: 'ASSOCIATED FILES',
  dataKey: 'file_name',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv 'true' or 'false'
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_samples_download',
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
      dataField: 'association',
      header: 'Association',
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
  tableMsg: {
    noMatch: 'No Matching Records Found',
  },
  addFilesRequestVariableKey: 'file_names',
  addFilesResponseKeys: ['fileIDsFromList'],
  addAllFilesResponseKeys: ['fileOverview', 'files'],
};
