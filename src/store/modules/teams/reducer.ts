import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import { TeamsTypes, TeamsState } from './types';

interface RootState {
  teams: TeamsState;
}

export const teamsTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: TeamsState ={
  teams: [],
  loading: false,
};

export default function teams(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case TeamsTypes.TEAMS_REQUEST: {
          draft.loading = true;
          break;
        }
        case TeamsTypes.TEAMS_REQUEST_SUCCESS: {
          draft.teams = action.payload.source;
          draft.loading = false;
          break;
        }
        case TeamsTypes.TEAMS_REQUEST_SUCCESS: {
          draft.teams = action.payload.source;
          draft.loading = false;
          break;
        }
      default:
        break;
    }
  });
}
