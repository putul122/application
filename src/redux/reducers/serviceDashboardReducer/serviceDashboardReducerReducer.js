import { createAction, handleActions } from 'redux-actions'
import { FETCH_CLIENT_ACCESS_TOKEN_SUCCESS, FETCH_USER_AUTHENTICATION_SUCCESS, UPDATE_NOTIFICATION_VIEW_STATUS_SUCCESS, FETCH_PACKAGE_SUCCESS } from '../../sagas/basic/basicSaga'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
const SET_TABLE_OPEN_STATUS = 'BasicReducer/SET_TABLE_OPEN_STATUS'
const SET_MODAL_OPEN_STATUS = 'BasicReducer/SET_MODAL_OPEN_STATUS'
const SET_QUICKSLIDE_FLAG = 'BasicReducer/SET_QUICKSLIDE_FLAG'
const SET_NOTIFICATION_FLAG = 'BasicReducer/SET_NOTIFICATION_FLAG'
const SET_LOGINSLIDE_FLAG = 'BasicReducer/SET_LOGINSLIDE_FLAG'
const RESET_NOTIFICATION_RESPONSE = 'BasicReducer/RESET_NOTIFICATION_RESPONSE'
const TOGGLE_FLIPIN_X = 'BasicReducer/TOGGLE_FLIPIN_X'
const SET_API_CALLING_STATUS = 'BasicReducer/SET_API_CALLING_STATUS'

export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_CLIENT_ACCESS_TOKEN_SUCCESS,
  FETCH_USER_AUTHENTICATION_SUCCESS,
  SET_TABLE_OPEN_STATUS,
  SET_MODAL_OPEN_STATUS,
  SET_QUICKSLIDE_FLAG,
  SET_LOGINSLIDE_FLAG,
  SET_NOTIFICATION_FLAG,
  RESET_NOTIFICATION_RESPONSE,
  FETCH_PACKAGE_SUCCESS,
  SET_API_CALLING_STATUS,
  TOGGLE_FLIPIN_X
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  setTableOpenStatus: createAction(SET_TABLE_OPEN_STATUS),
  setModalOpenStatus: createAction(SET_MODAL_OPEN_STATUS),
  setQuickslideFlag: createAction(SET_QUICKSLIDE_FLAG),
  setLoginslideFlag: createAction(SET_LOGINSLIDE_FLAG),
  setNotificationFlag: createAction(SET_NOTIFICATION_FLAG),
  resetNotificationResponse: createAction(RESET_NOTIFICATION_RESPONSE),
  setApiCallingStatus: createAction(SET_API_CALLING_STATUS),
  toggleFlipInX: createAction(TOGGLE_FLIPIN_X)
}

export const initialState = {
  serviceComponents: '',
}

export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      count: state.count + action.payload
    })
  },
  initialState
)
