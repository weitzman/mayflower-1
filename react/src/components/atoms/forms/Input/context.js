import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const InputContext = React.createContext({
  value: null,
  updateState: () => {},
  showError: null
});
