import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {config} from '@core/config';
import commonEn from '@assets/jsons/locales/en/common.json';
import weatherEn from '@assets/jsons/locales/en/weather.json';
import settingsEn from '@assets/jsons/locales/en/settings.json';
import commonVi from '@assets/jsons/locales/vi/common.json';
import weatherVi from '@assets/jsons/locales/vi/weather.json';
import settingsVi from '@assets/jsons/locales/vi/settings.json';

export const initializeI18n = async (): Promise<void> => {
  await i18next.use(initReactI18next).init({
    lng: config.defaultLang,
    debug: __DEV__,
    resources: {
      en: {
        common: commonEn,
        weather: weatherEn,
        settings: settingsEn,
      },
      vi: {
        common: commonVi,
        weather: weatherVi,
        settings: settingsVi,
      },
    },
  });
};
