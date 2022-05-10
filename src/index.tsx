import {NavigationContainer} from '@react-navigation/native';
import { FontText } from 'components/element';
import {RootNavigation} from 'components/navigation';
import React, {Suspense, useEffect} from 'react';
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
          <Suspense fallback={<FontText>Loading...</FontText>}>
            <RootNavigation />
          </Suspense>
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
