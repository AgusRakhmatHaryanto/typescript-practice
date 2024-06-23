import React from "react";
import TodoItem from "./TodoItem";
import { TodosProps } from "./Type";
export default function Todos({ todos, toggleCompleted }: TodosProps) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};
