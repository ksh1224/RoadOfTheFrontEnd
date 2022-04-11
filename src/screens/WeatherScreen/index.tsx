import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default function WeatherScreen() {
  return (
    <ScreenContainer>
      <Header>
        <FontText>날씨</FontText>
      </Header>
      <View style={styles.body}>
        <FontText>날씨 정보</FontText>
      </View>
    </ScreenContainer>
  );
}
