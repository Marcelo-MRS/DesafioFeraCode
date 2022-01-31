import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
    border: 0.5px #DBDBDB;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-Bottom: 10px;
`;

export const ItemText = styled.Text`
    color: #282828;
    font-size: 15px;
    text-align: center;
`;

export const ItemImage = styled.Image`
    height: 50px;
    width: 50px;
`;