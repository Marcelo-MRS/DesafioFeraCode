import React from 'react';

import { Container, Button, ButtonIcon } from './styles';

interface HeaderButtonProps {
  navigation: any;
}

const HeaderButtonComponent: React.FC<HeaderButtonProps> = ({navigation}) => {
  const onClick = () => {
    navigation && navigation.goBack();
  }

  return (
    <Container>
      <Button onPress={onClick}>
        <ButtonIcon name="chevron-left"  />
      </Button>
    </Container>
  );
}

export default HeaderButtonComponent;