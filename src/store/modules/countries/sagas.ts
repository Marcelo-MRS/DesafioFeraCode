import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { CountryTypes, Country } from './types';
import {Api, SnackBarService} from '~/service';
import { AxiosResponse } from 'axios';
import {countriesActions, leaguesActions} from '~/store/modules'


interface Props {
  payload: Country;
}

export function* getCountries({payload}: any) {
    try {
      const {name, code, search}= payload;
      const { data: {response} }=  yield call(Api.get, '/countries', {params: {name, code, search}});
      yield put (countriesActions.populateCountriesSuccess(response))
    } catch (error) {
      yield put (leaguesActions.populateLeaguesFailure())
    }
}


export default all ([takeLatest(CountryTypes.COUNTRIES_REQUEST, getCountries),]);
