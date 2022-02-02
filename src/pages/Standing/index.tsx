import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LeagueHeaderComponent } from './components';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';
import { League } from '~/store/modules/standings/types'

import { Container, FlatList, StandingContainer, ListItemContainer, ListHeaderContainer, StandingColumnText, PositionContainer, TeamContainer, StatisticsContainer, StatisticsColumn, TeamImage} from './styles';

interface RenderItemProps {
  item: any;
  index: number;
}

const Standing: React.FC = () => {
  const {loading: standingLoading, standings, league } = standingsTypedSelector(state => state.standings);

  useEffect(() => {
    // setLeagues(standings[].league)
    // setListStanding(standings[].league.standings)
  }, []);

  const renderItem = ({item, index}: RenderItemProps) => (
    <ListItemContainer>
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
            contentContainerStyle={{ paddingBottom: 20 }}
          />
         
        </StandingContainer>

    </Container>
  );
}

export default Standing;