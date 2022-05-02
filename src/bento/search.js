import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
export const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

export const SEARCH = gql`
    query globalSearch($input: String){
        globalSearch(input: $input) {
            trials {
                clinical_trial_id
            }
            subjects {
                subject_id
            }
            files {
                file_id
            }
            model {
                node_name
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_TRIAL = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            trials {
                clinical_trial_id
                clinical_trial_short_name
                clinical_trial_long_name
                clinical_trial_description
                clinical_trial_type
                type: __typename
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_SUBJECTS = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            subjects {
                subject_id
                type: __typename
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_FILES = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            files {
                file_id
                file_name
                file_description
                type: __typename
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_MODEL = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            model {
                type
                node_name
                property_name
                property_description
                property_required
                property_type
                value
                highlight
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_ABOUT = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {

            about_page {
                page
                title
                type
                text
            }
        }
    }
`;

export const SEARCH_PAGE_RESULTS = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            trial_count
            subject_count
            file_count
            model_count
            about_count
        }
    }
`;
