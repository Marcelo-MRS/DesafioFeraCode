import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-Bottom: 10px;
    background-color: ${props => props.theme.tertiary};
`;

export const ItemText = styled.Text`
    color: ${props => props.theme.text};
    font-size: 15px;
    text-align: center;
`;

export const ItemImage = styled.Image`
    height: 50px;
    width: 50px;
`;