import React, { useState } from 'react';

import { Container, SearchInput, IconContainer, SearchIcon } from './styles';

interface SearchInputProps {
    onChangeText?: (value: string) => void;
    placeholder?: string;
}

const SearchInputComponent: React.FC<SearchInputProps> = ({onChangeText, placeholder}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const onChange = (value: string) => {
        setInputValue(value);
        onChangeText && onChangeText(value);
    }

    const cleanInput = () => {
        setInputValue('');
        onChangeText && onChangeText('');
    }

  return (
      <Container>
          <SearchInput onChangeText={onChange} placeholder={placeholder || ''} value={inputValue} />
          <IconContainer onPress={cleanInput} disabled={!inputValue}>
            <SearchIcon name={inputValue ? 'x' : 'search'} />
          </IconContainer>
      </Container>
  );
}

export default SearchInputComponent;