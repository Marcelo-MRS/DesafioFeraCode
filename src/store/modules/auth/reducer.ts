import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { AuthTypes, AuthState } from './types';

interface RootState {
  auth: AuthState;
}

export const authTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: AuthState ={
  usuario: '',
  senha: '',
  loading: false,
};

export default function auth(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case AuthTypes.LOGIN_REQUEST: {
          draft.loading = true;
          break;
        }
      default:
        break;
    }
  });
}
