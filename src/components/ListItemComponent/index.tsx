import React, {memo} from 'react';

import { Container, ItemImage, ItemText } from './styles';

interface ListItemProps {
    item?: any;
    text?: string;
    image?: string;
    onPress?: (any: any) => void
}

const ListItemComponent: React.FC<ListItemProps> = ({item, text, image, onPress}) => {
  return (
      <Container onPress={() => onPress && onPress(item)}>
          {/* {image && (
              <ItemImage uri={image} />
          )} */}
          <ItemText>{text || ''}</ItemText>
      </Container>
  );
}

export default memo(ListItemComponent);