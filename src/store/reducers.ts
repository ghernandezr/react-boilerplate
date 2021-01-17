/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { intlReducer } from 'react-intl-redux';

// import { reducer as languageProviderReducer } from 'containers/LanguageProvider/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // language: languageProviderReducer,
    intl: intlReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
