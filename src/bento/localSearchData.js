import gql from 'graphql-tag';

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_ALL_IDS = gql`{
  idsLists{
    subject_ids
}
  }
  `;

export const GET_SUBJECT_IDS = gql`
  query search ($subject_ids: [String]){
    findSubjectIdsInList (subject_ids: $subject_ids) {
        subject_id
        clinical_trial_id
    }
}
`;

export const GET_IDS_BY_TYPE = (type) => gql`{
  idsLists {
    ${type}
  }
}
`;

export const GET_SEARCH_NODES_BY_FACET = gql`
query SearchSubjectsQuery(
  $subject_ids: [String],
  $race: [String],
  $disease_term: [String],
  $registering_institution: [String],
  $patient_subgroup: [String],
  $stage_at_entry: [String],
  $cause_of_death: [String],
  $sites_of_disease_at_autopsy: [String],
  $source_of_the_lab_data: [String],
  $lab_test: [String],
  $system_organ_class: [String],
  $serious: [String],
  $outcome: [String],
  $somatic_pathogenicity: [String],
  $germline_pathogenicity: [String],
  $file_type: [String],
  $clinical_trial_id: [String]
){
  searchSubjects(
      subject_ids: $subject_ids,
      race: $race,
      disease_term: $disease_term,
      registering_institution: $registering_institution,
      patient_subgroup: $patient_subgroup,
      stage_at_entry: $stage_at_entry,
      cause_of_death: $cause_of_death,
      sites_of_disease_at_autopsy: $sites_of_disease_at_autopsy,
      source_of_the_lab_data: $source_of_the_lab_data,
      lab_test: $lab_test,
      system_organ_class: $system_organ_class,
      serious: $serious,
      outcome: $outcome,
      somatic_pathogenicity: $somatic_pathogenicity,
      germline_pathogenicity: $germline_pathogenicity,
      file_type: $file_type,
      clinical_trial_id: $clinical_trial_id
  ){
      numberOfTrials
      numberOfSubjects
      numberOfFiles

      subjectCountByRace {
          group
          subjects
      }
      subjectCountByDiseaseTerm {
          group
          subjects
      }
      subjectCountByRegisteringInstitution {
          group
          subjects
      }
      subjectCountByPatientSubgroup {
          group
          subjects
      }
      subjectCountByStageAtEntry {
          group
          subjects
      }
      subjectCountByCauseOfDeath {
          group
          subjects
      }
      subjectCountBySitesOfDiseaseAtAutopsy {
          group
          subjects
      }
      subjectCountBySourceOfTheLabData {
          group
          subjects
      }
      subjectCountByLabTest {
          group
          subjects
      }
      subjectCountBySystemOrganClass {
          group
          subjects
      }
      subjectCountBySerious {
          group
          subjects
      }
      subjectCountByOutcome {
          group
          subjects
      }
      subjectCountBySomaticPathogenicity {
          group
          subjects
      }
      subjectCountByGermlinePathogenicity {
          group
          subjects
      }
      subjectCountByFileType {
          group
          subjects
      }
      subjectCountByClinicalTrialId {
          group
          subjects
      }

      filterSubjectCountByRace {
          group
          subjects
      }
      filterSubjectCountByDiseaseTerm {
          group
          subjects
      }
      filterSubjectCountByRegisteringInstitution {
          group
          subjects
      }
      filterSubjectCountByPatientSubgroup {
          group
          subjects
      }
      filterSubjectCountByStageAtEntry {
          group
          subjects
      }
      filterSubjectCountByCauseOfDeath {
          group
          subjects
      }
      filterSubjectCountBySitesOfDiseaseAtAutopsy {
          group
          subjects
      }
      filterSubjectCountBySourceOfTheLabData {
          group
          subjects
      }
      filterSubjectCountByLabTest {
          group
          subjects
      }
      filterSubjectCountBySystemOrganClass {
          group
          subjects
      }
      filterSubjectCountBySerious {
          group
          subjects
      }
      filterSubjectCountByOutcome {
          group
          subjects
      }
      filterSubjectCountBySomaticPathogenicity {
          group
          subjects
      }
      filterSubjectCountByGermlinePathogenicity {
          group
          subjects
      }
      filterSubjectCountByFileType {
          group
          subjects
      }
      filterSubjectCountByClinicalTrialId {
          group
          subjects
      }
      
  }
}
`;

export const GET_SEARCH_NODECOUNTS = gql`
  query nodeCounts($subject_ids: [String]=[], $sample_ids: [String] = [], $file_ids: [String]=[], $file_names: [String]=[]){
    nodeCountsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
      numberOfPrograms
      numberOfStudies
      numberOfSubjects
      numberOfLabProcedures
      numberOfSamples
      numberOfFiles
  }



subjectCountByDiagnosesFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}
subjectCountByRecurrenceScoreFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}
subjectCountByTumorSizeFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}
subjectCountByChemotherapyRegimenFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}
subjectCountByEndocrineTherapyFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}

subjectCountByFileTypeFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}

armsByProgramsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  program
  caseSize
  children{
      arm
      caseSize
      size
  }
}  

findIdsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  subjectIds
  sampleIds
  fileIds
  fileNames
}
}
  `;

export const CASES_FILE_QUERY = gql`
query FileOverviewQuery(
  $file_ids: [String],
  $file_name: [String],
  $subject_ids: [String],
  $race: [String],
  $disease_term: [String],
  $registering_institution: [String],
  $patient_subgroup: [String],
  $stage_at_entry: [String],
  $cause_of_death: [String],
  $sites_of_disease_at_autopsy: [String],
  $source_of_the_lab_data: [String],
  $lab_test: [String],
  $system_organ_class: [String],
  $serious: [String],
  $outcome: [String],
  $somatic_pathogenicity: [String],
  $germline_pathogenicity: [String],
  $clinical_trial_id: [String],
  $file_type: [String]
  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  fileOverview(
      file_ids: $file_ids,
      file_name: $file_name,
      subject_ids: $subject_ids,
      race: $race,
      disease_term: $disease_term,
      registering_institution: $registering_institution,
      patient_subgroup: $patient_subgroup,
      stage_at_entry: $stage_at_entry,
      cause_of_death: $cause_of_death,
      sites_of_disease_at_autopsy: $sites_of_disease_at_autopsy,
      source_of_the_lab_data: $source_of_the_lab_data,
      lab_test: $lab_test,
      system_organ_class: $system_organ_class,
      serious: $serious,
      outcome: $outcome,
      somatic_pathogenicity: $somatic_pathogenicity,
      germline_pathogenicity: $germline_pathogenicity,
      clinical_trial_id: $clinical_trial_id,
      file_type: $file_type,
      order_by: $order_by,
      sort_direction: $sort_direction,
      first: $first,
      offset: $offset
){
      file_name
      subject_id
      description
      file_format
      size
      file_type
      file_id
      md5sum
  }
}
`;

export const CASES_SAMPLE_QUERY = gql`
query SubjectOverviewQuery(
  $subject_ids: [String],
  $race: [String],
  $disease_term: [String],
  $registering_institution: [String],
  $patient_subgroup: [String],
  $stage_at_entry: [String],
  $cause_of_death: [String],
  $sites_of_disease_at_autopsy: [String],
  $source_of_the_lab_data: [String],
  $lab_test: [String],
  $system_organ_class: [String],
  $serious: [String],
  $outcome: [String],
  $somatic_pathogenicity: [String],
  $germline_pathogenicity: [String],
  $clinical_trial_id: [String],
  $file_type: [String],
  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  subjectOverview(
      subject_ids: $subject_ids,
      race: $race,
      disease_term: $disease_term,
      registering_institution: $registering_institution,
      patient_subgroup: $patient_subgroup,
      stage_at_entry: $stage_at_entry,
      cause_of_death: $cause_of_death,
      sites_of_disease_at_autopsy: $sites_of_disease_at_autopsy,
      source_of_the_lab_data: $source_of_the_lab_data,
      lab_test: $lab_test,
      system_organ_class: $system_organ_class,
      serious: $serious,
      outcome: $outcome,
      somatic_pathogenicity: $somatic_pathogenicity,
      germline_pathogenicity: $germline_pathogenicity,
      clinical_trial_id: $clinical_trial_id,
      file_type: $file_type,
      order_by: $order_by,
      sort_direction: $sort_direction,
      first: $first,
      offset: $offset
){
      subject_id
      race
      disease_term
      stage_at_entry
      cause_of_death
      sites_of_disease_at_autopsy
      source_of_the_lab_data
      lab_test
      system_organ_class
      serious
      outcome
      files
  }
}
`;

export const SUBJECT_OVERVIEW_QUERY = gql`
query subjectOverview(
    $subject_ids: [String],
    $programs: [String],
    $studies: [String],
    $diagnoses: [String],
    $rc_scores: [String],
    $tumor_sizes: [String],
    $chemo_regimen: [String],
    $tumor_grades: [String],
    $er_status: [String],
    $pr_status: [String],
    $endo_therapies: [String],
    $meno_status: [String],
    $tissue_type: [String],
    $composition: [String],
    $association: [String],
    $file_type: [String],
    $age_at_index: [Float],
    $first: Int,
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
    subjectOverview(
        subject_ids: $subject_ids,
        programs: $programs,
        studies: $studies,
        diagnoses: $diagnoses,
        rc_scores: $rc_scores,
        tumor_sizes: $tumor_sizes,
        chemo_regimen: $chemo_regimen,
        tumor_grades: $tumor_grades,
        er_status: $er_status,
        pr_status: $pr_status,
        endo_therapies: $endo_therapies,
        meno_status: $meno_status,
        tissue_type: $tissue_type,
        composition: $composition,
        association: $association,       
        file_type: $file_type,
        age_at_index: $age_at_index,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
        ) {
        subject_id
        program
        program_id
        study_acronym
        study_short_description
        study_info
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
        survival_time_unit
        files
        lab_procedures
        samples
    }
}
`;

// type: 'sunburst' | 'donut'
// title: string
// dataName: string
// datatable_level1_field: string
// datatable_level2_field: string
// datatable_field: string
// sliceTitle: string (optional)
export const widgetsSearchData = [
  {
    type: 'donut',
    label: 'Germline Pathogenicity',
    dataName: 'subjectCountByGermlinePathogenicity',
    datatable_field: 'germline_pathogenicity',
    mapWithDashboardWidget: 'subjectCountByGermlinePathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Somatic Pathogenicity',
    dataName: 'subjectCountBySomaticPathogenicity',
    datatable_field: 'somatic_pathogenicity',
    mapWithDashboardWidget: 'subjectCountBySomaticPathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Registering Institution',
    dataName: 'subjectCountByRegisteringInstitution',
    datatable_field: 'registering_institution',
    mapWithDashboardWidget: 'subjectCountByRegisteringInstitution',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'subjectCountByRace',
    datatable_field: 'race',
    mapWithDashboardWidget: 'subjectCountByRace',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Disease Stage at Entry',
    dataName: 'subjectCountByStageAtEntry',
    datatable_field: 'stage_at_entry',
    mapWithDashboardWidget: 'subjectCountByStageAtEntry',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Serious',
    dataName: 'subjectCountBySerious',
    datatable_field: 'serious',
    mapWithDashboardWidget: 'subjectCountBySerious',
    titleText: 'Subjects',
    show: true,
  },
];

export const ageAtIndex = 10;
