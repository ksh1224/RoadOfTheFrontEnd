import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default function LocationSelectModalScreen() {
  return (
    <ScreenContainer>
      <Header>
        <FontText>검색창</FontText>
      </Header>
      <View style={styles.body}>
        <FontText>지역 리스트</FontText>
      </View>
    </ScreenContainer>
  );
}
