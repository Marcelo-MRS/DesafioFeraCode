import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';

import { ListItemComponent } from '~/components';
import { League} from '~/store/modules/standings/types';

import { Container, LeagueName, LeagueImage, TextContainer} from './styles';

interface LeagueHeaderComponentProps {
    league?: League;
    onPress?: (league: League) => void;
}

interface RenderItemProps {
    item: any;
    index: number;
}

const LeagueHeaderComponent: React.FC<LeagueHeaderComponentProps> = ({league, onPress}) => {
    return (
        <Container>
            <LeagueImage resizeMode='contain' source={{uri: league?.logo}} />
            <TextContainer>
                <LeagueName>{league?.name}</LeagueName>
                <LeagueName>{league?.season} - {league?.season-2000 + 1}</LeagueName>
            </TextContainer>
        </Container>
    );
}

export default LeagueHeaderComponent;