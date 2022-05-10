import {atom, selector, AtomEffect, DefaultValue} from 'recoil';

export interface ITodo {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
    isDelete: boolean;
}
  
export const todosState = atom<ITodo[]>({
    key: 'todosState',
    default: [],
});

export const filteredTodosState = selector<ITodo[]>({
    key: 'filteredTodosState',
    get: ({get}) => {
        const todos = get(todosState);
        const filteredTodos = todos.filter(todo => !todo.isDelete);
        return filteredTodos;
    },
});