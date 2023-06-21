import { sortType, InputTypes } from '@bento-core/facet-filter';

const CASES = 'Cases';
//NOTE: UNUSED TAB
//const SAMPLES = 'Samples';
const FILES = 'Files';
const GROUP = 'group';

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  Cases: {
    isExpanded: true,
    hasSearch: true,
  },
  /*NOTE: UNUSED TAB
  Samples: {
    isExpanded: true,
  },*/
  Files: {
    isExpanded: true,
  },
};

export const facetsConfig = [
  {
    section: CASES,
    label: 'Trial ID',
    apiPath: 'subjectCountByClinicalTrialId',
    apiForFiltering: 'filterSubjectCountByClinicalTrialId',
    datafield: 'clinical_trial_id',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Race',
    apiPath: 'subjectCountByRace',
    apiForFiltering: 'filterSubjectCountByRace',
    datafield: 'race',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Disease Term',
    apiPath: 'subjectCountByDiseaseTerm',
    apiForFiltering: 'filterSubjectCountByDiseaseTerm',
    datafield: 'disease_term',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Registering Institution',
    apiPath: 'subjectCountByRegisteringInstitution',
    apiForFiltering: 'filterSubjectCountByRegisteringInstitution',
    datafield: 'registering_institution',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Patient Subgroup',
    apiPath: 'subjectCountByPatientSubgroup',
    apiForFiltering: 'filterSubjectCountByPatientSubgroup',
    datafield: 'patient_subgroup',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Disease Stage at Entry',
    apiPath: 'subjectCountByStageAtEntry',
    apiForFiltering: 'filterSubjectCountByStageAtEntry',
    datafield: 'stage_at_entry',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Cause of Death',
    apiPath: 'subjectCountByCauseOfDeath',
    apiForFiltering: 'filterSubjectCountByCauseOfDeath',
    datafield: 'cause_of_death',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Sites of Disease at Autopsy',
    apiPath: 'subjectCountBySitesOfDiseaseAtAutopsy',
    apiForFiltering: 'filterSubjectCountBySitesOfDiseaseAtAutopsy',
    datafield: 'sites_of_disease_at_autopsy',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Source of the Lab Data',
    apiPath: 'subjectCountBySourceOfTheLabData',
    apiForFiltering: 'filterSubjectCountBySourceOfTheLabData',
    datafield: 'source_of_the_lab_data',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Lab Test',
    apiPath: 'subjectCountByLabTest',
    apiForFiltering: 'filterSubjectCountByLabTest',
    datafield: 'lab_test',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'System Organ Class',
    apiPath: 'subjectCountBySystemOrganClass',
    apiForFiltering: 'filterSubjectCountBySystemOrganClass',
    datafield: 'system_organ_class',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Serious',
    apiPath: 'subjectCountBySerious',
    apiForFiltering: 'filterSubjectCountBySerious',
    datafield: 'serious',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Outcome',
    apiPath: 'subjectCountByOutcome',
    apiForFiltering: 'filterSubjectCountByOutcome',
    datafield: 'outcome',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Somatic Pathogenicity',
    apiPath: 'subjectCountBySomaticPathogenicity',
    apiForFiltering: 'filterSubjectCountBySomaticPathogenicity',
    datafield: 'somatic_pathogenicity',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Germline Pathogenicity',
    apiPath: 'subjectCountByGermlinePathogenicity',
    apiForFiltering: 'filterSubjectCountByGermlinePathogenicity',
    datafield: 'germline_pathogenicity',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  /* NOTE: UNUSED VALUES + TAB
  {
    section: CASES,
    label: 'Age',
    apiPath: 'filterSubjectCountByAge',
    apiForFiltering: 'filterSubjectCountByAge',
    datafield: 'age_at_index',
    ApiLowerBoundName: 'lowerBound',
    ApiUpperBoundName: 'upperBound',
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: 'none',
    minLowerBound: 0,
    maxUpperBound: 100,
    quantifier: 'Years',
  },
  /*
  {
    section: SAMPLES,
    label: 'Tissue Type',
    apiPath: 'subjectCountByTissueType',
    apiForFiltering: 'filterSubjectCountByTissueType',
    datafield: 'tissue_type',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: SAMPLES,
    label: 'Tissue Composition',
    apiPath: 'subjectCountByTissueComposition',
    apiForFiltering: 'filterSubjectCountByTissueComposition',
    datafield: 'composition',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },*/
  /*
  {
    section: FILES,
    label: 'File Association',
    apiPath: 'subjectCountByFileAssociation',
    apiForFiltering: 'filterSubjectCountByFileAssociation',
    datafield: 'association',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },*/
  {
    section: FILES,
    label: 'File Type',
    apiPath: 'subjectCountByFileType',
    apiForFiltering: 'filterSubjectCountByFileType',
    datafield: 'file_type',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
];

// --------------- Dashboard Widgets configuration --------------
// Sunburst chart color scheme
export const SUNBURST_COLORS_LEVEL_1 = [
  '#7dc242',
  '#274fa5',
  '#79287c',
  '#f78f48',
  '#057ebd',
];

export const SUNBURST_COLORS_LEVEL_2 = [
  '#057ebd',
  '#f78f48',
  '#79287c',
  '#0e3151',
  '#057ebd',
  '#7dc242',
];

// A maximum of 6 widgets are allowed
// for donuts only the following are required: type, title, dataName
//
// type: 'sunburst' | 'donut'
// title: string
// dataName: string
// datatable_level1_field: string
// datatable_level1_colors: string[]
// datatable_level2_field: string
// datatable_level2_colors: string[]
// sliceTitle: string (optional)
export const widgetConfig = [
  {
    type: 'donut',
    title: 'Germline Pathogenicity',
    dataName: 'subjectCountByGermlinePathogenicity',
  },
  {
    type: 'donut',
    title: 'Somatic Pathogenicity',
    dataName: 'subjectCountBySomaticPathogenicity',
  },
  {
    type: 'donut',
    title: 'Registering Institution',
    dataName: 'subjectCountByRegisteringInstitution',
  },
  {
    type: 'donut',
    title: 'Race',
    dataName: 'subjectCountByRace',
  },
  {
    type: 'donut',
    title: 'Disease Stage at Entry',
    dataName: 'subjectCountByStageAtEntry',
  },
  {
    type: 'donut',
    title: 'Serious',
    dataName: 'subjectCountBySerious', //subjectCountBySerious
  },
];
