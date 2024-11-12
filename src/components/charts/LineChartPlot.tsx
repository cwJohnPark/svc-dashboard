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
  Label,
} from "recharts";

const LineChartPlot = ({ data }: { data: LineChartData[] }) => {
  function getTicks(data: LineChartData[]): number[] {
    // range divided by 5
    return [0, 2000, 4000, 6000, 8000, 10000];
  }

  return (
    <>
      <div className="font-light text-2xl px-12 pb-8">
        Large Data 100ms 10,000 samples
      </div>
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
            tickMargin={12}
            interval={"preserveStartEnd"}
            axisLine={true}
            ticks={getTicks(data)}
          >
            {" "}
            <Label value="Time(ms)" offset={0} position="insideBottom" />
          </XAxis>

          <YAxis
            label={{ value: "Amplitude", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line
            dot={false}
            type="monotone"
            dataKey="value"
            stroke="#000000"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartPlot;
