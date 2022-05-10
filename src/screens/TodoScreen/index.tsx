import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {Button, ScrollView, StyleSheet, View, Switch, TouchableOpacity} from 'react-native';
import {RootScreenName} from 'assets/constant';
import {useRecoilState, useRecoilValue} from 'recoil';
import { todosState, filteredTodosState, ITodo } from '../../state';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  todo: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
  },
  completeTitle: {
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  description: {
    fontSize: 10,
    marginLeft: 10,
  },
});

export default function TodoScreen(props: any) {
  const [ todos, setTodos ] = useRecoilState<ITodo[]>(todosState);
  const filteredTodos = useRecoilValue<ITodo[]>(filteredTodosState);

  function openModal() {
    props.navigation.push(RootScreenName.TODO_WRITE_MODAL);
  }
  function goDetail(id: number) {
    props.navigation.push(RootScreenName.TODO_DETAIL, {id});
  }
  function toggleComplete(id: number, isComplete: boolean) {
    const newTodos = todos.map(todo => {
      if(id === todo.id) {
        return { ...todo, isComplete };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  return (
    <ScreenContainer>
      <Header>
        <FontText>투두</FontText>
      </Header>
      <ScrollView style={styles.body}>
        {filteredTodos.map((todo) => {
          return (
            <View
              style={styles.todo}
              key={todo.id}
            >
              <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => goDetail(todo.id)} style={{flex: 1}}>
                  <FontText style={todo.isComplete ? styles.completeTitle : styles.title}>{todo.title}</FontText>
                </TouchableOpacity>
                <Switch
                  onValueChange={(value) => toggleComplete(todo.id, value)}
                  value={todo.isComplete}
                ></Switch>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <Button title='추가' onPress={openModal} />
    </ScreenContainer>
  );
}
