import styled from 'styled-components/native';
import { SvgCssUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #E5E5E5;
`;

export const PickerContainer = styled.View`
  align-items: flex-end;
`;

export const PickerButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PickerName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: #282828;
`;

export const SelectsContainer = styled.View`
  padding: 20px;
`;

export const LeagueSelectContainer = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 0px 3px #4D4D4D;
  elevation: 4;
`;

export const LeagueSelectText = styled.Text`
  font-size: 16px;
`;

export const PickerImage = styled(SvgCssUri).attrs(() => ({
  width: 35,
  height: 35,
}))``;

export const PickerIcon = styled(Icon).attrs(() => ({
  size: 18,
  color: '#282828'
}))`
  margin-left: 5px;
`;
