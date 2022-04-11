import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {isAndroid, RootScreenName} from 'assets/constant';
import React from 'react';
import {
  LocationSelectModalScreen,
  TodoDetailScreen,
  TodoWriteModalScreen,
} from 'screens';
import HomeNavigation from './HomeNavigation';

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const modalOptions: NativeStackNavigationOptions = isAndroid
  ? {
      animation: 'slide_from_bottom',
    }
  : {presentation: 'fullScreenModal'};

export default function RootNavigation() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <NativeStack.Screen
        options={{
          animation: 'none',
        }}
        name={RootScreenName.HOME}
        component={HomeNavigation}
      />
      <NativeStack.Screen
        name={RootScreenName.TODO_DETAIL}
        component={TodoDetailScreen}
      />
      <NativeStack.Screen
        options={modalOptions}
        name={RootScreenName.LOCATION_SELECT_MODAL}
        component={LocationSelectModalScreen}
      />
      <NativeStack.Screen
        options={modalOptions}
        name={RootScreenName.TODO_WRITE_MODAL}
        component={TodoWriteModalScreen}
      />
    </NativeStack.Navigator>
  );
}
