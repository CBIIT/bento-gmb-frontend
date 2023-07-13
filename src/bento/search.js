import gql from 'graphql-tag';
import client from '../utils/graphqlClient';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
export const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

/** certain search data items */
/** used by the Global Search header autocomplete */
export const SEARCH_KEYS = {
  public: [],
  private: ['subjects', 'files', 'trials', 'sites'],
};

export const SEARCH_DATAFIELDS = {
  public: [],
  private: ['subject_id', 'file_id', 'clinical_trial_id', 'site_id'],
};

/** used by the Global Search page results */
export const SEARCH_PAGE_KEYS = {
  private: [...SEARCH_KEYS.private, 'model'],
  public: [],
};

export const SEARCH_PAGE_DATAFIELDS = {
  public: [],
  private: [...SEARCH_DATAFIELDS.private, 'node_name'],
};

/** Public search queries */
export const SEARCH_PUBLIC = gql`
    query publicGlobalSearchQuery($input: String) {
        publicGlobalSearch(input: $input) {
            subject_count
            file_count
            trial_count
            site_count
            model_count
            about_count
            about_page{
                page
                title
                type
                text
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_ABOUT_PUBLIC = gql`
    query publicGlobalSearch($input: String, $first: Int, $offset: Int){
        publicGlobalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            about_page {
                type
                text
                page
                title
            }
        }
    }
`;

export const SEARCH_PAGE_RESULTS_PUBLIC = gql`
    query publicGlobalSearch($input: String, $first: Int, $offset: Int){
        publicGlobalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            subject_count
            file_count
            trial_count
            site_count
            model_count
            about_count
        }
    }
`;

/** End of public searches */

export const SEARCH = gql`
    query globalSearch($input: String){
        globalSearch(input: $input) {
            subjects {
                subject_id
            }
            files {
                file_id
            }
            trials {
                clinical_trial_id
            }
            sites {
                site_id
            }
            model {
                node_name
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
                registering_institution
                disease_term
                clinical_trial_id
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
                clinical_trial_id
                subject_id
                file_format
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_TRIALS = gql`
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
            }
        }
    }
`;

export const SEARCH_PAGE_RESULT_SITES = gql`
    query globalSearch($input: String, $first: Int, $offset: Int){
        globalSearch(
            input: $input
            first: $first
            offset: $offset
        ) {
            sites {
                site_id
                site_name
                site_address
                site_status
                clinical_trial_id
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
                type
                text
                page
                title
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
            subject_count
            file_count
            trial_count
            site_count
            model_count
            about_count
        }
    }
`;

/**
 * Maps a datafield to the correct search query
 *
 * @param {string} field datatable field name
 * @param {boolean} isPublic whether the search is public or not
 */
export function getResultQueryByField(field, isPublic) {
  switch (field) {
    case 'all':
      return isPublic ? SEARCH_PUBLIC : SEARCH_PAGE_RESULT_SUBJECTS;
    case 'subjects':
      return SEARCH_PAGE_RESULT_SUBJECTS;
    case 'files':
      return SEARCH_PAGE_RESULT_FILES;
    case 'trials':
      return SEARCH_PAGE_RESULT_TRIALS;
    case 'sites':
      return SEARCH_PAGE_RESULT_SITES;
    case 'model':
      return SEARCH_PAGE_RESULT_MODEL;
    case 'about_page':
      return isPublic ? SEARCH_PAGE_RESULT_ABOUT_PUBLIC : SEARCH_PAGE_RESULT_ABOUT;
    default:
      return SEARCH_PAGE_RESULT_SUBJECTS;
  }
}

/**
 * Query the backend API for autocomplete results
 *
 * @param {object} inputValue search text
 * @param {boolean} isPublic is the search public or private
 */
export async function queryAutocompleteAPI(inputValue, isPublic) {
  const data = await client.query({
    query: isPublic ? SEARCH_PUBLIC : SEARCH,
    variables: {
      input: inputValue,
    },
    context: {
      clientName: isPublic ? 'publicService' : '',
    },
  })
    .then((result) => (isPublic ? result.data.publicGlobalSearch : result.data.globalSearch))
    .catch(() => []);

  return data;
}

/**
 * Query the backend API for the search result counts by search string
 *
 * @param {string} inputValue search text
 * @param {boolean} isPublic whether to use the public service or not
 */
export async function queryCountAPI(inputValue, isPublic) {
  const data = await client.query({
    query: isPublic ? SEARCH_PAGE_RESULTS_PUBLIC : SEARCH_PAGE_RESULTS,
    variables: {
      input: inputValue,
    },
    context: {
      clientName: isPublic ? 'publicService' : '',
    },
  })
    .then((result) => (isPublic ? result.data.publicGlobalSearch : result.data.globalSearch))
    .catch(() => {});

  return data;
}

/**
 * Query the backend API for the search results by datafield
 *
 * @param {string} datafield
 * @param {object} input search query variable input
 * @param {boolean} isPublic is the search public or private
 */
export async function queryResultAPI(datafield, input, isPublic) {
  const data = await client.query({
    query: getResultQueryByField(datafield, isPublic),
    variables: input,
    context: {
      clientName: isPublic ? 'publicService' : '',
    },
  })
    .then((result) => (isPublic ? result.data.publicGlobalSearch : result.data.globalSearch))
    .catch(() => []);

  return data[datafield] || [];
}
