import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
`;
export const TextContainer = styled.View`
    flex-direction: row;
    padding: 20px;
`;

export const LeagueName = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: ${props => props.theme.text};
`;

export const LeagueImage = styled.Image`
    margin-top: 20px;
    height: 100px;
    width: 100px;
`;

