import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoodsList } from "./store/modules/takeaway";

import "./App.scss";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { foodsList, activeIndex } = useSelector((state) => state.foods);
  useEffect(() => {
    dispatch(fetchGoodsList());
  }, [dispatch]);
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu foodsList={foodsList} />;
          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item, index) => {
                if (activeIndex === index) {
                  return (
                    <FoodsCategory
                      key={item.tag}
                      // 列表标题
                      name={item.name}
                      // 列表商品
                      foods={item.foods}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  );
};

export default App;
