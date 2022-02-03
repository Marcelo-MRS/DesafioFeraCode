import styled from 'styled-components/native';
import { SvgCssUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 10px;
`;

export const StandingContainer = styled.View`
 flex: 1;
  margin: 0px 10px;
`;

export const FlagImage = styled(SvgCssUri).attrs(() => ({
  width: 35,
  height: 35,
}))``;

export const CountryName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: #282828;
`;

export const StandingColumnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  color: #282828;
  flex-shrink: 1;
`;


export const StandingColumnButtom = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => props.selected ?  '#ff5757' : '#fff'};
  flex: 1;
  flex-direction: row;
  justify-content: center;
  border-radius: 3px;
`;


export const FlatList = styled.FlatList.attrs(() => ({
  contentContainerStyle: { paddingBottom: 20}
}))``;
export const ListHeaderContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
`;
export const ListItemContainer = styled.TouchableOpacity`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
`;

export const OrderButtom = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.selected ?  '#ff5757' : '#fff'};
  /* background-color: #ff5757; */
  align-items: center;
  min-width: 50px;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const OrderButtomText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  flex-shrink: 1;
`;
export const PositionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const TeamContainer = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const TeamImage = styled.Image`
    height: 25px;
    width: 25px;
`;
export const StatisticsContainer = styled.View`
  flex: 4;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StatisticsColumn = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;