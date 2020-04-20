import React, { Component } from "react";
import styled from "styled-components";
import Content from "./Content";

class App extends Component {
  state = {
    query: "ipad",
  };
  render() {
    return (
      <Container query={this.state.query}>
        <Input
          placeholder='테마를 입력하세요'
          onKeyPress={this.handleInputKeyPress}
        ></Input>
        <Content></Content>
      </Container>
    );
  }
  handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      this.setState({
        query: event.target.value,
      });
      event.target.value = "";
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.6) 70%,
      rgba(20, 20, 20, 0.9)
    ),
    url(https://source.unsplash.com/random/2560x1600?${(props) => props.query});
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  color: white;
`;

export default App;
