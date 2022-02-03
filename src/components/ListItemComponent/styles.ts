import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import {rgba} from 'polished';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom-width: ${`${StyleSheet.hairlineWidth}px`};
    border-bottom-color: ${props => rgba(props.theme.text, 0.5)};
`;

export const ItemText = styled.Text`
    color: ${props => props.theme.text};
    font-size: 18px;
`;

export const ItemImage = styled(SvgCssUri).attrs(() => ({
    width: 35,
    height: 35,
}))`
    margin-right: 20px;
`;