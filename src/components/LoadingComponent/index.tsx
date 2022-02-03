import React from 'react';
import LottieView from 'lottie-react-native';

import LoadingBall from '~/assets/animation/loading-ball.json';

import { Cover, LoadingContainer, LoadingBackground } from './styles';

const LoadingComponent: React.FC = () => {
  return (
      <Cover>
          <LoadingContainer>
            <LoadingBackground>
                <LottieView 
                    source={LoadingBall}
                    autoPlay
                    loop
                    style={{
                        height: 150,
                        width: 150,
                    }}
                />
            </LoadingBackground>
          </LoadingContainer>
      </Cover>
  );
}

export default LoadingComponent;