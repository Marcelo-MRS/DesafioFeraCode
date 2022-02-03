import React, {useEffect, useState} from 'react';
import { BackgroundComponent } from '~/components';
import { teamsTypedSelector } from '~/store/modules/teams/reducer';
import { Teams } from '~/store/modules/teams/types';

import {
  Container,
  HeaderContainer,
  TeamName,
  TeamImage,
  TeamDetail,
  DetailContainer,
  Title,
  Card,
  StadiumImage,
  SubTitle,
  StadiumDetailContainer,
  DescriptionLabel,
  DescriptionText,
  ScrollContainer,
} from './styles';

const Detail: React.FC = () => {
  const [teamInfo, setTeamInfo] = useState<Teams | undefined>();
  const [cardSize, setCardSize] = useState<number>(0);

  const {teams} = teamsTypedSelector(state => state.teams);

  useEffect(() => {
    if (teams) {
      setTeamInfo(teams?.[0]);
    }
  }, [teams])

  const getCardSize = (event: any) => {
    const {width} = event.nativeEvent.layout;
    setCardSize(width);
  }

  return (
      <BackgroundComponent>
        <Container>
          <ScrollContainer>
            <HeaderContainer>
              <TeamImage source={{uri: teamInfo?.team.logo}} resizeMode='contain' />
              <TeamName>{teamInfo?.team.name}</TeamName>
              <TeamDetail>
                {teamInfo?.team.country} {`${teamInfo?.team.founded ? `- Fundado em ${teamInfo?.team.founded}` : ''}`}
              </TeamDetail>
            </HeaderContainer>
            <DetailContainer onLayout={getCardSize}
            >
              <Title>Estádio</Title>
              <Card>
                <StadiumImage
                  source={{uri: teamInfo?.venue.image}}
                  resizeMode='cover'
                  size={cardSize}
                />
                <SubTitle>{teamInfo?.venue.name}</SubTitle>
                <StadiumDetailContainer>
                  <DescriptionLabel>Endereço</DescriptionLabel>
                  <DescriptionText>{teamInfo?.venue.address}</DescriptionText>
                  <DescriptionLabel>Cidade</DescriptionLabel>
                  <DescriptionText>{teamInfo?.venue.city}</DescriptionText>
                  <DescriptionLabel>Capacidade</DescriptionLabel>
                  <DescriptionText>{teamInfo?.venue.capacity}</DescriptionText>
                  <DescriptionLabel>Superfície</DescriptionLabel>
                  <DescriptionText>{teamInfo?.venue.surface}</DescriptionText>
                </StadiumDetailContainer>
              </Card>
            </DetailContainer>
          </ScrollContainer>
        </Container>
      </BackgroundComponent>
  );
}

export default Detail;