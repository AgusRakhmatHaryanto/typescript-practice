export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemsProps = {
  todo: Todo;
  toggleCompleted: (todoId: number) => void;
};

export type TodosProps = {
  todos: Todo[];
  toggleCompleted: (todoId: number) => void;
};

// export type CssProps = {
//   [key: string]: React.CSSProperties;
// };

export type TogleCompletedProps = (todoId: number) => void;
