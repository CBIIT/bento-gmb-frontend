import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_IDS_BY_TYPE = (type) => gql`{
    idsLists {
        ${type}
    }
}`;
export const GET_SUBJECT_IDS = gql`
    query search ($subject_ids: [String]) {
        findSubjectIdsInList(subject_ids: $subject_ids) {
            subject_id
            trial_id
        }
    }
`;

export const GET_SEARCH_NODES_BY_FACET = gql`
    query searchSubjects(
        $subject_id: [String],
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
#        $file_type: [String]
    ) {
        searchSubjects (
            subject_id:$subject_id,
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
#            file_type: $file_type
        ) {
            numberOfTrials
            numberOfSubjects
            numberOfFiles
            #            file_ids
            #            subject_ids
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
            subjectCountByGermlinePathogenicity
            {
                group
                subjects}
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

export const SUBJECT_OVERVIEW_QUERY = gql`
    query subjectOverview(
        $subject_ids: [String],
        $race: [String] ,
        $disease_term: [String] ,
        $registering_institution: [String] ,
        $stage_at_entry: [String] ,
        $cause_of_death: [String] ,
        $sites_of_disease_at_autopsy: [String] ,
        $source_of_the_lab_data: [String] ,
        #        $lab_test: [String] ,
        $system_organ_class: [String] ,
        $serious: [String],
        $outcome: [String],
        $somatic_pathogenicity: [String],
        $germline_pathogenicity: [String],
        $file_type: [String],
        $patient_subgroup: [String],
        #        $offset: Int,
        #        $first: Int,
        #        $order_by: String,
        #        $sort_direction: String,
    ) {
        subjectOverview(
            subject_id: $subject_ids,
            race: $race,
            disease_term: $disease_term,
            registering_institution: $registering_institution,
            patient_subgroup: $patient_subgroup,
            stage_at_entry: $stage_at_entry,
            cause_of_death: $cause_of_death,
            sites_of_disease_at_autopsy: $sites_of_disease_at_autopsy,
            source_of_the_lab_data: $source_of_the_lab_data,
            #            labTest: $lab_test,
            system_organ_class: $system_organ_class,
            serious: $serious,
            outcome: $outcome,
            somatic_pathogenicity: $somatic_pathogenicity,
            germline_pathogenicity: $germline_pathogenicity,
            file_type: $file_type
        ) {
            #subject_id    
            #race
            #disease_term
            #stageAtEntry       
            #causeOfDeath     
            #sitesOfDiseaseAtAutopsy     
            #sourceOfTheLabData    
            #labTest     
            #systemOrganClass     
            #serious 
            #outcome
            subject_id
            race
            disease_term
            #registering_institution
            #patientSubgroup
            stageAtEntry
            causeOfDeath
            sitesOfDiseaseAtAutopsy
            sourceOfTheLabData
            #            labTest
            systemOrganClass
            serious
            outcome
        }
    }
`;

export const widgetsSearchData = [
  {
    type: 'donut',
    label: 'Germline Pathogenicity',
    dataName: 'subjectCountByGermlinePathogenicity',
    mapWithDashboardWidget: 'subjectCountByGermlinePathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Somatic Pathogenicity',
    dataName: 'subjectCountBySomaticPathogenicity',
    mapWithDashboardWidget: 'subjectCountBySomaticPathogenicity',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Registering Institution',
    dataName: 'subjectCountByRegisteringInstitution',
    mapWithDashboardWidget: 'subjectCountByRegisteringInstitution',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'subjectCountByRace',
    mapWithDashboardWidget: 'subjectCountByRace',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Disease Stage at Entry',
    dataName: 'subjectCountByStageAtEntry',
    mapWithDashboardWidget: 'subjectCountByStageAtEntry',
    titleText: 'Subjects',
    show: true,
  },
  {
    type: 'donut',
    label: 'Serious',
    dataName: 'subjectCountBySerious',
    mapWithDashboardWidget: 'subjectCountBySerious',
    titleText: 'Subjects',
    show: true,
  },
];
