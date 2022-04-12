import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_IDS_BY_TYPE = (type) => gql`{
    idsList{
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
    query search(
        $race: [String]
        $diseaseTerm: [String],
        $registeringInstitution: [String],
        $patientSubgroup: [String],
        $stageAtEntry: [String],
        $causeOfDeath: [String],
        $sitesOfDiseaseAtAutopsy: [String],
        $sourceOfTheLabData: [String],
        $labTest: [String],
        $systemOrganClass: [String],
        $serious: [String],
        $outcome: [String],
        $somaticPathogenicity: [String],
        $germlinePathogenicity: [String],
        $fileType: [String]
    ) {
        searchSubjects (
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

        filterSubjectCountByDiseaseStageAtEntry{
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

        filterSubjectCountBySerious {
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

        filterSubjectCountByFileType{
            group
            subjects
        }

        filterSubjectCountByGermlinePathogenicity{
            group
            subjects
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
        $lab_test: [String] ,
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
            labTest: $lab_test,
            system_organ_class: $system_organ_class,
            serious: $serious,
            outcome: $outcome,
            somatic_pathogenicity: $somatic_pathogenicity,
            germline_pathogenicity: $germline_pathogenicity,
            fileType: $fileType
        ) {
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
        }
    }
`;
