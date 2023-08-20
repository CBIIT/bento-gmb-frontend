/* eslint-disable import/prefer-default-export */
import { btnTypes, types } from '@bento-core/paginated-table';
import { GET_ALL_FILEIDS_SUBJECTSTAB_FOR_SELECT_ALL, GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL } from '../../../bento/dashboardTabData';

import { tables, tooltipContent } from '../../../bento/siteDetailData';

export const subjectWrapperConfig = [{
  container: 'buttons',
  size: 'xl',
  clsName: 'container_footer',
  section: tables[0].section,
  items: [
    {
      title: tables[0].buttonText,
      clsName: 'add_selected_button',
      type: types.BUTTON,
      role: btnTypes.ADD_SELECTED_FILES,
      btnType: btnTypes.ADD_SELECTED_FILES,
      tooltipCofig: tooltipContent,
      conditional: true,
      addFileQuery: GET_ALL_FILEIDS_SUBJECTSTAB_FOR_SELECT_ALL,
      dataKey: 'subject_ids',
      responseKeys: ['fileIDsFromList'],
    }],
}];

export const fileWrapperConfig = [{
  container: 'buttons',
  size: 'xl',
  clsName: 'container_footer',
  section: tables[0].section,
  items: [
    {
      title: tables[0].buttonText,
      clsName: 'add_selected_button',
      type: types.BUTTON,
      role: btnTypes.ADD_SELECTED_FILES,
      btnType: btnTypes.ADD_SELECTED_FILES,
      tooltipCofig: tooltipContent,
      conditional: true,
      addFileQuery: GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL,
      dataKey: 'file_names',
      responseKeys: ['fileIDsFromList'],
    }],
}];