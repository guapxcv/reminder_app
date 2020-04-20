import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import Todo from "./Todo";

export default function Content() {
  return (
    <Container>
      <Clock></Clock>
      <Context>오늘의 할일은 무엇인가요?</Context>
      <Todo></Todo>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 470px;
  height: calc(100% - 33px);
  color: white;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Context = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 100;
  color: silver;
  text-align: center;
`;
