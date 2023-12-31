import { NavBar, DatePicker } from "antd-mobile";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

import "./index.scss";
import { useSelector } from "react-redux";
import _ from "lodash";
import DailyBill from "./components/DailyBill";

const Month = () => {
  const billList = useSelector((state) => state.bill.billList);
  // 类似vue的计算属性 根据月分组数据
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);
  console.log(monthGroup);
  const [dateVisible, setDateVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() =>
    dayjs(new Date()).format("YYYY-MM")
  );

  const [currentMonthList, setCurrentMonthList] = useState([]);

  const monthResult = useMemo(() => {
    // 支出 / 收入 / 结余
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((pre, item) => pre + item.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((pre, item) => pre + item.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);

  // 初始化时把当前月的账单渲染出来
  useEffect(() => {
    const nowDate = dayjs(new Date()).format("YYYY-MM");
    if (monthGroup[nowDate]) setCurrentMonthList(monthGroup[nowDate]);
    else setCurrentMonthList([]);
  }, [monthGroup]);

  const onConfirm = (date) => {
    setDateVisible(false);
    const formatDate = dayjs(date).format("YYYY-MM");
    setCurrentDate(formatDate);
    // 获取当月的数据
    if (monthGroup[formatDate]) setCurrentMonthList(monthGroup[formatDate]);
    else setCurrentMonthList([]);
  };

  // 当前月根据日分组数据
  const dayGroup = useMemo(() => {
    const dayBill = _.groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    );
    const keys = Object.keys(dayBill);
    return {
      dayBill,
      keys,
    };
  }, [currentMonthList]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate + ""}月账单</span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onClose={() => {
              setDateVisible(false);
            }}
            onConfirm={onConfirm}
          />
        </div>
        {/* 单日列表 */}
        {dayGroup.keys.map((key) => (
          <DailyBill
            key={key}
            date={key}
            billList={dayGroup.dayBill[key]}
          ></DailyBill>
        ))}
      </div>
    </div>
  );
};

export default Month;
