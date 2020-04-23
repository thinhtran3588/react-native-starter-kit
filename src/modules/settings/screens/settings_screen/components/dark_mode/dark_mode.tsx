import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ListItem, Toggle, Icon} from '@core/components';
import {RootState, Dispatch} from '@app/store';

export const DarkMode = (): JSX.Element => {
  const {t} = useTranslation('settings');
  const mode = useSelector((state: RootState) => state.settings.mode);
  const {
    settings: {setMode},
  } = useDispatch<Dispatch>();
  const onChange = (): void => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };
  return (
    <ListItem
      title={t('darkMode').toString()}
      description={t('darkModeDesc').toString()}
      accessoryLeft={() => <Icon name='theme-light-dark' />}
      accessoryRight={() => <Toggle checked={mode === 'dark'} onChange={onChange} />}
    />
  );
};
