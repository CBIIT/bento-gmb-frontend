/* eslint-disable */
import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';
import { customCasesTabDownloadCSV, customFilesTabDownloadCSV, customSamplesTabDownloadCSV } from './tableDownloadCSV';
import { dataFormatTypes } from '@bento-core/table';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected case(s).',
  1: 'Click button to add selected files associated with the selected sample(s).',
  2: 'Click button to add selected files.',
  Cases: 'Click button to add selected files associated with the selected case(s).',
  Samples: 'Click button to add selected files associated with the selected sample(s).',
  Files: 'Click button to add selected files.',
  arrow: true,
  styles: {
    border: '#03A383 1px solid',
  }
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};


// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    title: 'Subjects',
    dataField: 'dataCase',
    count: 'numberOfSubjects',
  },
  /*NOTE: UNUSED TAB
  {
    id: 'sample_tab',
    title: 'Samples',
    dataField: 'dataSample',
    count: 'numberOfSamples',
  },*/
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
  /* /*NOTE: UNUSED TAB
  {
    title: 'Samples',
    primaryColor: '#CFEDF9',
    secondaryColor: '#C9F1F1',
    selectedColor: '#0DAFEC',
  },*/
  {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
];

export const DASHBOARD_QUERY_NEW = gql`
query search (
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
    searchSubjects (
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
    ) {
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
/* NOTE: UNUSED QUERY 
export const DASHBOARD_QUERY = gql`
    query search (
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
        searchSubjects (
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
        ) {
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
  
   `;*/

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
    subjectCountByRace(subject_ids: $subject_ids) {
        group
        subjects
    }
    subjectCountByStageAtEntry(subject_ids: $subject_ids) {
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
query search (
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
    searchSubjects (
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
    ) {
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

export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview(
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
      fileFormat
      size
      fileType
      file_id
      md5sum
  }
}
`;
/* NOTE: UNUSED TAB
export const GET_SAMPLES_OVERVIEW_QUERY = gql`
query sampleOverview(
    $subject_ids: [String],
    $sample_ids: [String],
    $programs: [String] ,
    $studies: [String] ,
    $diagnoses: [String] ,
    $rc_scores: [String] ,
    $tumor_sizes: [String] ,
    $chemo_regimen: [String] ,
    $tumor_grades: [String] ,
    $er_status: [String] ,
    $pr_status: [String] ,
    $endo_therapies: [String] ,
    $meno_status: [String] ,
    $tissue_type: [String],
    $composition: [String],
    $association: [String],
    $file_type: [String],
    $age_at_index: [Float],
    $first: Int, 
    $offset: Int, 
    $order_by:  String
    $sort_direction: String ){
    sampleOverview(
        subject_ids: $subject_ids,
        sample_ids: $sample_ids,
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
    ){
        sample_id,
        subject_id,
        program,
        program_id,
        arm,
        diagnosis,
        tissue_type,
        tissue_composition,
        sample_anatomic_site,
        sample_procurement_method,
        platform,
        files 
    }
}
`;*/

export const GET_SUBJECTS_OVERVIEW_QUERY = gql`
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

export const GET_ALL_FILEIDS_SUBJECTSTAB_FOR_SELECT_ALL = gql`
query search (          
  $subject_ids: [String],
){
  fileIDsFromList (          
      subject_ids: $subject_ids,
  ) 
}
  `;
/*NOTE: UNUSED TAB
export const GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL = gql`
query search (          
  $sample_ids: [String],
){
  fileIDsFromList (          
    sample_ids: $sample_ids,
  ) 
}
  `;
*/
export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query search (          
  $file_names: [String] 
){
  fileIDsFromList (          
      file_names: $file_names
  ) 
}
  `;

export const GET_ALL_FILEIDS_FROM_SUBJECTSTAB_FOR_ADD_ALL_CART = gql`
query subjectsAddAllToCart(
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
  $order_by: String = "file_id",
  $sort_direction: String = "asc",
  $first: Int,
  $offset: Int= 0
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
      files
  }
}
    `;
/*NOTE: UNUSED TAB
export const GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART = gql`
    query samplesAddAllToCart(
      $subject_ids: [String],
      $sample_ids: [String],
      $programs: [String] ,
      $studies: [String] ,
      $diagnoses: [String] ,
      $rc_scores: [String] ,
      $tumor_sizes: [String] ,
      $chemo_regimen: [String] ,
      $tumor_grades: [String] ,
      $er_status: [String] ,
      $pr_status: [String] ,
      $endo_therapies: [String] ,
      $meno_status: [String] ,
      $tissue_type: [String],
      $composition: [String],
      $association: [String],
      $file_type: [String],
      $age_at_index: [Float],
      $first: Int,
      $offset: Int= 0, 
      $order_by: String = "file_id",
      $sort_direction: String = "asc" ){
      sampleOverview(
          subject_ids: $subject_ids,
          sample_ids: $sample_ids,
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
          files
      }
    }
        `;
*/
export const GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART = gql`
query fileAddAllToCart(
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
  $first: Int,
  $offset: Int= 0, 
  $order_by: String = "file_id",
  $sort_direction: String = "asc"
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
      file_id,
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
  /* NOTE: UNUSED QUERY
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
  }`;*/

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {
    name: 'Subjects',
    dataField: 'dataCase',
    api: GET_SUBJECTS_OVERVIEW_QUERY,
    paginationAPIField: 'subjectOverview',
    count: 'numberOfSubjects',
    dataKey: 'subject_id',
    defaultSortField: 'subject_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    tableID: 'case_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'subject_id',
        header: 'Subject ID',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/subject',
          pathParams: ['subject_id'],
        },
        display: true,
        tooltipText: 'sort',
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
      {
        dataField: 'stage_at_entry',
        header: 'Stage at Entry',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'cause_of_death',
        header: 'Cause of Death',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'sites_of_disease_at_autopsy',
        header: 'Sites of Disease at Autopsy',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'source_of_the_lab_data',
        header: 'Source of the Lab Data',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'lab_test',
        header: 'Lab Test',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'system_organ_class',
        header: 'System Organ Class',
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
      {
        dataField: 'outcome',
        header: 'Outcome',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },/* NOTE UNUSED COLUMNS 
      {
        dataField: 'program',
        header: 'Program Code',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/program',
          pathParams: ['program_id'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_acronym',
        header: 'Arm',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/arm',
          pathParams: ['study_acronym'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'recurrence_score',
        header: 'Recurrence Score',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'tumor_size',
        header: 'Tumor Size (cm)',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'er_status',
        header: 'ER Status',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'pr_status',
        header: 'PR Status',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'age_at_index',
        header: 'Age (years)',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'survival_time',
        header: 'Survival (days)',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
        cellType: cellTypes.CUSTOM_ELEM,
        displayEmpty: false,
      },*/
    ],
    id: 'case_tab',
    tableID: 'case_tab_table',
    tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'GMB_Dashboard_cases_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'subject_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['subjectOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_SUBJECTSTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_SUBJECTSTAB_FOR_SELECT_ALL,
  },
  /* NOTE: UNUSED TAB
  {
    name: 'Samples',
    dataField: 'dataSample',
    api: GET_SAMPLES_OVERVIEW_QUERY,
    count: 'numberOfSamples',
    paginationAPIField: 'sampleOverview',
    dataKey: 'sample_id',
    defaultSortField: 'sample_id',
    defaultSortDirection: 'asc',
    tableID: 'sample_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#00AEEF',
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
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        display: true,
        tooltipText: 'sort',
      },
      {
        dataField: 'subject_id',
        header: 'Case ID',
        link: '/subject/{subject_id}',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/subject',
          pathParams: ['subject_id'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'program',
        header: 'Program Code',
        cellType: cellTypes.LINK,
        tooltipText: 'sort',
        linkAttr : {
          rootPath: '/program',
          pathParams: ['program_id'],
        },
        display: true,
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        display: false,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        link: '/arm/{arm}',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/arm',
          pathParams: ['arm'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
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
        dataField: 'tissue_composition',
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
        dataField: 'sample_procurement_method',
        header: 'Sample Procurement Method',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'platform',
        header: 'platform',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'sample_tab',
    tableID: 'sample_tab_table',
    tabIndex: '1',
    tableDownloadCSV: customSamplesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'sample_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['sampleOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL,
  },*/
  {
    name: 'Files',
    dataField: 'dataFile',
    api: GET_FILES_OVERVIEW_QUERY,
    paginationAPIField: 'fileOverview',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    dataKey: 'file_name',
    tableID: 'file_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        display: true,
        tooltipText: 'sort',
      },/* NOTE: UNUSED COLUMNS
      {
        dataField: 'file_id',
        header: 'File ID',
        display: false,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'association',
        header: 'Association',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },*/
      {
        dataField: 'file_description',
        header: 'Description',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_format',
        header: 'File Format',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'acl', // This need to left empty if no data need to be displayed before file download icon
        header: 'Access',
        display: true,
        cellType: cellTypes.CUSTOM_ELEM,
        downloadDocument: true, // To indicate that column is document donwload
        documentDownloadProps: {
          // Max file size needs to bin Bytes to seperate two support file preview and download
          maxFileSize: 315,
          // Tool top text for Unauthenticated users
          toolTipTextUnauthenticated: 'Controlled access file',
          // Tool top text for file download
          toolTipTextFileDownload: 'Download a copy of this file',
          // Tool top text for file preview
          toolTipTextFilePreview: 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
          // datafield where file file column exists in the table
          fileSizeColumn: 'file_size',
          // datafield where file file id exists in the table which is used to get file location
          fileLocationColumn: 'file_id',
          // datafield where file format exists in the table
          fileFormatColumn: 'file_format',
          // datafield where file case id exists in the table which is used to get file information
          caseIdColumn: 'subject_id',
          // Unauthenticated lock icon
          iconUnauthenticated: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Access_Lock.svg',
          // file download icon
          iconFileDownload: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadPDF.svg',
          // file preview icon
          iconFilePreview: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadCloud.svg',
          // file viewer icon JBrowse
          iconFileViewer: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadBAM.svg',
        },
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_size',
        header: 'Size',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
        dataFormatType: dataFormatTypes.FORMAT_BYTES,
        cellType: cellTypes.FORMAT_DATA,
      },
      {
        dataField: 'file_type',
        header: 'Type',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },/* NOTE: UNUSED COLUMN
      {
        dataField: 'program',
        header: 'Program Code',
        link: '/program/{program_id}',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/program',
          pathParams: ['program_id'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        display: false,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        link: '/arm/{arm}',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/arm',
          pathParams: ['arm'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'subject_id',
        header: 'Case ID',
        link: '/subject/{subject_id}',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/subject',
          pathParams: ['subject_id'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        display: false,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },*/
    ],
    id: 'file_tab',
    tableID: 'file_tab_table',
    selectableRows: true,
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'GMB_Dashboard_files_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'file_names',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['fileOverview', 'file_id'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL,
  },
];

  