import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { CountryTypes, Country } from './types';
import {Api, SnackBarService} from '~/service';
import {populateCountriesFailure, populateCountriesSuccess} from './action'
import { AxiosResponse } from 'axios';
import { populateLeaguesFailure } from '../leagues/action';


interface Props {
  payload: Country;
}

export function* getCountries({payload}: any) {
    try {
      const {name, code, search}= payload;
      const { data: {response} }=  yield call(Api.get, '/countries', {params: {name, code, search}});
      yield put (populateCountriesSuccess(response))
    } catch (error) {
      yield put (populateLeaguesFailure())
    }
}


export default all ([takeLatest(CountryTypes.COUNTRIES_REQUEST, getCountries),]);
