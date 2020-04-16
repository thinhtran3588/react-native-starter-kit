import React from 'react';
import {Navigation, ApplicationProvider, light, mapping} from '@core/components';
import * as customTheme from '@assets/jsons/custom_theme.json';
import {NavItem} from '@core/interfaces';
import {WeatherScreen} from '@weather/screens';
import {SettingsScreen} from '@settings/screens';

const navItems: NavItem[] = [
  {
    name: 'weather',
    title: 'Weather',
    component: WeatherScreen,
    icon: 'thought-bubble-outline',
    iconFocused: 'thought-bubble',
  },
  {
    name: 'settings',
    title: 'Settings',
    component: SettingsScreen,
    icon: 'settings-outline',
    iconFocused: 'settings',
  },
];

export const App = (): JSX.Element => {
  return (
    <ApplicationProvider mapping={mapping} theme={{...light, ...customTheme}}>
      <Navigation navItems={navItems} />
    </ApplicationProvider>
  );
};
