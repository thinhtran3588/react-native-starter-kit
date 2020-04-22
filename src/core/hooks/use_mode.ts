import {useState, useMemo, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Mode} from '@core/interfaces';

const STORAGE_KEY = 'mode';
export const useMode = (): {mode: Mode; setMode: (mode: Mode) => void} => {
  const [mode, setMode] = useState<Mode>('light');
  const saveMode = useCallback(async (newMode: Mode): Promise<void> => {
    try {
      setMode(newMode);
      await AsyncStorage.setItem(STORAGE_KEY, newMode);
    } catch (e) {
      // error writing value
    }
  }, []);
  useEffect(() => {
    const loadMode = async (): Promise<void> => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value) {
          setMode(value as Mode);
        }
      } catch (e) {
        // error reading value
      }
    };
    loadMode();
  }, []);
  const modeState = useMemo(() => ({mode, setMode: saveMode}), [mode, saveMode]);
  return modeState;
};
