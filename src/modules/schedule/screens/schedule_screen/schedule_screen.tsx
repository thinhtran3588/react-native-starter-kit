import React from 'react';
import {Text, AppLayout, Button} from '@core/components';
import {useNavigation} from '@react-navigation/native';

export const ScheduleScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const gotoDetailsScreen = (): void => {
    navigation.navigate('activity');
  };
  return (
    <AppLayout>
      <Text>Schedule screen</Text>
      <Button onPress={gotoDetailsScreen}>Go to details screen</Button>
    </AppLayout>
  );
};
