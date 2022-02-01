import React, { useMemo } from 'react';

import {
    SelectContainer,
    SelectText,
    PickerIcon,
} from './styles';

interface SelectComponentProps {
    onPress?: () => void;
    text?: string;
    placeholder?: string
}

const SelectComponent: React.FC<SelectComponentProps> = ({onPress, text, placeholder}) => {
    const textValue = useMemo(() => {
        if (text) return text;
        if (placeholder) return placeholder;
        return 'Selecione';
    }, [text, placeholder])

    return (
        <SelectContainer onPress={onPress}>
            <SelectText existValue={!!text} >{textValue}</SelectText>
            <PickerIcon name="chevron-down" />
        </SelectContainer>
    );
}

export default SelectComponent;