import styled from 'styled-components/native';
import { SvgCssUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import {rgba} from 'polished';

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

export const LastSearchesButton = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => props.theme.tertiary};
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const LastSearchesText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => rgba(props.theme.text, 0.4) };
`;
export const LastSearchesTittleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  /* margin-left: 10px; */
  color: ${(props) => rgba(props.theme.text, 0.8) };
`;

export const LastSearchesContainer = styled.View`
  /* flex-direction: row; */
  padding: 40px 20px;
  /* align-items: center; */
`;