import {Mode} from '@core/interfaces';
import produce from 'immer';

interface SettingsState {
  mode: Mode;
}

interface SettingsModel {
  state: SettingsState;
  reducers: {
    setMode: (state: SettingsState, mode: Mode) => SettingsState;
  };
}

export const settings: SettingsModel = {
  state: {
    mode: 'light',
  },
  reducers: {
    setMode: produce((draftState: SettingsState, mode: Mode) => {
      draftState.mode = mode;
    }),
  },
};
