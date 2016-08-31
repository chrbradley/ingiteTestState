import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  a: null,
  b: null,
  c: null
})

// create testState
const create = (state, action) => {
  let { a, b, c } = action.data
  return state.merge({
    a,
    b,
    c
  })
}

// check state
const check = (state) =>
  state
// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.TESTSTATE_CREATE]: create,
  [Types.TESTSTATE_CHECK]: check
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
