import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default function TodoWriteModalScreen() {
  return (
    <ScreenContainer>
      <Header>
        <FontText>투두 작성/수정</FontText>
      </Header>
      <View style={styles.body}>
        <FontText>정보 입력</FontText>
      </View>
    </ScreenContainer>
  );
}
