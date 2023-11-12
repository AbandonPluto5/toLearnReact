import { Button, DatePicker, Input, NavBar } from "antd-mobile";
import Icon from "@/components/Icon";
import "./index.scss";
import classNames from "classnames";
import { billListData } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "@/store/modules/billStore";
import dayjs from "dayjs";

const New = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("pay");
  const [money, setMoney] = useState(0);
  // 收集账单类型
  const [useFor, setUseFor] = useState("");
  const saveBill = () => {
    // 收集表单数据
    const data = {
      type: type,
      money: type === "pay" ? -money : +money,
      date: date,
      useFor: useFor,
    };

    dispatch(addBill(data));
  };

  const [date, setDate] = useState();
  const [dateVisible, setDateVisible] = useState(false);
  const onConfirm = (value) => {
    console.log(value);
    setDate(value);
    setDateVisible(false);
  };
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(type === "pay" && "selected")}
            onClick={() => setType("pay")}
          >
            支出
          </Button>
          <Button
            className={classNames(type === "income" && "selected")}
            shape="rounded"
            onClick={() => setType("income")}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>
                {dayjs(date).format("YYYY-MM-DD")}
              </span>
              {/* 时间选择器 */}
              <DatePicker
                className="kaDate"
                title="记账日期"
                visible={dateVisible}
                max={new Date()}
                onConfirm={onConfirm}
                onCancel={() => setDateVisible(false)}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={(value) => setMoney(value)}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {/* 数据区域 */}
        {billListData[type].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames(
                        "item",
                        useFor === item.type && "selected"
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          保 存
        </Button>
      </div>
    </div>
  );
};

export default New;
