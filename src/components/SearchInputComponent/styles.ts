import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {rgba} from 'polished';

export const Container = styled.View`
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: rgba(props.theme.text, 0.5),
    selectionColor: rgba(props.theme.text, 0.5)
}))`
    padding: 8px;
    border-radius: 5px;
    font-size: 18px;
    background-color: ${props => props.theme.tertiary};
    margin-bottom: 20px;
    height: 40px;
    color: ${props => props.theme.text}
`;

export const IconContainer = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    right: 10px;
`;

export const SearchIcon = styled(Icon).attrs((props) => ({
    size: 24,
    color: `${rgba(props.theme.text, 0.5)}`
}))``;