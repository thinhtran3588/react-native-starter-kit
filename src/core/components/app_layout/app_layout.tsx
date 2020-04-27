/* eslint-disable react/jsx-props-no-spreading */
import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, LayoutProps} from '@ui-kitten/components';
import {styles} from './app_layout.styles';
import {InternetConnection} from '../internet_connection/internet_connection';

type Props = LayoutProps & {
  children?: React.ReactNode;
  safeArea?: boolean;
  showInternetConnection?: boolean;
};

export const AppLayout = (props: Props): JSX.Element => {
  const {children, showInternetConnection = false, safeArea = true, style, ...other} = props;
  const Container = safeArea ? SafeAreaView : Fragment;
  return (
    <Container style={styles.container}>
      <Layout style={[styles.layout, style]} {...other}>
        {children}
        {showInternetConnection && <InternetConnection />}
      </Layout>
    </Container>
  );
};
