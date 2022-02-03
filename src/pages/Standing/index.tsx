import React from 'react';
import { FlatList } from 'react-native';
import { LeagueHeaderComponent } from './components';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';

import { Standing } from '~/store/modules/standings/types';
import {
  Container,
  StandingContainer,
  ListItemContainer,
  ListHeaderContainer,
  StandingColumnText,
  PositionContainer,
  TeamContainer,
  StatisticsContainer,
  StatisticsColumn,
  TeamImage
} from './styles';
import { useDispatch } from 'react-redux';
import { teamsActions } from '~/store/modules';
interface RenderItemProps {
  item: Standing;
  index: number;
}

const StandingPage: React.FC = () => {
  const dispatch = useDispatch();

  const {standings, league } = standingsTypedSelector(state => state.standings);

  const onSelectTeam = ({team}: Standing) => {
    dispatch(teamsActions.teamsRequest({id: team.id}))
  }

  const renderItem = ({item, index}: RenderItemProps) => (
    <ListItemContainer onPress={() => onSelectTeam(item)}>
      <PositionContainer>
        <StandingColumnText>{item.rank}</StandingColumnText>
      </PositionContainer>
      <TeamContainer>
        <TeamImage resizeMode='contain' source={{uri: item?.team.logo}}/>
        <StandingColumnText numberOfLines={1}>{item.team.name}</StandingColumnText>
      </TeamContainer>
      <StatisticsContainer>
      <StatisticsColumn>
        <StandingColumnText>{item.all.win}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item.all.draw}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item.all.lose}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item.goalsDiff}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item.points}</StandingColumnText>
      </StatisticsColumn>
      </StatisticsContainer>
    </ListItemContainer>
  )
  const Header:React.FC = () => {
    return (
      <ListHeaderContainer>
        <PositionContainer>
          <StandingColumnText>#</StandingColumnText>
        </PositionContainer>
        <TeamContainer>
          <StandingColumnText>Team</StandingColumnText>
        </TeamContainer>
        <StatisticsContainer>
          <StatisticsColumn>
            <StandingColumnText>W</StandingColumnText>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnText>D</StandingColumnText>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnText>L</StandingColumnText>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnText>GD</StandingColumnText>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnText>PTS</StandingColumnText>
          </StatisticsColumn>
        </StatisticsContainer>

      </ListHeaderContainer>
    )
    
    
  }

  return (
    <Container>
        <LeagueHeaderComponent league={league}/>
        <StandingContainer>
          <Header/>
          <FlatList
            data={standings}
            renderItem={({item, index}) => renderItem({item, index})}
            extraData={standings}
          />
         
        </StandingContainer>

    </Container>
  );
}

export default StandingPage;