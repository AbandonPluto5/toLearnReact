import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      Layout
      <Outlet></Outlet>
      <Button color="primary">全局按钮</Button>
      <div className="purple">
        <Button color="primary">局部按钮</Button>
      </div>
    </div>
  );
};

export default Layout;
