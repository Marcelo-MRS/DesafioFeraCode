import React, { useEffect, useState } from 'react';
import { LeagueHeaderComponent } from './components';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';

import {
  Container,
  FlatList,
  StandingContainer,
  ListItemContainer,
  ListHeaderContainer,
  StandingColumnText,
  PositionContainer,
  TeamContainer,
  StatisticsContainer,
  StatisticsColumn,
  TeamImage,
  OrderButtom,
  OrderButtomText,
  StandingColumnButtom
} from './styles';

import { Standing } from '~/store/modules/standings/types';
import { useDispatch } from 'react-redux';
import { teamsActions } from '~/store/modules';
import { BackgroundComponent, LoadingComponent } from '~/components';
import { teamsTypedSelector } from '~/store/modules/teams/reducer';
interface RenderItemProps {
  item: Standing;
  index: number;
}

const StandingPage: React.FC = () => {
  const dispatch = useDispatch();

  const {standings, league } = standingsTypedSelector(state => state.standings);
  const { loading: teamsLoading } = teamsTypedSelector(state => state.teams);
  const [filter, setFilter] = useState<string>('all');
  const [orderBy, setOrderBy] = useState<string>('points');
  const [list, setList] = useState<any>(standings);

  useEffect(() => {
    let tempStandings = [...standings];
    if(orderBy === 'points'){
      tempStandings.sort((a, b) => (a.points < b.points) ? 1 : -1)
     } else if (orderBy === 'goalsDiff'){
      tempStandings.sort((a:any, b:any) => (
        (a[filter].goals.for - a[filter].goals.against) < (b[filter].goals.for - b[filter].goals.against)
        ) ? 1 : -1);
     } else {
      tempStandings.sort((a:any, b:any) => (a[filter][orderBy] < b[filter][orderBy]) ? 1 : -1)
    }
    setList(tempStandings)
  }, [orderBy]);

  useEffect(() => {
    setOrderBy('points')
  }, [filter]);

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
        <StandingColumnText>{item[filter].win}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item[filter].draw}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item[filter].lose}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item[filter].goals.for - item[filter].goals.against}</StandingColumnText>
      </StatisticsColumn>
      <StatisticsColumn>
        <StandingColumnText>{item.points}</StandingColumnText>
      </StatisticsColumn>
      </StatisticsContainer>
    </ListItemContainer>
  )
  const Header:React.FC = () => {
    return (
      <ListHeaderContainer borderBottom>
        <PositionContainer>
          <StandingColumnText>#</StandingColumnText>
        </PositionContainer>
        <TeamContainer>
          <StandingColumnText>Team</StandingColumnText>
        </TeamContainer>
        <StatisticsContainer>
          <StatisticsColumn>
            <StandingColumnButtom selected={orderBy==='win'} onPress={()=> setOrderBy('win')}>
              <StandingColumnText>W</StandingColumnText>
            </StandingColumnButtom>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnButtom selected={orderBy==='draw'} onPress={()=> setOrderBy('draw')}>
              <StandingColumnText>D</StandingColumnText>
            </StandingColumnButtom>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnButtom selected={orderBy==='lose'} onPress={()=> setOrderBy('lose')}>
              <StandingColumnText>L</StandingColumnText>
            </StandingColumnButtom>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnButtom selected={orderBy==='goalsDiff'} onPress={()=> setOrderBy('goalsDiff')}>
              <StandingColumnText>GD</StandingColumnText>
            </StandingColumnButtom>
          </StatisticsColumn>
          <StatisticsColumn>
            <StandingColumnButtom selected={orderBy==='points'} onPress={()=> setOrderBy('points')}>
              <StandingColumnText>PTS</StandingColumnText>
            </StandingColumnButtom>
          </StatisticsColumn>
        </StatisticsContainer>
      </ListHeaderContainer>
    )
  }

  const Filter:React.FC = () => {
    return (
      <ListHeaderContainer>
        <OrderButtom selected={filter==='all'} onPress={()=> setFilter('all')}>
          <OrderButtomText>All</OrderButtomText>
        </OrderButtom>
        <OrderButtom selected={filter==='home'}  onPress={()=> setFilter('home')}>
          <OrderButtomText>Home</OrderButtomText>
        </OrderButtom>
        <OrderButtom selected={filter==='away'}  onPress={()=> setFilter('away')}>
          <OrderButtomText>Away</OrderButtomText>
        </OrderButtom>
      </ListHeaderContainer>
    )
  }

  return (
    <BackgroundComponent>
      <Container>
          <LeagueHeaderComponent league={league}/>
          
          <StandingContainer>
            <Filter/>
            <Header/>
            <FlatList
              data={list}
              renderItem={({item, index}) => renderItem({item, index})}
              extraData={list}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          
          </StandingContainer>
          {
            teamsLoading && <LoadingComponent />
          }
      </Container>
    </BackgroundComponent>
  );
}

export default StandingPage;