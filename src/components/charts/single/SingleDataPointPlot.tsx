import React from "react";

type SingleDataPointPlotProps<T> = {
  label: string;
  value: T | undefined;
};

export default function SingleDataPointPlot<T>({
  label,
  value,
}: SingleDataPointPlotProps<T>) {
  return (
    <div className="flex-1 px-2 justify-center w-16 bg-slate-800 shadow rounded">
      <div className="pt-2">
        <p className="text-white font-bold">{label}</p>
        <p className="py-4"> {String(value)}</p>
      </div>
    </div>
  );
}
