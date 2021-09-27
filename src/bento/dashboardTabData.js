import gql from 'graphql-tag';
import { customSubjectsTabDownloadCSV, customFilesTabDownloadCSV } from './tableDownloadCSV';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected subject(s).',
  1: 'Click button to add selected files associated with the selected sample(s).',
  2: 'Click button to add selected files.',
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Tabs Table configuration --------------
// TODO: Rename query GET_CASES_OVERVIEW_QUERY to GET_SUBJECTS_OVERVIEW_QUERY
export const tabContainers = [
  {
    name: 'Subjects',
    dataField: 'dataCase',
    api: 'GET_CASES_OVERVIEW_QUERY',
    paginationAPIField: 'subjectOverViewPaged',
    paginationAPIFieldDesc: 'subjectOverViewPagedDesc',
    count: 'numberOfSubjects',
    dataKey: 'subject_id',
    defaultSortField: 'subject_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#09A175',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    columns: [
      {
        dataField: 'subject_id',
        header: 'Subject ID',
        sort: 'asc',
        link: '/subject/{subject_id}',
        primary: true,
        display: true,
      },
      {
        dataField: 'race',
        header: 'Race',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'diseaseTerm',
        header: 'Disease Term',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'registeringInstitution',
        header: 'Registering Institution',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'stageAtEntry',
        header: 'Stage at Entry',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'causeOfDeath',
        header: 'Cause of Death',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sitesOfDiseaseAtAutopsy',
        header: 'Sites of Disease at Autopsy',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sourceOfTheLabData',
        header: 'Source of The Lab Data',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'labTest',
        header: 'Lab Test',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'systemOrganClass',
        header: 'System Organ Class',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'serious',
        header: 'Serious',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'outcome',
        header: 'Outcome',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'pathogenicity',
        header: 'Pathogenicity',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'germlinePathogenicity',
        header: 'Germline Pathogenicity',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'subject_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'subject_tab_table',
    selectableRows: true,
    tableDownloadCSV: customSubjectsTabDownloadCSV,
    tabIndex: '0',
    viewColumns: true,
    downloadFileName: 'GMB_Dashboard_subjects_download',
    headerPagination: true,
    footerPagination: true,
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    api: 'GET_FILES_OVERVIEW_QUERY',
    paginationAPIField: 'fileOverview',
    paginationAPIFieldDesc: 'fileOverviewDesc',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    buttonText: 'Add Selected Files',
    dataKey: 'file_name',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#DC2FDA',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    columns: [
      {
        dataField: 'file_name',
        header: 'File Name',
        sort: 'asc',
        primary: true,
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Subject ID',
        sort: 'asc',
        link: '/case/{subject_id}',
        display: true,
      },
      {
        dataField: 'file_id',
        header: 'File ID',
        sort: 'asc',
        display: false,
      },
      {
        dataField: 'file_description',
        header: 'Description',
        sort: 'asc',
        display: true,
      },
      {
        dataField: '', // This need to left empty if no data need to be displayed before file download icon
        header: 'Access',
        sort: 'asc',
        display: true,
        downloadDocument: true, // To indicate that column is document donwload
        documentDownloadProps: {
          // Max file size needs to bin Bytes to seperate two support file preview and download
          maxFileSize: 1073741824,
          // Tool top text for file download
          toolTipTextFileDownload: 'Download a copy of this file',
          // Tool top text for file preview
          toolTipTextFilePreview: 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
          // datafield where file file column exists in the table
          fileSizeColumn: 'file_size',
          // datafield where file file id exists in the table which is used to get file location
          fileLocationColumn: 'file_id',
          // file download icon
          iconFileDownload: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadPDF.svg',
          // file preview ico
          iconFilePreview: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadCloud.svg',
        },
      },
      {
        dataField: 'file_format',
        header: 'File Format',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_size',
        header: 'Size',
        sort: 'asc',
        display: true,
        formatBytes: true,
      },
      {
        dataField: 'file_type',
        header: 'File Type',
        sort: 'asc',
        primary: true,
        display: true,
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,
    tabIndex: '2',
    viewColumns: true,
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'GMB_Dashboard_files_download',
    headerPagination: true,
    footerPagination: true,
  },
];

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'casesubject_tab',
    title: 'Subjects',
    dataField: 'dataCase',
    count: 'numberOfSubjects',
  },
  {
    id: 'file_tab',
    title: 'Files',
    dataField: 'dataFile',
    count: 'numberOfFiles',
  },
];

// --------------- Tabs Header Style configuration --------------
export const tabIndex = [
  {
    title: 'Subjects',
    primaryColor: '#D6F2EA',
    secondaryColor: '#FFDFB8',
    selectedColor: '#10A075',
  },
  {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
];

export const DASHBOARD_QUERY = gql`{
  numberOfTrials
  numberOfSubjects
  numberOfFiles
    subjectCountByRace{
        group
        subjects
      }
    subjectCountByDiseaseTerm{
        group
        subjects
      }
    subjectCountByRegisteringInstitution{
        group
        subjects
      }
    subjectCountByPatientSubgroup{
        group
        subjects
      }
    subjectCountByDiseaseStageAtEntry{
        group
        subjects
      }
    subjectCountByCauseOfDeath{
        group
        subjects
      }
    subjectCountBySitesOfDiseaseAtAutopsy{
        group
        subjects
      }
    subjectCountBySourceOfTheLabData{
        group
        subjects
      }
    subjectCountByLabTest{
        group
        subjects
      }
    subjectCountBySystemOrganClass{
        group
        subjects
      }
    subjectCountBySerious{
        group
        subjects
      }
    subjectCountByOutcome{
        group
        subjects
      }
    subjectCountBySomaticPathogenicity{
        group
        subjects
      }
    subjectCountByFileType{
        group
        subjects
      }
    subjectCountByGermlinePathogenicity{
        group
        subjects
      }
  subjectOverViewPaged(first: 10) {
      subject_id
      race
      diseaseTerm
      registeringInstitution
      patientSubgroup
      stageAtEntry
      causeOfDeath
      sitesOfDiseaseAtAutopsy
      sourceOfTheLabData
      labTest
      systemOrganClass
      serious
      outcome
      pathogenicity
      germlinePathogenicity
      files{
        file_id
      }
  }
  }`;

export const FILTER_GROUP_QUERY = gql`
  query groupCounts($subject_ids: [String]){
    subjectCountByGermlinePathogenicity (subject_ids: $subject_ids){
      group
      subjects
    }
    subjectCountBySomaticPathogenicity (subject_ids: $subject_ids){
      group
      subjects
    }
    subjectCountByRegisteringInstitution (subject_ids: $subject_ids){
      group
      subjects
    }
    subjectCountByRace (subject_ids: $subject_ids){
      group
      subjects
    }
    subjectCountByDiseaseStageAtEntry (subject_ids: $subject_ids){
      group
      subjects
    }
    subjectCountBySerious (subject_ids: $subject_ids){
      group
      subjects
    } 
}
 `;

export const FILTER_QUERY = gql`
query search(
  $race: [String] ,
  $diseaseTerm: [String] ,
  $registeringInstitution: [String] ,
  $patientSubgroup: [String] ,
  $stageAtEntry: [String] ,
  $causeOfDeath: [String] ,
  $sitesOfDiseaseAtAutopsy: [String] ,
  $sourceOfTheLabData: [String] ,
  $labTest: [String] ,
  $systemOrganClass: [String] ,
  $serious: [String],
  $outcome: [String],
  $somaticPathogenicity: [String],
  $germlinePathogenicity: [String],
  $fileType: [String]
  ) {
searchSubjects(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
  numberOfTrials
  numberOfSubjects
  numberOfFiles
  fileIds
  subject_ids
}

filterSubjectCountByRace(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
  group
  subjects
}

filterSubjectCountByDiseaseTerm(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByRegisteringInstitution(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByPatientSubgroup(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByDiseaseStageAtEntry(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByCauseOfDeath(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountBySitesOfDiseaseAtAutopsy(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountBySourceOfTheLabData(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByLabTest(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountBySystemOrganClass(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountBySerious(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByOutcome(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountBySomaticPathogenicity(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByFileType(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }

filterSubjectCountByGermlinePathogenicity(
      race: $race,
      diseaseTerm: $diseaseTerm,
      registeringInstitution: $registeringInstitution,
      patientSubgroup: $patientSubgroup,
      stageAtEntry: $stageAtEntry,
      causeOfDeath: $causeOfDeath,
      sitesOfDiseaseAtAutopsy: $sitesOfDiseaseAtAutopsy,
      sourceOfTheLabData: $sourceOfTheLabData,
      labTest: $labTest,
      systemOrganClass: $systemOrganClass,
      serious: $serious,
      outcome: $outcome,
      somaticPathogenicity: $somaticPathogenicity,
      germlinePathogenicity: $germlinePathogenicity,       
      fileType: $fileType
) {
    group
    subjects
  }
}

`;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
  fileOverview(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
    file_id
    file_name
    file_description
    file_format
    file_type
    file_size
    trial_id
    trial_short_name
    arm
    subject_id
  }
}
  `;

export const GET_FILES_OVERVIEW_DESC_QUERY = gql`
  query fileOverviewDesc($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
    fileOverviewDesc(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
      file_id
      file_name
      file_description
      file_format
      file_type
      file_size
      trial_id
      trial_short_name
      arm
      subject_id
    }
  }
    `;

// --------------- GraphQL query - Retrieve Cases tab details --------------
export const GET_CASES_OVERVIEW_QUERY = gql`
query subjectOverViewPaged($subject_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String =""){
  subjectOverViewPaged(subject_ids: $subject_ids, first: $first, offset: $offset, order_by: $order_by) {
      subject_id
      race
      diseaseTerm
      registeringInstitution
      patientSubgroup
      stageAtEntry
      causeOfDeath
      sitesOfDiseaseAtAutopsy
      sourceOfTheLabData
      labTest
      systemOrganClass
      serious
      outcome
      pathogenicity
      germlinePathogenicity
      files{
        file_id
      }
  }
}
  `;

// --------------- GraphQL query - Retrieve sample tab details --------------

export const GET_CASES_OVERVIEW_DESC_QUERY = gql`
  query subjectOverViewPaged($subject_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String =""){
    subjectOverViewPagedDesc(subject_ids: $subject_ids, first: $first, offset: $offset, order_by: $order_by) {
      subject_id
      race
      diseaseTerm
      registeringInstitution
      patientSubgroup
      stageAtEntry
      causeOfDeath
      sitesOfDiseaseAtAutopsy
      sourceOfTheLabData
      labTest
      systemOrganClass
      serious
      outcome
      pathogenicity
      germlinePathogenicity
      files{
        file_id
      }
    }
}
  `;

export const GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL = gql`
  query subjectOverViewPaged($subject_ids: [String], $first: Int = 10000000){
    subjectOverViewPaged(subject_ids: $subject_ids, first: $first) {
        files {
          file_id
        }
    }
}
  `;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by: String = "file_name") {
  fileOverview(file_ids: $file_ids, offset: $offset, first: $first, order_by: $order_by) {
    file_id
  }
}
  `;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_NAME_QUERY = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 100000, $order_by:String ="file_name"){
  fileOverview(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
    file_name
  }
}
  `;

export const GET_FILE_IDS_FROM_FILE_NAME = gql`
  query (
      $file_name: [String],
      $offset: Int,
      $first: Int,
      $order_by: String
  )
  {
      fileIdsFromFileNameDesc(
          file_name:$file_name, 
          offset:$offset,
          first:$first,
          order_by:$order_by
      )
      {
        file_id
      }
  }`;
