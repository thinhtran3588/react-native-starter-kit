import React from 'react';
import LottieView from 'lottie-react-native';
import * as loading from '@assets/jsons/loading.json';

interface Props {
  size?: number;
}

export const Loading = (props: Props): JSX.Element => {
  const {size = 150} = props;
  return <LottieView source={loading} autoPlay loop style={{width: size, height: size}} />;
};
