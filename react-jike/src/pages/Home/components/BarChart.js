import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const BarChart = ({ title }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Vue", "React", "Angular"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 40, 70],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return (
    <div
      ref={chartRef}
      id="main"
      style={{ width: "500px", height: "400px" }}
    ></div>
  );
};

export default BarChart;
