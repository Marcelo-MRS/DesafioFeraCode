import React,{ useEffect, useState }  from 'react';
import { Leagues } from '~/store/modules/leagues/types';

import { Container, ItemImage, ItemText } from './styles';

interface CardItemProps {
    item: any;
    onPress?: (any: any) => void
}

const CardItemComponent: React.FC<CardItemProps> = ({item, onPress}) => {
  return (
      <Container onPress={() => onPress && onPress(item)}>
          {item?.league?.logo && (
              <ItemImage resizeMode='contain' source={{uri: item.league.logo}} />
          )}
          <ItemText>{item?.league?.name}</ItemText>
      </Container>
  );
}

export default CardItemComponent;