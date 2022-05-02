import React from 'react';
import CaseCard from './cards/subjectCard';
import FileCard from './cards/fileCard';
import TrialCard from './cards/trialCard';
import ValueCard from './cards/valueCard';
import AboutCard from './cards/aboutCard';

const Components = {
  GS_Subject: CaseCard,
  GS_File: FileCard,
  GS_Trial: TrialCard,
  node: ValueCard,
  value: ValueCard,
  about: AboutCard,
};

export default ({
  searchText, data, classes, index,
}) => {
  if (typeof Components[data.type] !== 'undefined') {
    return React.createElement(Components[data.type], {
      data, classes, index, searchText,
    });
  }
  return React.createElement(
    () => (
      <div>
        The component
        {' '}
        {data.type}
        {' '}
        has not been created yet.
      </div>
    ),
  );
};
