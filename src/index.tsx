import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'components/navigation';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {permissionRequestAll} from 'utils/permissionUtil';

const App = () => {
  useEffect(() => {
    // 필요한 모든 권한 요청
    permissionRequestAll();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
