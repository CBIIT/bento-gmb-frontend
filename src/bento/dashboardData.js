import gql from 'graphql-tag';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed
export const facetSearchData = [
  {
    label: 'Race', field: 'group', api: 'subjectCountByRace', apiForFiltering: 'filterSubjectCountByRace', datafield: 'race', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Disease Term', field: 'group', api: 'subjectCountByDiseaseTerm', apiForFiltering: 'filterSubjectCountByDiseaseTerm', datafield: 'race', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Registering Institution', field: 'group', api: 'subjectCountByRegisteringInstitution', apiForFiltering: 'filterSubjectCountByRegisteringInstitution', datafield: 'registeringInstitution', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Patient Subgroup', field: 'group', api: 'subjectCountByPatientSubgroup', apiForFiltering: 'filterSubjectCountByPatientSubgroup', datafield: 'patientSubgroup', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Disease Stage at Entry', field: 'group', api: 'subjectCountByDiseaseStageAtEntry', apiForFiltering: 'filterSubjectCountByDiseaseStageAtEntry', datafield: 'stageAtEntry', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Cause of Death', field: 'group', api: 'subjectCountByCauseOfDeath', apiForFiltering: 'filterSubjectCountByCauseOfDeath', datafield: 'causeOfDeath', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Sites of Disease at Autopsy', field: 'group', api: 'subjectCountBySitesOfDiseaseAtAutopsy', apiForFiltering: 'filterSubjectCountBySitesOfDiseaseAtAutopsy', datafield: 'sitesOfDiseaseAtAutopsy', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Source of the Lab Data', field: 'group', api: 'subjectCountBySourceOfTheLabData', apiForFiltering: 'filterSubjectCountBySourceOfTheLabData', datafield: 'sourceOfTheLabData', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Lab Test', field: 'group', api: 'subjectCountByLabTest', apiForFiltering: 'filterSubjectCountByLabTest', datafield: 'labTest', section: 'Filter By Cases', show: true,
  },
  {
    label: 'System Organ Class', field: 'group', api: 'subjectCountBySystemOrganClass', apiForFiltering: 'filterSubjectCountBySystemOrganClass', datafield: 'systemOrganClass', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Serious', field: 'group', api: 'subjectCountBySerious', apiForFiltering: 'filterSubjectCountBySerious', datafield: 'serious', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Outcome', field: 'group', api: 'subjectCountByOutcome', apiForFiltering: 'filterSubjectCountByOutcome', datafield: 'outcome', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Somatic Pathogenicity', field: 'group', api: 'subjectCountBySomaticPathogenicity', apiForFiltering: 'filterSubjectCountBySomaticPathogenicity', datafield: 'somaticPathogenicity', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Germline Pathogenicity', field: 'group', api: 'subjectCountByGermlinePathogenicity', apiForFiltering: 'filterSubjectCountByGermlinePathogenicity', datafield: 'germlinePathogenicity', section: 'Filter By Cases', show: true,
  },
  {
    label: 'File Type', field: 'group', api: 'subjectCountByFileType', apiForFiltering: 'filterSubjectCountByFileType', datafield: 'fileType', section: 'Filter By Files', show: true,
  },
];

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  'Filter By Cases': {
    color: '#10A075',
    checkBoxColorsOne: '#E8F7DC',
    checkBoxColorsTwo: '#F5FDEE',
    height: '5px',
    isExpanded: false,
  },
  'Filter By Samples': {
    color: '#10BEFF',
    checkBoxColorsOne: '#C9EBF7',
    checkBoxColorsTwo: '#E8F8FE',
    height: '5px',
    isExpanded: false,
  },
  'Filter By Files': {
    color: '#E636E4',
    checkBoxColorsOne: '#FBE3FB',
    checkBoxColorsTwo: '#FFF2FF',
    height: '5px',
    isExpanded: false,
  },
};

// --------------- Default Dashboard Sidebar Sections styling --------------
export const defaultFacetSectionVariables = {
  color: '#000000',
  checkBoxColorsOne: '#E8F7DC',
  checkBoxColorsTwo: '#F5FDEE',
  height: '5px',
  isExpanded: false,
};

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'donut',
    label: 'Germline Pathogenicity',
    dataName: 'subjectCountByGermlinePathogenicity',
    datatable_field: 'germlinePathogenicity',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Somatic Pathogenicity',
    dataName: 'subjectCountBySomaticPathogenicity',
    datatable_field: 'somaticPathogenicity',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Registering Institution',
    dataName: 'subjectCountByRegisteringInstitution',
    datatable_field: 'registeringInstitution',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'subjectCountByRace',
    datatable_field: 'race',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Disease Stage at Entry',
    dataName: 'subjectCountByDiseaseStageAtEntry',
    datatable_field: 'stageAtEntry',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Serious',
    dataName: 'subjectCountBySerious',
    datatable_field: 'serious',
    titleText: 'Cases',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};
export const resetIconFilter = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Cases',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
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
      display: false,
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
};

// --------------- Sorting related labels configuration --------------
export const sortLabels = {
  sortAlphabetically: 'Sort alphabetically',
  sortByCount: 'Sort by counts',
  showMore: '...expand to see all selections',
};

export const showCheckboxCount = 5;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  subjectCountByProgram{
        group
        subjects
      }
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
        group
        subjects
      }
    subjectCountByTumorGrade{
        group
        subjects
      }
  subjectCountByErStatus{
        group
        subjects
      }
  subjectCountByPrStatus{
        group
        subjects
      }
  subjectCountByMenopauseStatus{
        group
        subjects
      }
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
  subjectCountByFileType{
    group
    subjects
}
subjectCountByFileAssociation {
    group
    subjects
}
subjectCountByTissueComposition{
    group
    subjects
}
subjectCountByTissueType{
    group
    subjects
}
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }
    subjectOverViewPaged(first: 100) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{
  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;
