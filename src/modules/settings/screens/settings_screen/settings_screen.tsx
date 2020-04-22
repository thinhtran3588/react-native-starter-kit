import React from 'react';
import {AppLayout} from '@core/components';
import {DarkMode} from './components';

export const SettingsScreen = (): JSX.Element => {
  return (
    <AppLayout>
      <DarkMode />
    </AppLayout>
  );
};
