import React from 'react';
import {AppLayout, AnimatableView} from '@core/components';
import {DarkMode, Language} from './components';

export const SettingsScreen = (): JSX.Element => {
  return (
    <AppLayout>
      <AnimatableView animation='fadeInLeft' duration={500} delay={0}>
        <DarkMode />
      </AnimatableView>
      <AnimatableView animation='fadeInRight' duration={500} delay={0}>
        <Language />
      </AnimatableView>
    </AppLayout>
  );
};
