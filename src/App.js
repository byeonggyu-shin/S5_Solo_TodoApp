// import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { GetTodo } from './util/useGetTodo';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(rgb(135,147,151), rgb(42,48,71)) no-repeat;
    height: 100vh;
  }
`;

function App() {
  const [todoList, setTodoList] = GetTodo();

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
      </TodoTemplate>
    </>
  );
}

export default App;
