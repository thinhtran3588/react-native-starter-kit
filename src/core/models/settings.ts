import {Mode} from '@core/interfaces';
import produce from 'immer';

interface SettingsState {
  mode: Mode;
  lang: string;
}

interface SettingsModel {
  state: SettingsState;
  reducers: {
    setMode: (state: SettingsState, mode: Mode) => SettingsState;
    setLang: (state: SettingsState, lang: string) => SettingsState;
  };
}

export const settings: SettingsModel = {
  state: {
    mode: 'light',
    lang: 'en',
  },
  reducers: {
    setMode: produce((draftState: SettingsState, mode: Mode) => {
      draftState.mode = mode;
    }),
    setLang: produce((draftState: SettingsState, lang: string) => {
      draftState.lang = lang;
    }),
  },
};
