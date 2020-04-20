import React, { Component } from "react";
import styled from "styled-components";

class Clock extends Component {
  state = {
    date: new Date(),
  };
  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurDate>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurDate>
        <CurDay>
          {date.getDay() === 0
            ? "Sunday"
            : date.getDay() === 1
            ? "Monday"
            : date.getDay() === 2
            ? "Tuesday"
            : date.getDay() === 3
            ? "wednesday"
            : date.getDay() === 4
            ? "Thursday"
            : date.getDay() === 5
            ? "Friday"
            : "Saturday"}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
          &nbsp;:&nbsp;
          {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
        </CurTime>
      </Container>
    );
  }
  getDate() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }
}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;
const CurDate = styled.div`
  font-size: 20px;
`;

const CurDay = styled.div`
  font-style: italic;
  font-size: 30px;
`;

const CurTime = styled.div``;

export default Clock;
