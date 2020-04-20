import React, { Component } from "react";
import styled from "styled-components";

export default class TodoRow extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.todo === nextProps.todo) {
      return false;
    }
    return true;
  }
  render() {
    const { index, todo, handleClickRemove } = this.props;
    return (
      <Container>
        <Text>{todo}</Text>
        <Button onClick={() => handleClickRemove(index)}>&nbsp; X &nbsp;</Button>
      </Container>
    );
  }
}
const Container = styled.div`
  margin: 10px, 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const Text = styled.span`
  /* display: inline-block; */
  cursor: pointer;
  margin: 6px;
  font-size: 22px;
  font-weight: 400;
  &:hover {
    opacity: 0.5;
  }
`;

const Button = styled.span`
  margin-left: 10px;
  text-align: center;
  border: 1px solid;
  background: transparent;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
