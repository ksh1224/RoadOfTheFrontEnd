import {Dimensions, Platform} from 'react-native';

export const white = '#FFFFFF';
export const black = '#000000';

// Grayscale Colors
export const gray1 = '#222222';
export const gray2 = '#333333';
export const gray3 = '#4F4F4F';
export const gray4 = '#828282';
export const gray5 = '#BDBDBD';
export const gray6 = '#E0E0E0';
export const gray7 = '#F2F2F2';
export const gray8 = '#F9F9F9';

// Primary Colors
export const red = '#F24147';
export const blue = '#007AFF';
export const yellow = '#F8CF3E';

// Brand Colors
export const kakaoColor = '#FFDE00';
export const naverColor = '#58B93E';

// NotoSans Kr Font
export const notoSansKrBlack = 'NotoSansKR-Black';
export const notoSansKrBold = 'NotoSansKR-Bold';
export const notoSansKrMedium = 'NotoSansKR-Medium';
export const notoSansKrRegular = 'NotoSansKR-Regular';
export const notoSansKrThin = 'NotoSansKR-Thin';
export const notoSansKrLight = 'NotoSansKR-Light';

// Device Layout
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const perDeviceWidth = deviceWidth / 100;
export const perDeviceHeight = deviceHeight / 100;
export const isAndroid = Platform.OS === 'android';

/**
 * * Root Navigation Screen Name Definition
 */
export enum RootScreenName {
  HOME = '홈',
  LOCATION_SELECT_MODAL = '지역선택',
  TODO_DETAIL = '투두상세',
  TODO_WRITE_MODAL = '투두작성/수정',
}

/**
 * * Home Navigation Screen Name Definition
 */
export enum HomeScreenName {
  WEATHER = '날씨',
  TODO = '투두',
}
