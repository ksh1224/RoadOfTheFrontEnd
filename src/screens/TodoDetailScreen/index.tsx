import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {StyleSheet, View, ScrollView, Button, TextInput, Text, TouchableOpacity} from 'react-native';
import { useRecoilState } from 'recoil';
import { todosState, ITodo } from '../../state';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 10,
  },
  header: {
    textAlign: 'center',
    flex: 1
  },
  backBtn: {
    position: 'absolute',
    paddingLeft: 10
  },
  title: {
    fontSize: 12,
  },
  content: {
    fontSize: 15,
    padding: 10,
  },
  btnContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  titleInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  descInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top'
  },
});

export default function TodoDetailScreen(props: any) {
  const id = props.route?.params?.id;
  const [ todos, setTodos ] = useRecoilState<ITodo[]>(todosState);
  const todo = todos.find((el: ITodo) => el.id === id);
  const [ editable, setEditable ] = React.useState(false);
  const [ title, setTitle ] = React.useState<string>(todo?.title || '');
  const [ description, setDescription ] = React.useState<string>(todo?.description || '');

  function goBack() {
    props.navigation.goBack();
  }
  function updateTodo() {
    const newTodo = todos.map(el => {
      if(el.id === id) {
        return { ...el, title, description };
      } else {
        return el;
      }
    });
    setTodos(newTodo);
    setEditable(false);
  }
  function deleteTodo() {
    const newTodo = todos.map(el => {
      if(el.id === id) {
        return { ...el, isDelete: true };
      } else {
        return el;
      }
    });
    setTodos(newTodo);
    goBack();
  }

  return (
    <ScreenContainer>
      <Header>
        <FontText style={styles.header}>TODO DETAIL</FontText>
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <FontText>X</FontText>
        </TouchableOpacity>
      </Header>
      {editable ? (
        <View style={styles.body}>
          <ScrollView>
            <FontText>제목</FontText>
            <TextInput
              style={styles.titleInput}
              value={title}
              onChangeText={setTitle}
            />
            <FontText>설명</FontText>
            <TextInput
              style={styles.descInput}
              value={description}
              onChangeText={setDescription}
              multiline = {true}
            />
          </ScrollView>
          <Button title="저장" onPress={updateTodo} />
        </View>
      ) : (
        <View style={styles.body}>
          <ScrollView>
            <FontText style={styles.title}>id</FontText>
            <FontText style={styles.content}>{todo?.id}</FontText>
            <FontText style={styles.title}>제목</FontText>
            <FontText style={styles.content}>{todo?.title}</FontText>
            <FontText style={styles.title}>설명</FontText>
            <FontText style={styles.content}>{todo?.description}</FontText>
            <FontText style={styles.title}>완료여부</FontText>
            <FontText style={styles.content}>{todo?.isComplete ? '완료' : '미완료'}</FontText>
          </ScrollView>
          <View style={styles.btnContainer}>
            <View style={{flex: 1}}>
              <Button title="삭제" color="#ccc" onPress={deleteTodo} />
            </View>
            <View style={{flex: 1}}>
              <Button title="수정" onPress={() => setEditable(true)} />
            </View>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
}
