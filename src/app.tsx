import React from 'react';
import {Navigation, ApplicationProvider, light, dark, mapping, RootLayout} from '@core/components';
import * as customTheme from '@assets/jsons/custom_theme.json';
import {NavItem} from '@core/interfaces';
import {useMode} from '@core/hooks';
import {ModeContext} from '@core/contexts';
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
  const mode = useMode();
  const theme = mode.mode === 'light' ? light : dark;
  return (
    <ModeContext.Provider value={mode}>
      <ApplicationProvider mapping={mapping} theme={{...theme, ...customTheme}}>
        <RootLayout>
          <Navigation navItems={navItems} />
        </RootLayout>
      </ApplicationProvider>
    </ModeContext.Provider>
  );
};
