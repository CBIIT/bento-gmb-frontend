import gql from 'graphql-tag';
import { NODE_LEVEL_ACCESS } from './siteWideConfig';
import custodianUtils from '../utils/custodianUtilFuncs';

export const pageTitle = 'Data Access Request';

/*
  "levelDetails" variable is used to get accessControlLevel related data
  from GET_ACCESS_CONTROL_LEVEL_DETAILS_QUERY's response object.

  using the custodialUtils file to process the node_label
  since it must be restricted to 30 characters
  and there is a chance a developer/user has entered more than 30 characters.
*/
export const acl = 'Arms';
export const aclAPIOptionsField = 'listArms';

export const formFields = [
  {
    id: 'firstName',
    type: 'textBox',
    required: true,
    label: 'First Name',
    placeHolder: 'First Name',
    display: true,
  },
  {
    id: 'lastName',
    type: 'textBox',
    required: true,
    label: 'Last Name',
    placeHolder: 'Last Name',
    display: true,
  },
  {
    id: 'organization',
    type: 'textBox',
    required: true,
    label: 'Organization/Institution',
    placeHolder: 'Organization/Institution',
    display: true,
  },
  {
    id: 'armIDs',
    type: 'aclDropdown',
    required: true,
    label: custodianUtils.getNodeLevelLabel(),
    placeHolder: custodianUtils.getNodeLevelLabel(),
    multiple: true,
    display: NODE_LEVEL_ACCESS,
    optionsAPIField: aclAPIOptionsField,
    options: [
      {
        id: '70d6a94f-7348-5c0a-ace4-7890d1292210',
        name: 'Prostate Cancer Natural History',
      }
    ],
  },
];

export const SUBMIT_REQUEST_ACCESS = gql`
mutation requestAccess($userInfo: RequestAccessInput!) {
  requestAccess(userInfo: $userInfo) {
    firstName
    lastName
    organization
    acl {
      armID
      armName
      accessStatus
      requestDate
      reviewAdminName
      reviewDate
      comment
    }
  }
}`;

export const GET_ACCESS_CONTROL_LEVEL_DETAILS_QUERY = gql`
query listArms {
  listArms{
        id,
        name
}
getMyUser {
    firstName
    lastName
    organization
    userID
    email
    IDP
    role
    userStatus
    creationDate
    editDate
    acl {
      armID
      armName
      accessStatus
      requestDate
      reviewAdminName
      reviewDate
      comment
    }
  }
}`;

export default null;
