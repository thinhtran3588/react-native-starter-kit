import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import {ModeContext} from '@core/contexts';
import {styles} from './root_layout.styles';

type Props = {
  children?: React.ReactNode;
};

export const RootLayout = (props: Props): JSX.Element => {
  const {children} = props;
  const theme = useTheme();
  const {mode} = useContext(ModeContext);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme['background-basic-color-2']}
      />
      <SafeAreaView style={[styles.top, {backgroundColor: theme['background-basic-color-2']}]} />
      <SafeAreaView style={[styles.bottom, {backgroundColor: theme['background-basic-color-1']}]}>
        {children}
      </SafeAreaView>
    </View>
  );
};
