import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenName} from 'assets/constant';
import {ToDoIcon, UmbrellaIcon} from 'assets/svgs';
import {BottomTab} from 'components/layout';
import React from 'react';
import {TodoScreen, WeatherScreen} from 'screens';

const BottomTabStack = createBottomTabNavigator<HomeStackParamList>();

export default function HomeNavigation() {
  const initialRouteName = HomeScreenName.TODO;
  return (
    <BottomTabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={bottomTapProps => (
        <BottomTab<HomeScreenName>
          {...bottomTapProps}
          tabs={[
            {
              screenName: HomeScreenName.TODO,
              icon: ToDoIcon,
            },
            {
              screenName: HomeScreenName.WEATHER,
              icon: UmbrellaIcon,
            },
          ]}
        />
      )}
      initialRouteName={initialRouteName}>
      <BottomTabStack.Screen
        name={HomeScreenName.TODO}
        component={TodoScreen}
      />
      <BottomTabStack.Screen
        name={HomeScreenName.WEATHER}
        component={WeatherScreen}
      />
    </BottomTabStack.Navigator>
  );
}
