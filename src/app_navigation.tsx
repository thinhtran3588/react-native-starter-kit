import React from 'react';
import {Navigation} from '@core/components';
import {NavItem} from '@core/interfaces';
import {WeatherScreen} from '@weather/screens';
import {SettingsScreen} from '@settings/screens';
import {ScheduleScreen, ActivityScreen} from '@schedule/screens';
import {useTranslation} from 'react-i18next';

export const AppNavigation = (): JSX.Element => {
  const {t} = useTranslation('common');

  const navItems: NavItem[] = [
    {
      name: 'main',
      title: '',
      type: 'BOTTOM_TAB',
      children: [
        {
          name: 'schedule',
          type: 'TAB_SCREEN',
          title: t('schedule'),
          component: ScheduleScreen,
          icon: 'calendar-outline',
          iconFocused: 'calendar',
        },
        {
          name: 'weather',
          type: 'TAB_SCREEN',
          title: t('weather'),
          component: WeatherScreen,
          icon: 'thought-bubble-outline',
          iconFocused: 'thought-bubble',
        },
        {
          name: 'settings',
          type: 'TAB_SCREEN',
          title: t('settings'),
          component: SettingsScreen,
          icon: 'settings-outline',
          iconFocused: 'settings',
        },
      ],
    },
    {
      name: 'activity',
      type: 'STACK_SCREEN',
      title: t('activity'),
      component: ActivityScreen,
    },
  ];
  return <Navigation type='STACK' navItems={navItems} />;
};
