import {Platform} from 'react-native';
import {
  checkMultiple,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';

const {permissionList}: any = Platform.select({
  ios: {
    permissionList: [PERMISSIONS.IOS.LOCATION_ALWAYS],
  },
  android: {
    permissionList: [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
  },
});

const permissionCheck = async () => {
  try {
    const resultList = await checkMultiple(permissionList);
    permissionList.forEach(
      (
        permission:
          | keyof typeof PERMISSIONS.IOS
          | keyof typeof PERMISSIONS.ANDROID,
      ) => {
        switch (resultList[permission]) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      },
    );
  } catch (error) {
    console.log('permissionCheck error', error);
  }
};

export const permissionRequestAll = async () => {
  try {
    const resultList = await requestMultiple(permissionList);
    permissionList.forEach(
      (
        permission:
          | keyof typeof PERMISSIONS.IOS
          | keyof typeof PERMISSIONS.ANDROID,
      ) => {
        switch (resultList[permission]) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      },
    );
  } catch (error) {
    console.log('permissionCheck error', error);
  }
};

export default {
  permissionCheck,
  permissionRequestAll,
};
