import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props extends IReactProps {
  style?: StyleProp<ViewStyle>;
}

const flex: ViewStyle = {flex: 1};

export default function ScreenContainer({children, style}: Props) {
  return <SafeAreaView style={[flex, style]}>{children}</SafeAreaView>;
}
