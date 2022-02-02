import styled from 'styled-components/native';
import {lighten} from 'polished';

interface ContainerProps {
    btnColor?: string;
    disabled?: boolean;
}

interface ButtonTextProps {
    txtColor?: string;
    disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background-color: ${props => props.disabled ? lighten(0.3, props.btnColor || '#fff') : props.btnColor};
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
    elevation: 3;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
    color: ${props => props.txtColor};
    font-size: 17px;
    font-weight: bold;
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const Loading = styled.ActivityIndicator`
`;