import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getBookmarks = createSelector(getState, state => state.recipes);