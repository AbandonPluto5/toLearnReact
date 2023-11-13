import { Component } from "react";
// 1. 父传子: 父组件在子组件标签上绑定属性 子组件通过this.props接收
// 2. 子传父: 父组件给子组件传递方法 子组件调用父组件的方法进行传参

class Son extends Component {
  render() {
    return (
      <div>
        this is Son{this.props.msg}
        <button onClick={() => this.props.onGetSonMsg("this is son msg")}>
          传递参数给Parent
        </button>
      </div>
    );
  }
}

class Parent extends Component {
  state = {
    msg: "this is parent msg",
  };
  getSonMsg = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div>
        this is Parent
        <Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} />
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="app">
      <Parent />
    </div>
  );
};

export default App;
