import gql from 'graphql-tag';

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_ALL_IDS = gql`{
  idsLists{
    subjectIds
    sampleIds
    fileIds
    fileNames
}
  }
  `;

export const GET_SUBJECT_IDS = gql`
  query search ($subject_ids: [String]){
    findSubjectIdsInList (subject_ids: $subject_ids) {
        subject_id
        trial_id
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
query searchSubjects(
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
    $file_type: [String]
){
    searchSubjects(
        subject_ids:$subject_ids,
        race:$race,
        disease_term:$disease_term,
        registering_institution:$registering_institution,
        patient_subgroup:$patient_subgroup,
        stage_at_entry:$stage_at_entry,
        cause_of_death:$cause_of_death,
        sites_of_disease_at_autopsy:$sites_of_disease_at_autopsy,
        source_of_the_lab_data:$source_of_the_lab_data,
        lab_test:$lab_test,
        system_organ_class:$system_organ_class,
        serious:$serious,
        outcome:$outcome,
        somatic_pathogenicity:$somatic_pathogenicity,
        germline_pathogenicity:$germline_pathogenicity,
        file_type: $file_type
    ){
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
        subjectCountByStageAtEntry{
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
        subjectCountByGermlinePathogenicity{
            group
            subjects
        }
        subjectCountByFileType{
            group
            subjects
        }
        filterSubjectCountByRace{
            group
            subjects
        }
        filterSubjectCountByDiseaseTerm{
            group
            subjects
        }
        filterSubjectCountByRegisteringInstitution{
            group
            subjects
        }
        filterSubjectCountByPatientSubgroup{
            group
            subjects
        }
        filterSubjectCountByStageAtEntry{
            group
            subjects
        }
        filterSubjectCountByCauseOfDeath{
            group
            subjects
        }
        filterSubjectCountBySitesOfDiseaseAtAutopsy{
            group
            subjects
        }
        filterSubjectCountBySourceOfTheLabData{
            group
            subjects
        }
        filterSubjectCountByLabTest{
            group
            subjects
        }
        filterSubjectCountBySystemOrganClass{
            group
            subjects
        }
        filterSubjectCountBySerious{
            group
            subjects
        }
        filterSubjectCountByOutcome{
            group
            subjects
        }
        filterSubjectCountBySomaticPathogenicity{
            group
            subjects
        }
        filterSubjectCountByGermlinePathogenicity{
            group
            subjects
        }
        filterSubjectCountByFileType{
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
query fileOverview(
    $file_id: [String],
    $file_name: [String],
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
    $offset: Int,
    $first: Int,
    $order_by: String,
    $sort_direction: String
){
    fileOverview(
        file_id:$file_id,
        file_name:$file_name,
        race:$race,
        disease_term:$disease_term,
        registering_institution:$registering_institution,
        patient_subgroup:$patient_subgroup,
        stage_at_entry:$stage_at_entry,
        cause_of_death:$cause_of_death,
        sites_of_disease_at_autopsy:$sites_of_disease_at_autopsy,
        source_of_the_lab_data:$source_of_the_lab_data,
        lab_test:$lab_test,
        system_organ_class:$system_organ_class,
        serious:$serious,
        outcome:$outcome,
        somatic_pathogenicity:$somatic_pathogenicity,
        germline_pathogenicity:$germline_pathogenicity,
        file_type: $file_type,
        offset: $offset,
        first: $first,
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        file_name
        subject_id
        description
        fileFormat
        size
        fileType
        file_id
    }
}
`;

export const SUBJECT_OVERVIEW_QUERY = gql`
query subjectOverview(
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
    $offset: Int,
    $first: Int,
    $order_by: String,
    $sort_direction: String
){
    subjectOverview(
        subject_ids:$subject_ids,
        race:$race,
        disease_term:$disease_term,
        registering_institution:$registering_institution,
        patient_subgroup:$patient_subgroup,
        stage_at_entry:$stage_at_entry,
        cause_of_death:$cause_of_death,
        sites_of_disease_at_autopsy:$sites_of_disease_at_autopsy,
        source_of_the_lab_data:$source_of_the_lab_data,
        lab_test:$lab_test,
        system_organ_class:$system_organ_class,
        serious:$serious,
        outcome:$outcome,
        somatic_pathogenicity:$somatic_pathogenicity,
        germline_pathogenicity:$germline_pathogenicity,
        file_type: $file_type,
        offset: $offset,
        first: $first,
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        subject_id
        race
        disease_term
        stageAtEntry
        causeOfDeath
        sitesOfDiseaseAtAutopsy
        sourceOfTheLabData
        labTest
        systemOrganClass
        serious
        outcome
        files
    }
}
`;

export const widgetsSearchData = [
  {
    type: 'donut',
    label: 'Germline Pathogenicity',
    dataName: 'subjectCountByGermlinePathogenicity',
    datatable_field: 'germlinePathogenicity',
    mapWithDashboardWidget: 'subjectCountByGermlinePathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Somatic Pathogenicity',
    dataName: 'subjectCountBySomaticPathogenicity',
    datatable_field: 'somaticPathogenicity',
    mapWithDashboardWidget: 'subjectCountBySomaticPathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Registering Institution',
    dataName: 'subjectCountByRegisteringInstitution',
    datatable_field: 'registeringInstitution',
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
    datatable_field: 'stageAtEntry',
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
