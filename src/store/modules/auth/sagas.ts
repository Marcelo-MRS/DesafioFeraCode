import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { AuthTypes, Auth } from './types';


interface Props {
  payload: Auth;
}

export function* login({payload}: any) {
    try {
      // const { data } = yield call(AxiosService.post, '/autenticacao', {username, password});

    } catch (error) {
    }
}

export function* auth() {
  yield all ([takeLatest(AuthTypes.LOGIN_REQUEST, login),]);
}
export default  auth
