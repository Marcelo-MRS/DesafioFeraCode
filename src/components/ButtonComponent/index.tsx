import React from 'react';

import { Container, ButtonText, Loading } from './styles';

interface ButtonComponentProps {
    text?: string;
    onPress?: () => void;
    disabled?: boolean;
    btnColor?: string;
    txtColor?: string;
    loading?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    text,
    onPress,
    disabled = false,
    loading = false,
    btnColor,
    txtColor
}) => {
    const buttonAction = () => {
        ((!disabled && !loading) && onPress) && onPress();
    }

    return (
        <Container btnColor={btnColor} onPress={buttonAction} disabled={disabled || loading}>
            {
                loading ? (
                    <Loading color={txtColor} />
                ) : (
                    <ButtonText txtColor={txtColor} disabled={disabled}>{text}</ButtonText>
                )
            }
        </Container>
    );
}

export default ButtonComponent;