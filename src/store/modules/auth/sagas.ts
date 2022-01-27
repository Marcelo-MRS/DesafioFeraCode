import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { AuthTypes, Auth } from './types';
import {Api, SnackBarService} from '~/service';


interface Props {
  payload: Auth;
}

export function* login({payload}: any) {
    try {
      const {username, password}= payload;
      const { data } = yield call(Api.get, '/standings', {params: { username, password}});
      console.tron.log('response', data)
    } catch (error) {
    }
}


export default all ([takeLatest(AuthTypes.LOGIN_REQUEST, login),]);
