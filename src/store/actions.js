import {
  SET_COCKTAILS,
  SET_FILTERS,
  // PLUS_COUNT_PAGE,
  SET_SELECTED_FILTERS,
} from './mutations'

// const actions
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_FILTERS = 'FETCH_FILTERS';
export const APPLY_FILTERS = 'SELECT_FILTERS';

export default {
  [FETCH_COCKTAILS]: ({ commit, state }) => {
    if (state.countPage === state.selected.length) return;
    
    const filter = state.selected[state.countPage];
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
      .then(data => data.json())
      .then(data => {
        commit(SET_COCKTAILS, {filterName: filter, drinks: data.drinks});
      })
  },
  [FETCH_FILTERS]: ({ commit, dispatch }) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(data => data.json())
      .then(data => {
        commit(SET_FILTERS, data.drinks);
        dispatch(FETCH_COCKTAILS);
      })
  },
  [APPLY_FILTERS]: ({ commit, dispatch }, selectedFilters) => {
    commit(SET_SELECTED_FILTERS, selectedFilters);
    dispatch(FETCH_COCKTAILS);
  }
};

