import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { UserPreferencesTypes, UserPreferencesState } from './types';

import {DEFAULT_COUNTRY_CODE, DEFAULT_COUNTRY_NAME, DEFAULT_COUNTRY_FLAG} from '@env';

interface RootState {
  userPreferences: UserPreferencesState;
}

export const userPreferencesTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: UserPreferencesState = {
  country: {
    code: DEFAULT_COUNTRY_CODE,
    name: DEFAULT_COUNTRY_NAME,
    flag: DEFAULT_COUNTRY_FLAG,
  }
};

export default function userPreferences(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case UserPreferencesTypes.UPDATE_COUNTRY_REQUEST: {
            draft.country = action.payload.country;
            break;
        }
      default:
        break;
    }
  });
}
