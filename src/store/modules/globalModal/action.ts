import { action } from 'typesafe-actions';

import {GlobalModalTypes} from './types';

interface ModalProperties {
    content?: any;
    cover?: boolean;
}

export const openModal = (modalProperties: ModalProperties) =>
  action(GlobalModalTypes.OPEN_REQUEST, modalProperties);

export const closeModal = () =>
  action(GlobalModalTypes.CLOSE_REQUEST);
