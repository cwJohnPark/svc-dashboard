"use client";

import React, { useEffect, useState } from "react";
import LineChartPlot from "@/components/charts/LineChartPlot";
import SingleDataPointPlot from "./charts/single/SingleDataPointPlot";
import { ChartDataModel } from "@/app/libs/model";

const Charts = () => {
  const [data, setData] = useState<ChartDataModel>();

  const fetchData = async () => {
    const response = await fetch("/data/api");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    console.log("Rendering Charts");
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <SingleDataPointPlot label="Data 1" value={data?.["Data 1"]} />
          <SingleDataPointPlot label="Data 2" value={data?.["Data 2"]} />
          <SingleDataPointPlot label="Data 3" value={data?.["Data 3"]} />
          <SingleDataPointPlot label="Data 4" value={data?.["Data 4"]} />
          <SingleDataPointPlot label="Data 5" value={data?.["Data 5"]} />
          <SingleDataPointPlot label="Data 6" value={data?.["Data 6"]} />
        </div>
      </section>
      <section>
        <div className="flex m-4 gap-2">
          <SingleDataPointPlot
            label="Boolean 1"
            value={data?.["Boolean 1"] ? "True" : "False"}
          />
          <SingleDataPointPlot
            label="Boolean 2"
            value={data?.["Boolean 2"] ? "True" : "False"}
          />
          <SingleDataPointPlot
            label="Boolean 3"
            value={data?.["Boolean 3"] ? "True" : "False"}
          />
          <SingleDataPointPlot label="String 1" value={data?.["String 1"]} />
        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className="w-full h-[540px] bg-slate-800 rounded">
          <LineChartPlot data={data?.samples ?? []} />
        </div>
      </section>
    </>
  );
};

export default Charts;