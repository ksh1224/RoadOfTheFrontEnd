import {
  black,
  notoSansKrBlack,
  notoSansKrBold,
  notoSansKrLight,
  notoSansKrMedium,
  notoSansKrRegular,
  notoSansKrThin,
} from 'assets/constant';
import React from 'react';
import {ColorValue, Text, TextProps, TextStyle} from 'react-native';

export type TFontType = 'notoSans';

interface IProps extends TextProps {
  size?: number;
  color?: ColorValue;
  fontType?: TFontType;
  align?: TTextAlign;
  lineHeight?: number;
  weight?:
    | '100'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '900'
    | 'bold'
    | 'normal';
}

export default function FontText(props: IProps) {
  const {
    children,
    size = 14,
    color = black,
    style,
    fontType = 'notoSans',
    weight,
    align,
    lineHeight,
  } = props;
  let fontFamily = notoSansKrRegular;

  if (fontType) {
    switch (fontType) {
      case 'notoSans':
        switch (weight) {
          case '100':
            fontFamily = notoSansKrThin;
            break;
          case '300':
            fontFamily = notoSansKrLight;
            break;
          case '400':
            fontFamily = notoSansKrRegular;
            break;
          case '500':
            fontFamily = notoSansKrMedium;
            break;
          case '700':
            fontFamily = notoSansKrBold;
            break;
          case '900':
            fontFamily = notoSansKrBlack;
            break;
          case 'bold':
            fontFamily = notoSansKrBold;
            break;
          default:
            fontFamily = notoSansKrRegular;
            break;
        }
        break;
      default:
        fontFamily = notoSansKrRegular;
        break;
    }
  }

  const textStyles: TextStyle = {
    fontFamily,
    lineHeight: lineHeight || size * 1.2,
    fontSize: size,
    color: color,
    textAlign: align,
  };

  return (
    <Text {...props} style={[textStyles, style]}>
      {children}
    </Text>
  );
}
