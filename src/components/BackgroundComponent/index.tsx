import React from 'react';

import { Gradient } from './styles';

const BackgroundComponent: React.FC = ({children}) => {
  return (
    <Gradient>
        {children}
    </Gradient>
  );
}

export default BackgroundComponent;