/**
 * Action types
 */

 export enum GlobalModalTypes {
    OPEN_REQUEST = '@globalModal/OPEN_REQUEST',
    CLOSE_REQUEST = '@globalModal/CLOSE_REQUEST'
}

/**
* Data Types
*/

export interface ModalParams {
    visible: boolean,
    content?: any,
    cover?: boolean,
}

/**
* State types
*/

export interface GlobalModalState {
    modalParams: ModalParams;
}