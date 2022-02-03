import styled from 'styled-components/native';
import { SvgCssUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PickerContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PickerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PickerName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: ${props => props.theme.text};
`;

export const SelectsContainer = styled.View`
  padding: 20px;
`;

export const PickerImage = styled(SvgCssUri).attrs(() => ({
  width: 35,
  height: 35,
}))``;

export const PickerIcon = styled(Icon).attrs((props) => ({
  size: 18,
  color: props.theme.text
}))`
  margin-left: 5px;
`;