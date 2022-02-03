import styled from 'styled-components/native';
import {lighten, rgba} from 'polished';

interface ContainerProps {
    btnColor?: string;
    disabled?: boolean;
}

interface ButtonTextProps {
    txtColor?: string;
    disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background-color: ${props => 
        props.disabled ? lighten(0.3, props.btnColor || props.theme.tertiary) : (props.btnColor || props.theme.tertiary)
    };
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
    color: ${props => props.txtColor || props.theme.text};
    font-size: 17px;
    font-weight: bold;
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const Loading = styled.ActivityIndicator`
`;