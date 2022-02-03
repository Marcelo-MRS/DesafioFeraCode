import React from 'react';

import { NotFoundText } from './styles';

interface NotFoundProps {
    text?: string;
}

const NotFoundComponent: React.FC<NotFoundProps> = ({text}) => {
  return (
    <NotFoundText>{text || 'Não encontrado'}</NotFoundText>
  );
}

export default NotFoundComponent;