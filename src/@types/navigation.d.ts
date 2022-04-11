import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeScreenName, RootScreenName} from 'assets/constant';

declare global {
  //Root Stack Navigation Types
  type RootStackParamList = {
    [RootScreenName.HOME]: undefined;
    [RootScreenName.TODO_WRITE_MODAL]: {
      todoId?: number;
      todo?: ITodo;
      onCreate?: (todo: ITodo) => void;
      onUpdate?: (todo: ITodo) => void;
    };
    [RootScreenName.TODO_DETAIL]: {
      todoId?: number;
      todo?: ITodo;
      onUpdate?: (todo: ITodo) => void;
      onDelete?: (todoId: number) => void;
    };
    [RootScreenName.LOCATION_SELECT_MODAL]: {
      onSelect?: ({
        SIG_CD: number,
        en: string,
        kr: string,
        long: number,
        lat: number,
      }) => void;
    };
  };
  type RootStackScreenProps<T = RootScreenName> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
  type RootStackNavigationProps<T = RootScreenName> = NativeStackNavigationProp<
    RootStackParamList,
    T
  >;
  type RootRouteProps<T extends keyof RootScreenName> = RouteProp<
    RootStackParamList,
    T
  >;

  //Home Stack Navigation Types
  type HomeStackParamList = {
    [HomeScreenName.TODO]: undefined;
    [HomeScreenName.WEATHER]: undefined;
  };
  type HomeStackScreenProps<T extends keyof HomeScreenName> =
    BottomTabScreenProps<HomeStackParamList, T>;
  type RootStackNavigationProps<T = RootScreenName> = BottomTabNavigationProp<
    RootStackParamList,
    T
  >;
  type HomeRouteProps<T extends keyof HomeScreenName> = RouteProp<
    HomeStackParamList,
    T
  >;
}
