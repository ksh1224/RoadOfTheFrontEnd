import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'components/navigation';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import {permissionRequestAll} from 'utils/permissionUtil';

const App = () => {
  useEffect(() => {
    // 필요한 모든 권한 요청
    permissionRequestAll();
  }, []);
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
