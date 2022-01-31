import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { LeagueTypes, LeagueState } from './types';

interface RootState {
  leagues: LeagueState;
}

export const leaguesTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: LeagueState ={
  leagues: [],
  loading: false,
};

export default function leagues(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case LeagueTypes.LEAGUE_REQUEST: {
          draft.loading = true;
          break;
        }
        case LeagueTypes.LEAGUE_REQUEST_SUCCESS: {
          draft.leagues = action.payload.source;
          draft.loading = false;
          break;
        }
        case LeagueTypes.LEAGUE_REQUEST_SUCCESS: {
          draft.leagues = action.payload.source;
          draft.loading = false;
          break;
        }
      default:
        break;
    }
  });
}
