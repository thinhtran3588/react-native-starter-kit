import React, {useEffect, useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import {styles} from './internet_connection.styles';

export const InternetConnection = (): JSX.Element => {
  const {t} = useTranslation('common');
  const theme = useTheme();
  const animation = useRef(new Animated.Value(0)).current;

  const show = useCallback(
    (isConnected: boolean): void => {
      Animated.timing(animation, {
        toValue: isConnected ? 0 : 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
    },
    [animation],
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      show(state.isConnected && state.isInternetReachable !== false);
    });
    return () => {
      unsubscribe();
    };
  }, [show]);

  return (
    <Animated.View style={[styles.container, {backgroundColor: theme['color-danger-default'], height: animation}]}>
      <Text style={styles.text}>{t('noInternetConnection').toString()}</Text>
    </Animated.View>
  );
};
