import {
  black,
  gray5,
  notoSansKrBlack,
  notoSansKrBold,
  notoSansKrLight,
  notoSansKrMedium,
  notoSansKrRegular,
  notoSansKrThin,
} from 'assets/constant';
import React, {forwardRef} from 'react';
import {TextInputProps, TextInput, ColorValue} from 'react-native';
import {TFontType} from './FontText';

interface IProps extends TextInputProps {
  fontSize?: number;
  color?: ColorValue;
  fontType?: TFontType;
  weight?: '100' | '300' | '400' | '500' | '700' | '900' | 'bold' | 'normal';
}

/**
 * @param fontSize 폰트 사이즈
 * @param color 텍스트 컬러
 * @param fontType 폰트 형태
 * @param weight 텍스트 굵기
 * @param style 인풋 스타일
 */
export default forwardRef<TextInput, IProps>(
  ({weight, style, fontType, color = black, ...restProps}, ref) => {
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
    return (
      <TextInput
        ref={ref}
        autoCapitalize="none"
        placeholderTextColor={gray5}
        underlineColorAndroid="rgba(255,255,255,0)"
        style={[{fontFamily, color}, style]}
        {...restProps}
      />
    );
  },
);
