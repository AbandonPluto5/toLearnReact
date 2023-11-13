import { Component } from "react";

class Counter extends Component {
  // 1. 定义状态
  state = {
    count: 0,
  };

  // 定义事件回调修改状态
  setCount = () => {
    // 修改状态数据
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>;
  }
}

const App = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
