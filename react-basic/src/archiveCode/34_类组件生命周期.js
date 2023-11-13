import { Component, useState } from "react";

class Son extends Component {
  // 组件挂载时执行
  componentDidMount() {
    console.log("组件挂载了，可以请求数据");
    this.timer = setInterval(() => {
      console.log("定时器运行中");
    }, 1000);
  }
  // 组件卸载时执行
  componentWillUnmount() {
    console.log("组件卸载了");
    // 清除定时器
    clearInterval(this.timer);
  }
  // 组件更新时执行
  componentDidUpdate() {
    console.log("组件更新了");
  }
  state = {
    count: 0,
  };
  updateCom = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        this is Son
        <button onClick={this.updateCom}>更新</button>
      </div>
    );
  }
}

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      {show && <Son />}
      <button onClick={() => setShow(!show)}>切换显示Son</button>
    </div>
  );
};

export default App;
