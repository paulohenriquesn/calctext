import produce from 'immer'

const INITIAL_STATE = {
  total: 0,
}

const Global = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TOTAL': {
      return produce(state, (draft) => {
        draft.total = action.total;
      })
    }
    default:
      return state;
  }
}

export default Global;