import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScreenName} from 'assets/constant';
import React from 'react';

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NativeStack.Screen name={RootScreenName.HOME} />
    </NativeStack.Navigator>
  );
}
