import React from 'react';
import {Navigation} from '@core/components';
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
  return <Navigation navItems={navItems} />;
};
