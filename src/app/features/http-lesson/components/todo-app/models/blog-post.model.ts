export interface TodoResponseModel {
  todos: TodoModel[];
}

export interface TodoModel {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
