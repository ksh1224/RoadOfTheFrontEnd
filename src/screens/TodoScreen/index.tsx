import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default function TodoScreen() {
  return (
    <ScreenContainer>
      <Header>
        <FontText>투두</FontText>
      </Header>
      <View style={styles.body}>
        <FontText>투두 리스트</FontText>
      </View>
    </ScreenContainer>
  );
}
