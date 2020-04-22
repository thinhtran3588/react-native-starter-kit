import {SafeAreaView, View, Alert, TouchableOpacity, Dimensions} from 'react-native';
import {ApplicationProvider, Text, Button, Card, useTheme} from '@ui-kitten/components';
import {light, dark, mapping} from '@eva-design/material';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

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
};
export * from './app_layout/app_layout';
export * from './icon/icon';
export * from './navigation/navigation';
