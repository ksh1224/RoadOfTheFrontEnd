import {FontText} from 'components/element';
import {Header, ScreenContainer} from 'components/layout';
import React from 'react';
import {Button, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import { todosState, ITodo } from '../../state';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
  },
  header: {
    textAlign: 'center',
    flex: 1
  },
  backBtn: {
    position: 'absolute',
    paddingLeft: 10
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

export default function TodoWriteModalScreen(props: any) {
  const [ todos, setTodos ] = useRecoilState<ITodo[]>(todosState);
  const [ title, setTitle ] = React.useState<string>('');
  const [ description, setDescription ] = React.useState<string>('');
  
  function addTodo() {
    const todo: ITodo = {
      id: todos.length,
      title,
      description,
      isComplete: false,
      isDelete: false,
    }
    setTodos([...todos, todo]);
    goBack();
  }
  function goBack() {
    props.navigation.goBack();
  }

  return (
    <ScreenContainer>
      <Header>
        <FontText style={styles.header}>투두 작성/수정</FontText>
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <FontText>X</FontText>
        </TouchableOpacity>
      </Header>
      <View style={styles.body}>
        <FontText>제목</FontText>
        <TextInput
          style={styles.titleInput}
          onChangeText={setTitle}
          value={title}
        />
        <FontText>설명</FontText>
        <TextInput
          style={styles.descInput}
          onChangeText={setDescription}
          value={description}
          multiline = {true}
        />
      </View>
      <Button
        onPress={addTodo}
        title='생성'
      />
    </ScreenContainer>
  );
}
