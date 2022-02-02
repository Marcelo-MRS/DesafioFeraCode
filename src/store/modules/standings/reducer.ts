import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { StandingsTypes, StandingsState } from './types';

interface RootState {
  standings: StandingsState;
}

export const standingsTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: StandingsState ={
  standings: [],
  loading: false,
};

export default function standings(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case StandingsTypes.STANDINGS_REQUEST: {
          draft.loading = true;
          break;
        }
        case StandingsTypes.STANDINGS_REQUEST_SUCCESS: {
          draft.standings = action.payload.source;
          draft.loading = false;
          break;
        }
        case StandingsTypes.STANDINGS_REQUEST_SUCCESS: {
          draft.standings = action.payload.source;
          draft.loading = false;
          break;
        }
      default:
        break;
    }
  });
}
