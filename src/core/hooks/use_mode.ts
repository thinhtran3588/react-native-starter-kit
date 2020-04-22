import {useState, useMemo} from 'react';
import {Mode} from '@core/interfaces';

export const useMode = (): {mode: Mode; setMode: (mode: Mode) => void} => {
  const [mode, setMode] = useState<Mode>('light');
  const modeState = useMemo(() => ({mode, setMode}), [mode]);
  return modeState;
};
