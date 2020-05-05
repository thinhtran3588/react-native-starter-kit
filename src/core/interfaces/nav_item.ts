export interface BaseNavItem {
  name: string;
  title: string;
  icon?: string;
  iconFocused?: string;
}

export interface BottomTabNavItem extends BaseNavItem {
  type: 'BOTTOM_TAB';
  children: NavItem[];
}

export interface TabScreenNavItem extends BaseNavItem {
  type: 'TAB_SCREEN';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

export interface StackNavItem extends BaseNavItem {
  type: 'STACK';
  children: NavItem[];
}

export interface StackScreenNavItem extends BaseNavItem {
  type: 'STACK_SCREEN';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

export type NavItem = BottomTabNavItem | TabScreenNavItem | StackNavItem | StackScreenNavItem;
