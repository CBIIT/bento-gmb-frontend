import gql from 'graphql-tag';
import { customMyFilesTabDownloadCSV } from './tableDownloadCSV';

export const navBarCartData = {
  cartLabel: 'Cart',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
};

// --------------- Files limit configuration --------------
export const alertMessage = 'The cart is limited to 1000 files. Please narrow the search criteria or remove some files from the cart to add more.';
export const maximumNumberOfFilesAllowedInTheCart = 1000;

export const myFilesPageData = {
  mainTitle: 'Cart >',
  subTitle: 'Selected Files',
  downButtonText: 'DOWNLOAD MANIFEST',
  headerIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Workflow.svg',
  headerIconAlt: 'Bento MyFiles header logo',
  manifestFileName: 'BENTO File Manifest',
  tooltipIcon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  tooltipAlt: 'tooltip icon',
  tooltipMessage: 'To access and analyze files: select and remove unwanted files,  click the “Download Manifest” button, and upload the resulting Manifest file to your Seven Bridges Genomics account.',
  textareaPlaceholder: 'Please add a description for the XML file you are about to download.',
  errorMessage: 'An error has occurred in loading CART',
  popUpWindow: {
    showNumberOfFileBeRemoved: true,
    messagePart1: 'Remove ',
    messagePart2: 'All files (',
    messagePart3: ') ',
    messagePart4: 'From Cart',
    okButtonText: 'Ok',
    cancelButtonText: 'Cancel',
  },
};

export const manifestData = {
  keysToInclude: ['study_code', 'subject_id', 'file_name', 'file_id', 'md5sum'],
  header: ['Study Code', 'Case ID', 'File Name', 'File ID', 'Md5sum', 'User Comments'],
};

// --------------- File table configuration --------------

export const table = {
  dataField: 'filesInList',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  viewColumns: true,
  tableDownloadCSV: customMyFilesTabDownloadCSV,

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
      link: '/subjects/{subject_id}',
      display: true,
    },
    {
      dataField: 'file_description',
      header: 'Description',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'file_format',
      header: 'File Format',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'file_size',
      header: 'Size',
      sort: 'asc',
      display: true,
      formatBytes: true,
    },
    {
      dataField: 'file_type',
      header: 'File Type',
      sort: 'asc',
      primary: true,
      display: true,
    },
    {
      dataField: 'file_id',
      header: 'UUID',
      display: false,
    },
    {
      dataField: 'md5sum',
      header: 'Md5Sum',
      display: false,
    },
  ],
};

// --------------- GraphQL query - Retrieve selected cases info --------------
export const GET_MY_CART_DATA_QUERY = gql`
query filesInList($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="") {
    filesInList(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
        subject_id
        file_name
        file_type
        file_description
        file_format
        file_size
        file_id
        md5sum
    }
}`;

// --------------- GraphQL query - Retrieve selected files info Desc --------------
export const GET_MY_CART_DATA_QUERY_DESC = gql`
query filesInListDesc($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="") {
  filesInListDesc(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
        subject_id
        file_name
        file_type
        file_description
        file_format
        file_size
        file_id
        md5sum
    }
}`;
