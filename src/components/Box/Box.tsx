import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  BackgroundColorProps,
  backgroundColor,
  BorderProps,
  border,
  LayoutProps,
  layout,
  SpacingProps,
  spacing,
  SpacingShorthandProps,
  spacingShorthand,
  BoxProps as RSNoxProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
//export type BoxProps = React.ComponentProps<typeof Box>;
export type BoxProps = RSNoxProps<Theme>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
