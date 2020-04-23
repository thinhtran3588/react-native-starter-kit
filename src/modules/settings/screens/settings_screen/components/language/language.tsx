import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ListItem, Icon, RadioGroup, Radio} from '@core/components';
import {RootState, Dispatch} from '@app/store';
import {config} from '@core/config';
import {styles} from './language.styles';

export const Language = (): JSX.Element => {
  const {t, i18n} = useTranslation('settings');
  const lang = useSelector((state: RootState) => state.settings.lang);
  const {
    settings: {setLang},
  } = useDispatch<Dispatch>();
  const languageIds = config.languages.map((language) => language.id);
  const changeLanguage = (newLang: string): void => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ListItem
      title={t('language').toString()}
      accessoryLeft={() => <Icon name='earth' />}
      accessoryRight={() => (
        <RadioGroup
          selectedIndex={languageIds.indexOf(lang)}
          onChange={(index) => changeLanguage(languageIds[index])}
          style={styles.radioGroup}>
          {config.languages.map((language) => (
            <Radio key={language.id}>{language.name}</Radio>
          ))}
        </RadioGroup>
      )}
    />
  );
};
