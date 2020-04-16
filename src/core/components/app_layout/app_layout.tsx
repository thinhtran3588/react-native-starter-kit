/* eslint-disable react/jsx-props-no-spreading */
import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, LayoutProps} from '@ui-kitten/components';
import {styles} from './app_layout.styles';

type Props = LayoutProps & {
  children?: React.ReactNode;
  safeArea?: boolean;
};

export const AppLayout = (props: Props): JSX.Element => {
  const {children, safeArea = true, style, ...other} = props;
  const Container = safeArea ? SafeAreaView : Fragment;
  return (
    <Container style={styles.container}>
      <Layout style={[styles.layout, style]} {...other}>
        {children}
      </Layout>
    </Container>
  );
};
