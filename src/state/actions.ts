import {
  SET_FOUNDERS,
  SET_COMPANIES,
  FETCHING,
  ERROR,
  SET_USER,
  SET_SELECTED_DETAIL_ITEM,
  SUCCESS,
} from './actionTypes'
import { User, Company, Founder } from '../types/types';

export const setCompanies = (companies: Company[]) => {
  return {
    type: SET_COMPANIES,
    payload: companies,
  }
}

export const setFounders = (founders: Founder[]) => {
  return {
    type: SET_COMPANIES,
    payload: founders,
  }
}

export const setSelectedDetailItem = (item: Company | Founder) => {
  return {
    type: SET_SELECTED_DETAIL_ITEM,
    payload: item,
  }
}

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    payload: user,
  }
}

export const fetching = () => ({ type: FETCHING })

export const setSuccess = () => ({ type: SUCCESS })

export const error = (response: any) => ({ type: ERROR, payload: response })
