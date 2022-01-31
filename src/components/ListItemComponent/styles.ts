import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import { SvgUri } from 'react-native-svg';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom-width: ${`${StyleSheet.hairlineWidth}px`};
    border-bottom-color: #282828;
`;

export const ItemText = styled.Text`
    color: #282828;
    font-size: 18px;
`;

export const ItemImage = styled(SvgUri).attrs(() => ({
    width: 35,
    height: 35,
}))`
    margin-right: 20px;
`;