import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
`;

export const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 50px;
`;

export const ButtonIcon = styled(Icon).attrs((props) => ({
    size: 25,
    color: props.theme.text
  }))``;