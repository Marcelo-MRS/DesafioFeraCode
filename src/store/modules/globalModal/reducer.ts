import { useSelector, TypedUseSelectorHook } from 'react-redux';

import produce, { enableES5 } from 'immer';
import {GlobalModalState, GlobalModalTypes} from './types';

interface RootState {
  globalModal: GlobalModalState;
}

export const globalModalTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const INITIAL_STATE: GlobalModalState = {
  modalParams: {
      visible: false,
      content: null,
      cover: true,
  }
};

export default function modalGlobal(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
        case GlobalModalTypes.OPEN_REQUEST: {
            draft.modalParams = {...draft.modalParams, ...action.payload, visible: true};
            break;
        }
        case GlobalModalTypes.CLOSE_REQUEST: {
            draft.modalParams = INITIAL_STATE.modalParams;
            break;
        }
      default:
        break;
    }
  });
}