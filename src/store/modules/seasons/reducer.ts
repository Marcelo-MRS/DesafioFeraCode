import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { SeasonTypes, SeasonState } from './types';

interface RootState {
  seasons: SeasonState;
}

export const seasonsTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: SeasonState ={
  seasons: [],
  loading: false,
};

export default function seasons(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case SeasonTypes.SEASON_REQUEST: {
          draft.loading = true;
          break;
        }
        case SeasonTypes.SEASON_REQUEST_SUCCESS: {
          draft.seasons = action.payload.source;
          draft.loading = false;
          break;
        }
        case SeasonTypes.SEASON_REQUEST_SUCCESS: {
          draft.seasons = action.payload.source;
          draft.loading = false;
          break;
        }
      default:
        break;
    }
  });
}
