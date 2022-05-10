import {atom, selector, AtomEffect, DefaultValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ITodo {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
    isDelete: boolean;
}

const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
    setSelf(
        AsyncStorage.getItem(node.key).then((savedValue) =>
            savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
        ),
    )

    onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
            AsyncStorage.removeItem(node.key)
        } else {
            AsyncStorage.setItem(node.key, JSON.stringify(newValue))
        }
    })
}
  
export const todosState = atom<ITodo[]>({
    key: 'todosState',
    default: [],
    effects: [persistAtom],
});

export const filteredTodosState = selector<ITodo[]>({
    key: 'filteredTodosState',
    get: ({get}) => {
        const todos = get(todosState);
        const filteredTodos = todos.filter(todo => !todo.isDelete);
        return filteredTodos;
    },
});