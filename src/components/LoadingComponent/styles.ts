import styled from 'styled-components/native';

export const Cover = styled.View`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingBackground = styled.View.attrs(() => ({
    styles: {elevation: 3}
}))`
    background-color: ${props => props.theme.tertiary};
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

