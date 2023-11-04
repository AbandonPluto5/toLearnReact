import "./index.css";
import classNames from "classnames";

const style = {
  color: "blue",
  fontSize: "24",
};

const show = true;
function App() {
  return (
    <div className="App">
      <span style={{ color: "red", fontSize: 24 }}>this is span</span>
      <span style={style}>this is span2</span>
      <span className="foo">this is span3</span>
      <span className={`foo ${show && "active"}`}>this is span4</span>
      <span className={classNames("foo", { active: show })}>this is span5</span>
    </div>
  );
}

export default App;
