import React from 'react';
import {Text, AppLayout, Button} from '@core/components';
import {useNavigation} from '@react-navigation/native';

export const ActivityScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const gotoDetailsScreen = (): void => {
    navigation.goBack();
  };
  return (
    <AppLayout>
      <Text>Schedule Details screen</Text>
      <Button onPress={gotoDetailsScreen}>Back to schedules</Button>
    </AppLayout>
  );
};
