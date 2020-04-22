import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './loading_screen.styles';

interface Props {
  backgroundColor?: string;
}

export const LoadingScreen = (props: Props): JSX.Element => {
  const {backgroundColor} = props;
  return (
    <View style={[styles.default, {backgroundColor}]}>
      <ActivityIndicator size='large' />
    </View>
  );
};
