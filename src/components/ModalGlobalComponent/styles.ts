import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Cover = styled.View`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
    padding: 20px;
    justify-content: center;
    top: 20%;
`;

export const ModalContent = styled.View.attrs(() => ({
    styles: {elevation: 3}
}))`
    padding: 20px;
    background-color: ${props => props.theme.secundary};
    border-radius: 10px;
    elevation: 10;
    max-height: ${`${Dimensions.get('screen').height * 0.5}px`};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export const CloseButton = styled.TouchableOpacity.attrs(() => ({
    styles: {elevation: 3}
}))`
    background-color: ${props => props.theme.highlight};
    position: absolute;
    padding: 5px;
    border-radius: 20px;
    top: -20px;
    right: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export const CloseIcon = styled(Icon).attrs((props) => ({
    color: props.theme.text
}))``;