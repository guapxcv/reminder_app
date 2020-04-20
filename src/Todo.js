import React, { Component } from "react";
import styled from "styled-components";
import todoList from "./TodoList";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    todoList: [],
  };

  handleClickRemove = (index) => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
      this.setState(
        (state) => ({
          todoList: [
            ...this.state.todoList.slice(0, index),
            ...this.state.todoList.slice(index + 1),
          ],
        }),
        () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      );
    }
  };

  handleInputKeyPress = (evt) => {
    const {
      target: { value },
    } = evt;
    if (evt.key === "Enter") {
      this.setState(
        (state) => ({ todoList: [...state.todoList, value] }),
        () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      );
      evt.target.value = "";
    }
  };

  render() {
    return (
      <Container>
        <Input onKeyPress={this.handleInputKeyPress}></Input>
        <TodoList
          todoList={this.state.todoList}
          handleClickRemove={this.handleClickRemove}
        ></TodoList>
      </Container>
    );
  }
  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    });
  }
}

const Container = styled.div`
  margin-top: 15px;
  text-align: center;
`;
const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 5px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
  font-weight: 300;
`;

export default Todo;
