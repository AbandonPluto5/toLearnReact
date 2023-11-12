import { Button } from "antd-mobile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBilllist } from "@/store/modules/billStore";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBilllist());
  }, [dispatch]);
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
