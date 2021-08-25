import gql from 'graphql-tag';
import { customCasesTabDownloadCSV, customFilesTabDownloadCSV } from './tableDownloadCSV';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected case(s).',
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
export const tabContainers = [
  {

    name: 'Cases',
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
        header: 'Case ID',
        sort: 'asc',
        link: '/case/{subject_id}',
        primary: true,
        display: true,
      },
      {
        dataField: 'program',
        header: 'Program Code',
        sort: 'asc',
        link: '/program/{program_id}',
        display: true,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'study_acronym',
        header: 'Arm',
        sort: 'asc',
        link: '/arm/{study_acronym}',
        display: true,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'recurrence_score',
        header: 'Recurrence Score',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tumor_size',
        header: 'Tumor Size (cm)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'er_status',
        header: 'ER Status',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'pr_status',
        header: 'PR Status',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'age_at_index',
        header: 'Age (years)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'survival_time',
        header: 'Survival (days)',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'case_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'case_tab_table',
    selectableRows: true,
    tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
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
        dataField: 'file_id',
        header: 'File ID',
        sort: 'asc',
        display: false,
      },
      {
        dataField: 'association',
        header: 'Association',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_description',
        header: 'Description',
        sort: 'asc',
        display: true,
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
        dataField: '', // This need to left empty if no data need to be displayed before file download icon
        header: 'Access',
        sort: 'asc',
        display: true,
        downloadDocument: true, // To indicate that column is document donwload
        documentDownloadProps: {
          // Max file size needs to bin Bytes to seperate two support file preview and download
          maxFileSize: 315,
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
        dataField: 'program',
        header: 'Program Code',
        sort: 'asc',
        link: '/program/{program_id}',
        display: true,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        sort: 'asc',
        display: false,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        sort: 'asc',
        link: '/arm/{arm}',
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Case ID',
        sort: 'asc',
        link: '/case/{subject_id}',
        display: true,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,
    tabIndex: '2',
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
];

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    title: 'Cases',
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
    title: 'Cases',
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
        uuid
      }
  }
  }`;

export const FILTER_GROUP_QUERY = gql`
  query groupCounts($subject_id: [String]){
    subjectCountByGermlinePathogenicity (subject_id: $subject_id){
      group
      subjects
    }
    subjectCountBySomaticPathogenicity (subject_id: $subject_id){
      group
      subjects
    }
    subjectCountByRegisteringInstitution (subject_id: $subject_id){
      group
      subjects
    }
    subjectCountByRace (subject_id: $subject_id){
      group
      subjects
    }
    subjectCountByDiseaseStageAtEntry (subject_id: $subject_id){
      group
      subjects
    }
    subjectCountBySerious (subject_id: $subject_id){
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
  subject_id
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
query fileOverview($uuids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
  fileOverview(uuids: $uuids, offset: $offset,first: $first, order_by: $order_by) {
    uuid
    file_name
    file_description
    file_format
    file_size
    trial_id
    trial_short_name
    arm
    subject_id
  }
}
  `;

export const GET_FILES_OVERVIEW_DESC_QUERY = gql`
  query fileOverviewDesc($uuids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
    fileOverviewDesc(uuids: $uuids, offset: $offset,first: $first, order_by: $order_by) {
      uuids
      file_name
      file_description
      file_format
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
        uuid
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
        uuid
      }
    }
}
  `;

export const GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL = gql`
  query subjectOverViewPaged($subject_ids: [String], $first: Int = 10000000){
    subjectOverViewPaged(subject_ids: $subject_ids, first: $first) {
        files {
          uuid
        }
    }
}
  `;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query fileOverview($uuids: [String], $offset: Int = 0, $first: Int = 10, $order_by: String = "file_name") {
  fileOverview(uuids: $uuids, offset: $offset, first: $first, order_by: $order_by) {
    uuids
  }
}
  `;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_NAME_QUERY = gql`
query fileOverview($uuids: [String], $offset: Int = 0, $first: Int = 100000, $order_by:String ="file_name"){
  fileOverview(uuids: $uuids, offset: $offset,first: $first, order_by: $order_by) {
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
        uuid
      }
  }`;
