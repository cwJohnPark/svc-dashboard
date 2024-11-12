import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

type SingleDataPointPlotProps<T> = {
  label: string;
  value: T | undefined;
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

export default function SingleDataPointPlot<T>({
  label,
  value,
}: SingleDataPointPlotProps<T>) {
  return (
    <div
      key={String(value)}
      className="py-2 px-4 mx-2 w-full bg-stone-100 dark:bg-slate-800 shadow rounded"
    >
      <div className="pt-2">
        <p className="font-light text-md text-slate-800 dark:text-white">
          {label}
        </p>
        <p
          className={`py-4 text-xl text-slate-700 dark:text-white dark:hover:text-white 
						animate-toggleIn`}
        >
          {String(value ?? "0")}
        </p>
      </div>
    </div>
  );
}
