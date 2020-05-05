import React from 'react';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@ui-kitten/components';
import {NavItem} from '@core/interfaces';
import {Icon} from '../icon/icon';

interface Props {
  type: 'BOTTOM_TAB' | 'STACK';
  navItems: NavItem[];
}

interface NavProps {
  type: 'BOTTOM_TAB' | 'STACK';
  navItems: NavItem[];
}

const Nav = (props: NavProps): JSX.Element => {
  const {type, navItems} = props;
  const theme = useTheme();
  const {t} = useTranslation('common');
  if (type === 'BOTTOM_TAB') {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme['color-primary-default'],
          activeBackgroundColor: theme['background-basic-color-1'],
          inactiveBackgroundColor: theme['background-basic-color-1'],
          style: {
            borderTopColor: theme['background-basic-color-1'],
          },
        }}>
        {navItems.map((navItem) => {
          const Screen =
            navItem.type === 'BOTTOM_TAB' || navItem.type === 'STACK'
              ? () => <Nav type={navItem.type} navItems={navItem.children} />
              : navItem.component;
          return (
            <Tab.Screen
              key={navItem.name}
              name={navItem.name}
              component={Screen}
              options={{
                title: navItem.title,
                tabBarIcon: (iconProps) => {
                  const {focused, color, size} = iconProps;
                  const icon = (focused ? navItem.iconFocused : navItem.icon) || '';
                  return <Icon name={icon} size={size} color={color} />;
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    );
  }

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={navItems[0].name}>
      {navItems.map((navItem) => {
        const Screen =
          navItem.type === 'BOTTOM_TAB' || navItem.type === 'STACK'
            ? () => <Nav type={navItem.type} navItems={navItem.children} />
            : navItem.component;
        return (
          <Stack.Screen
            key={navItem.name}
            name={navItem.name}
            component={Screen}
            options={{
              title: navItem.title,
              headerShown: navItem.type === 'STACK_SCREEN',
              headerTintColor: theme['text-basic-color'],
              headerStyle: {
                backgroundColor: theme['background-basic-color-1'],
                borderBottomColor: theme['background-basic-color-1'],
              },
              headerBackTitle: t('back'),
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export const Navigation = (props: Props): JSX.Element => {
  const {type, navItems} = props;
  return (
    <NavigationContainer>
      <Nav type={type} navItems={navItems} />
    </NavigationContainer>
  );
};
