import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeScreenName, RootScreenName} from 'assets/constant';

declare global {
  type RootStackParamList = {
    [RootScreenName.HOME]: undefined;
  };

  type RootStackProps<T = RootScreenName.HOME> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;

  type RootRouteProp<T extends keyof HomeScreenName.HOME> = RouteProp<
    RootStackParamList,
    T
  >;

  type HomeStackParamList = {
    [HomeScreenName.TODO]: undefined;
    [HomeScreenName.WEATHER]: undefined;
  };

  type HomeStackProps<T extends keyof HomeScreenName.WEATHER> =
    NativeStackScreenProps<HomeStackParamList, T>;

  type HomeRouteProp<T extends keyof HomeScreenName.WEATHER> = RouteProp<
    HomeStackParamList,
    T
  >;
}
