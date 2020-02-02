import {createSelector} from 'reselect';

export const selectRoot = state => state.products;

export const selectGet = createSelector(
  selectRoot,
  state => state.get
);

export const selectGetData = createSelector(
  selectGet,
  state => state.data || {}
);

export const selectProducts = createSelector(
  selectGetData,
  state => state.products || []
);
