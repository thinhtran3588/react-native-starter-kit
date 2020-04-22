import {createContext} from 'react';
import {Mode} from '@core/interfaces';

export const ModeContext = createContext<{mode: Mode; setMode: (mode: Mode) => void}>({
  mode: 'light',
  setMode: (_mode: Mode) => {},
});
