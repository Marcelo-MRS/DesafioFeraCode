import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { CountryTypes, CountryState } from './types';

interface RootState {
  countries: CountryState;
}

export const countriesTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: CountryState ={
  countries: [],
  loading: false,
};

export default function countries(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case CountryTypes.COUNTRIES_REQUEST: {
          draft.loading = true;
          break;
        }
        case CountryTypes.COUNTRIES_REQUEST_SUCCESS: {
          draft.countries = action.payload.source;
          draft.loading = false;
          break;
        }
        case CountryTypes.COUNTRIES_REQUEST_SUCCESS: {
          draft.countries = action.payload.source;
          draft.loading = false;
          break;
        }
      default:
        break;
    }
  });
}
