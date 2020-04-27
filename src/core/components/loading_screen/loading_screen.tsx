import React from 'react';
import {View} from 'react-native';
import {styles} from './loading_screen.styles';
import {Loading} from '../loading/loading';

interface Props {
  backgroundColor?: string;
}

export const LoadingScreen = (props: Props): JSX.Element => {
  const {backgroundColor} = props;
  return (
    <View style={[styles.default, {backgroundColor}]}>
      <Loading />
    </View>
  );
};
