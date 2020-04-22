import React from 'react';
import {useSelector} from 'react-redux';
import {
  Navigation,
  ApplicationProvider,
  light,
  dark,
  mapping,
  RootLayout,
  Provider,
  PersistGate,
  LoadingScreen,
} from '@core/components';
import * as customTheme from '@assets/jsons/custom_theme.json';
import {NavItem} from '@core/interfaces';
import {WeatherScreen} from '@weather/screens';
import {SettingsScreen} from '@settings/screens';
import {store, persistor, RootState} from '@app/store';

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

const BaseApp = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.settings.mode);
  const theme = mode === 'light' ? light : dark;
  return (
    <ApplicationProvider mapping={mapping} theme={{...theme, ...customTheme}}>
      <RootLayout>
        <Navigation navItems={navItems} />
      </RootLayout>
    </ApplicationProvider>
  );
};

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingScreen />}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};
