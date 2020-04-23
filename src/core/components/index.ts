import {SafeAreaView, View, Alert, TouchableOpacity, Dimensions} from 'react-native';
import {
  ApplicationProvider,
  Text,
  Button,
  Card,
  ListItem,
  Toggle,
  useTheme,
  RadioGroup,
  Radio,
} from '@ui-kitten/components';
import {light, dark, mapping} from '@eva-design/material';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export {
  Text,
  View,
  Button,
  Card,
  SafeAreaView,
  ApplicationProvider,
  useTheme,
  light,
  dark,
  mapping,
  Alert,
  Dimensions,
  Carousel,
  Pagination,
  FastImage,
  TouchableOpacity,
  ListItem,
  Toggle,
  Provider,
  PersistGate,
  RadioGroup,
  Radio,
};
export * from './app_layout/app_layout';
export * from './icon/icon';
export * from './navigation/navigation';
export * from './root_layout/root_layout';
export * from './loading_screen/loading_screen';
