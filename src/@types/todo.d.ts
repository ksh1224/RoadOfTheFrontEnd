declare global {
  interface ITodo {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
    isDelete: boolean;
  }
}
