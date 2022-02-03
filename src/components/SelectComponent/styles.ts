import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {rgba} from 'polished';

export const SelectContainer = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => props.theme.tertiary};
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface SelectTextProps {
    existValue?: boolean;
}

export const SelectText = styled.Text<SelectTextProps>`
  font-size: 18px;
  color: ${(props) => props.existValue ? props.theme.text : rgba(props.theme.text, 0.4) };
`;

export const PickerIcon = styled(Icon).attrs((props) => ({
  size: 18,
  color: props.theme.text
}))`
  margin-left: 5px;
`;
