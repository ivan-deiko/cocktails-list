export const FILTERS = 'FILTERS';
export const SELECTED_FILTERS = 'SELECTED_FILTERS'

export default {
  [FILTERS]: state => {
    if (!state.filters) return;
    return state.filters.map(({ strCategory }) => {
      return {
        name: strCategory,
        selected: state.selected.includes(strCategory),
      }
    })
  },
  [SELECTED_FILTERS]: state => {
    if (!state.selected) return;
    let test = [...state.selected].splice(0, state.countPage ? state.countPage : 1);
    return test
  }
};