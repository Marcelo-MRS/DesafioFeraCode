import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Cover = styled.View`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
`;

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
    padding: 20px;
    justify-content: center;
    top: 20%;
`;

export const ModalContent = styled.View`
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    elevation: 10;
    max-height: ${`${Dimensions.get('screen').height * 0.5}px`};
`;