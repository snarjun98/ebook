import { createSelector } from 'reselect';


const selectDirectory= state =>state.directory;

export const selectDirectorySetions = createSelector(
    [selectDirectory],
    directory =>directory.section
);