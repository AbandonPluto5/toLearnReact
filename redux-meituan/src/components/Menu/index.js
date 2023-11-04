import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { setActiveIndex } from "../../store/modules/takeaway";

const Menu = ({ foodsList }) => {
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));
  const { activeIndex } = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(setActiveIndex(index))}
            key={item.tag}
            className={classNames(
              "list-menu-item",
              activeIndex === index && "active"
            )}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
