import { Component } from "react";
import ErrorComponent from "./ErrorComponent";

class LifeCycleSample extends Component {
  state = {
    count: 0,
    color: null,
  };

  constructor(props) {
    super(props);
    console.log(props);
    console.log("concstructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      console.log("색상 상태값 변경!");
      return { color: nextProps.color, count: prevState.count + 1 }; // 지정된 값이 state의 값에서 변경
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count & (4 !== 0);
  }

  // 업데이트 전상태호출
  getSnapshotBeforeUpdate(props, prevState) {
    return "before";
  }

  componentDidUpdate(props, state, snapshot) {
    console.log("componentDidUpdate");
    console.log(props, state);
    console.log("snapshot", snapshot);
  }

  render() {
    return (
      <div>
        <ErrorComponent>
          {/* {this.props.missing.value}; */}
        </ErrorComponent>
          <h1>라이프사이클</h1>
          <h2>변경횟수 : {this.state.count}</h2>
      </div>
    );
  }
}

export default LifeCycleSample;
