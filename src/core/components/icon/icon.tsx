import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@ui-kitten/components';
// eslint-disable-next-line import/no-unresolved
import {IconProps} from 'react-native-vector-icons/Icon';

export const Icon = (props: IconProps): JSX.Element => {
  const theme = useTheme();
  const {color = theme['text-basic-color'], size = 25, ...other} = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MaterialCommunityIcon color={color} size={size} {...other} />;
};
