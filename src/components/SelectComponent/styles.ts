import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const SelectContainer = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  elevation: 4;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface SelectTextProps {
    existValue?: boolean;
}

export const SelectText = styled.Text<SelectTextProps>`
  font-size: 16px;
  color: ${(props) => props.existValue ? '#282828' : '#757575' };
  font-style: ${(props) => props.existValue ? 'normal' : 'italic' };
`;

export const PickerIcon = styled(Icon).attrs(() => ({
  size: 18,
  color: '#282828'
}))`
  margin-left: 5px;
`;
