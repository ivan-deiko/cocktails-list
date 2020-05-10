// const mutations 
export const SET_COCKTAILS = 'SET_COCKTAILS';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';
export const PLUS_COUNT_PAGE = 'PLUS_COUNT_PAGE';

export default {
  [SET_COCKTAILS]: (state, payload) => {
    state.countPage = state.countPage + 1;
    state.cocktails = state.cocktails ? {...state.cocktails, [payload.filterName]: payload.drinks} : {[payload.filterName]: payload.drinks};
  },
  [SET_FILTERS]: (state, payload) => {
    state.filters = payload;
    state.selected = payload.map(item => item.strCategory);
  },
  [PLUS_COUNT_PAGE]: state => state.countPage = ++state.countPage,
  [SET_SELECTED_FILTERS]: (state, payload) => {
    state.countPage = 0;
    state.selected = payload;
    state.cocktails = null;
  },
}