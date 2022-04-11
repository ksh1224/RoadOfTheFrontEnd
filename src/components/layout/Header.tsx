import {gray6} from 'assets/constant';
import React from 'react';
import {StyleProp, ViewStyle, View, StyleSheet} from 'react-native';

interface Props extends IReactProps {
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: gray6,
    borderBottomWidth: 1,
  },
});

export default function Header({children, style}: Props) {
  const justifyContent: ViewStyle = {
    justifyContent:
      Array.isArray(children) && children.length > 1
        ? 'space-between'
        : 'center',
  };

  return <View style={[styles.header, justifyContent, style]}>{children}</View>;
}
