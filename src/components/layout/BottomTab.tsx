import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgProps} from 'react-native-svg';
import {FontText} from 'components/element';
import {black, gray5, gray6, gray8} from 'assets/constant';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

interface Props<T> extends BottomTabBarProps {
  style?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  tabs: {
    name?: string;
    icon?: React.FC<SvgProps>;
    screenName: T[keyof T] & string;
  }[];
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopColor: gray6,
    borderTopWidth: 1,
  },
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

export default function BottomTab<T>({
  style,
  tabStyle,
  tabs,
  navigation,
  state,
}: Props<T>) {
  return (
    <SafeAreaView edges={['bottom']} style={[styles.container, style]}>
      {tabs.map(({name, screenName, icon: Icon}) => {
        const isActive = state.routeNames[state.index] === screenName;
        return (
          <Pressable
            key={screenName}
            onPress={() => navigation.navigate(screenName)}
            style={[
              styles.tab,
              {backgroundColor: isActive ? undefined : gray8},
              tabStyle,
            ]}>
            {Icon && (
              <Icon
                color={gray5}
                fill={isActive ? black : gray5}
                width={32}
                height={32}
              />
            )}
            <FontText color={isActive ? black : gray5}>
              {name || screenName}
            </FontText>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}
