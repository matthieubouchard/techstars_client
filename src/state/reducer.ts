import {
  FETCHING,
  SUCCESS,
  ERROR,
  SET_SELECTED_DETAIL_ITEM,
  SET_COMPANIES,
  SET_FOUNDERS,
  SET_SUCCESS,
} from './actionTypes'
import { ApplicationState, ReducerAction } from '../types/types'

export const setStateToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStateFromLocalStorage = (key: string, defaultValue: any | null) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : defaultValue
}

export const initialState: ApplicationState = {
  companies: [],
  founders: [],
  selectedDetailItem: null,
  status: null,
  user: getStateFromLocalStorage('USER', null),
}

const reducer = (state: ApplicationState, action: ReducerAction) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        status: FETCHING,
      }
    case ERROR:
      return {
        ...state,
        status: ERROR,
        response: action.payload,
      }
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
        status: SUCCESS,
      }
    case SET_FOUNDERS:
      return {
        ...state,
        companies: action.payload,
        status: SUCCESS,
      }
    case SET_SUCCESS:
      return {
        ...state,
        status: SUCCESS,
      }
    case SET_SELECTED_DETAIL_ITEM:
      return {
        ...state,
        selectedDetailItem: action.payload,
        status: SUCCESS,
      }
    // case SET_USER:
    //   setStateToLocalStorage('USER', action.payload)

    //   return {
    //     ...state,
    //     user: action.payload,
    //     status: SUCCESS,
    //   }
    default:
      return state
  }
}

export default reducer
