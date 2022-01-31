import React from 'react';

import { Container, ItemImage, ItemText } from './styles';

interface ListItemProps {
    item: any;
    onPress?: (any: any) => void
}

const ListItemComponent: React.FC<ListItemProps> = ({item, onPress}) => {
  return (
      <Container onPress={() => onPress && onPress(item)}>
          {/* {item?.flag && (
              <ItemImage uri={item?.flag} />
          )} */}
          <ItemText>{item?.name}</ItemText>
      </Container>
  );
}

export default ListItemComponent;