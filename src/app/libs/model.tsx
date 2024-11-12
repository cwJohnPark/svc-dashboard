export interface ApiDataModel {
  "Data 1": number;
  "Data 2": number;
  "Data 3": number;
  "Data 4": number;
  "Data 5": number;
  "Data 6": number;
  "Boolean 1": boolean;
  "Boolean 2": boolean;
  "Boolean 3": boolean;
  "String 1": string;
  "Large Data 100ms 10000Samples": number[];
}

export interface ChartDataModel {
	"Data 1": number;
  "Data 2": number;
  "Data 3": number;
  "Data 4": number;
  "Data 5": number;
  "Data 6": number;
  "Boolean 1": boolean;
  "Boolean 2": boolean;
  "Boolean 3": boolean;
  "String 1": string;
	"samples": LineChartData[];
}

export type LineChartData = {
	index: number,
  value: number;
};
