import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompletedTodos } from "./components/InCompletedTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickCompleted = (index) => {
    const newIncompletedTodos = [...incompleteTodos];
    newIncompletedTodos.splice(index, 1);

    const newCompletedTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompletedTodos);
    setCompleteTodos(newCompletedTodos);
  };

  const onClickBack = (index) => {
    const newCompletedTodos = [...completeTodos];
    newCompletedTodos.splice(index, 1);

    const newIncompletedTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompletedTodos);
    setIncompleteTodos(newIncompletedTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompletedTodos
        todos={incompleteTodos}
        onClickCompleted={onClickCompleted}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
