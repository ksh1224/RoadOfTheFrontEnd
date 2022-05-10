import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React, { Component } from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootScreenName} from 'assets/constant';
import {useRecoilState} from 'recoil';
import { todosState, ITodo } from '../../state';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  todo: {
    margin: 10,
  },
  title: {
    fontSize: 15,
  },
  description: {
    fontSize: 10,
    marginLeft: 10,
  },
});

export default function TodoScreen(props: any) {
  const [ todos, setTodos ] = useRecoilState<ITodo[]>(todosState);

  function openModal() {
    props.navigation.push(RootScreenName.TODO_WRITE_MODAL);
  }

  return (
    <ScreenContainer>
      <Header>
        <FontText>투두</FontText>
      </Header>
      <View style={styles.body}>
        {todos.map((todo) => {
          return (
            <View style={styles.todo} key={todo.id}>
              <FontText style={styles.title}>{todo.title}</FontText>
              <FontText style={styles.description}>{todo.description}</FontText>
            </View>
          )
        })}
      </View>
      <Button title='추가' onPress={openModal} />
    </ScreenContainer>
  );
}
