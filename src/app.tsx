import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
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
import {store, persistor, RootState} from '@app/store';
import {initializeI18n} from '@app/i18n';
import {useTranslation} from 'react-i18next';
import {AppNavigation} from './app_navigation';

const BaseApp = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.settings.mode);
  const lang = useSelector((state: RootState) => state.settings.lang);
  const theme = mode === 'light' ? light : dark;
  const {i18n} = useTranslation('common');

  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);
  return (
    <ApplicationProvider mapping={mapping} theme={{...theme, ...customTheme}}>
      <RootLayout>
        <AppNavigation />
      </RootLayout>
    </ApplicationProvider>
  );
};

export const App = (): JSX.Element => {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  useEffect(() => {
    (async () => {
      await initializeI18n();
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <LoadingScreen />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingScreen />}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};
