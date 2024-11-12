import { LineChartData } from "@/app/libs/model";
import React, { useEffect } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartPlot = ({ data }: { data: LineChartData[] }) => {
  useEffect(() => {
    console.log("Rendering Line Chart", data);
  }, [data]);

  function getTicks(data: LineChartData[]): number[] {
    console.log(data.length);
    return [0, 2000, 4000, 6000, 8000, 10000];
  }

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey={"index"}
            tickMargin={8}
            interval={"preserveStartEnd"}
            axisLine={true}
            ticks={getTicks(data)}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            dot={false}
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartPlot;
