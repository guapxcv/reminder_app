import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

export default function TodoList({ todoList, handleClickRemove }) {
  return (
    <Container>
      {todoList.map((todo, index) => (
        <TodoRow
          key={index}
          todo={todo}
          index={index}
          handleClickRemove={handleClickRemove}
        ></TodoRow>
      ))}
    </Container>
  );
}
const Container = styled.div`
  background: transparent;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
