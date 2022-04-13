import gql from 'graphql-tag';

// todo: fix the custom case download csvs

// tooltip configs
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

// tab containers
export const tabContainers = [
  {

    name: 'Cases',
    dataField: 'dataCase',
    api: 'GET_CASES_OVERVIEW_QUERY',
    paginationAPIField: 'subjectOverview',
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
        dataField: 'disease_term',
        header: 'Disease Term',
        sort: 'asc',
        display: true,
      },
      // {
      //   dataField: 'registeringInstitution',
      //   header: 'Registering Institution',
      //   sort: 'asc',
      //   display: true,
      // },
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
      // {
      //   dataField: 'pathogenicity',
      //   header: 'Pathogenicity',
      //   sort: 'asc',
      //   display: true,
      // },
      // {
      //   dataField: 'germlinePathogenicity',
      //   header: 'Germline Pathogenicity',
      //   sort: 'asc',
      //   display: true,
      // },
    ],
    id: 'case_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'case_tab_table',
    selectableRows: true,
    // tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
  /* {
    name: 'Samples',
    dataField: 'dataSample',
    api: 'GET_SAMPLES_OVERVIEW_QUERY',
    count: 'numberOfSamples',
    paginationAPIField: 'sampleOverview',
    dataKey: 'sample_id',
    defaultSortField: 'sample_id',
    defaultSortDirection: 'asc',
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
        dataField: 'sample_id',
        header: 'Sample ID',
        sort: 'asc',
        primary: true,
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
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tissue_type',
        header: 'Tissue Type',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tissue_composition',
        header: 'Tissue Composition',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_anatomic_site',
        header: 'Sample Anatomic Site',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_procurement_method',
        header: 'Sample Procurement Method',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'platform',
        header: 'platform',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'sample_tab',
    onRowsSelect: 'type3',
    disableRowSelection: 'type2',
    buttonText: 'Add Selected Files',
    tableID: 'sample_tab_table',
    selectableRows: true,
    tabIndex: '1',
    // tableDownloadCSV: customSamplesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  }, */
  {
    name: 'Files',
    dataField: 'dataFile',
    api: 'GET_FILES_OVERVIEW_QUERY',
    paginationAPIField: 'fileOverview',
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
        display: false,
      },
      // {
      //   dataField: 'association',
      //   header: 'Association',
      //   sort: 'asc',
      //   display: true,
      // },
      {
        dataField: 'description',
        header: 'Description',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'fileFormat',
        header: 'File Format',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'size',
        header: 'Size',
        sort: 'asc',
        display: true,
        formatBytes: true,
      },
      {
        dataField: 'file_type',
        header: 'Type',
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
          maxFileSize: 315,
          // Tool top text for Unauthenticated users
          toolTipTextUnauthenticated: 'Login to access this file',
          // Tool top text for file download
          toolTipTextFileDownload: 'Download a copy of this file',
          // Tool top text for file preview
          toolTipTextFilePreview: 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
          // datafield where file file column exists in the table
          fileSizeColumn: 'size',
          // datafield where file file id exists in the table which is used to get file location
          fileLocationColumn: 'file_id',
          // datafield where file format exists in the table
          fileFormatColumn: 'fileFormat',
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
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,
    tabIndex: '1',
    // tableDownloadCSV: customFilesTabDownloadCSV, todo: fix the custom csv downloaders
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
];

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

export const DASHBOARD_QUERY = gql`
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
        $file_type: [String]) {
        searchSubjects(
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
            file_type: $file_type) {
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
        }}`;

export const GET_FILES_OVERVIEW_QUERY = gql`
    query fileOverview(
        $subject_id: [String],
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
        $sort_direction: String = "asc"
    ){
        fileOverview(
            subject_id:$subject_id,
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
        ) {
            file_name
            subject_id
            description
            file_format
            size
            file_type
        }
    }`;

export const GET_SAMPLES_OVERVIEW_QUERY = gql`query sampleOverview(
    $subject_ids: [String],
    $sample_ids: [String],
    $trials: [String] ,
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
        trials: $trials,
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
}`;

export const GET_CASES_OVERVIEW_QUERY = gql`
    query subjectOverview(
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
        $file_type: [String],
        $first: Int = 10,
        $offset: Int = 0,
        $sort_direction: String = "asc"
    ){
        subjectOverview(
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
            file_type: $file_type,
            offset: $offset,
            sort_direction: $sort_direction,
            first: $first
        ) {
            subject_id
            race
            disease_term
            #            registeringInstitution
            #            patientSubgroup
            stageAtEntry
            causeOfDeath
            sitesOfDiseaseAtAutopsy
            sourceOfTheLabData
            labTest
            systemOrganClass
            serious
            outcome
            #            somatic_pathogenicity
            #            germline_pathogenicity
            #            pathogenicity
            #            germlinePathogenicity
            #            files{
            #                file_id
            #            }
        }
    }`;

export const GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL = gql`
    query search (
        $subject_ids: [String],
    ){
        fileIDsFromList (
            subject_ids: $subject_ids,
        )
    }
`;

export const GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL = gql`
    query search (
        $sample_ids: [String],
    ){
        fileIDsFromList (
            sample_ids: $sample_ids,
        )
    }
`;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
    query search (
        $file_names: [String]
    ){
        fileIDsFromList (
            file_names: $file_names
        )
    }
`;

export const GET_ALL_FILEIDS_FROM_CASESTAB_FOR_ADD_ALL_CART = gql`
    query subjectsAddAllToCart(
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
        $file_type: [String],
        $first: Int = 10,
        $offset: Int = 0,
        $order_by: String = "file_id",
        $sort_direction: String = "asc"
    ){
        subjectOverview(
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
            file_type: $file_type,
            first: $first
            offset: $offset,
            order_by: $order_by,
            sort_direction: $sort_direction
        ) {
            files
        }
    }
`;

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
            first: $first,
            offset: $offset,
            order_by: $order_by,
            sort_direction: $sort_direction
        ) {
            files
        }
    }`;

export const GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART = gql`
    query fileAddAllToCart(
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
        $file_type: [String],
        $first: Int = 10,
        $offset: Int = 0,
        $order_by: String = "file_id",
        $sort_direction: String = "asc"
    ){
        fileOverview(
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
            file_type: $file_type,
            offset: $offset,
            sort_direction: $sort_direction,
            order_by: $order_by,
            first: $first
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

export const GET_FILE_IDS_FROM_FILE_NAME = gql`
    query (
        $file_name: [String],
        $order_by: String,
        $sort_direction: String="desc"
    )
    {
        fileIdsFromFileName(
            file_name:$file_name,
            offset:$offset,
            first:$first,
            order_by:$order_by,
            sort_direction: $sort_direction
        )
        {
            file_id
            file_name
        }
    }`;
