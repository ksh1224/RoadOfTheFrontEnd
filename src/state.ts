import {atom} from 'recoil';

export interface ITodo {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
    isDelete: boolean;
}
  
export const todosState = atom<ITodo[]>({
    key: 'todosState',
    default: []
});