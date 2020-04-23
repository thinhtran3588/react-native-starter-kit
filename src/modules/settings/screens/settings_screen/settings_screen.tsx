import React from 'react';
import {AppLayout} from '@core/components';
import {DarkMode, Language} from './components';

export const SettingsScreen = (): JSX.Element => {
  return (
    <AppLayout>
      <DarkMode />
      <Language />
    </AppLayout>
  );
};
