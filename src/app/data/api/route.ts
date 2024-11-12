import { ApiDataModel, ChartDataModel, LineChartData } from "@/app/libs/model";
import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/SCV_Data_sample.json",
    "utf-8"
  );
  const data: ApiDataModel = JSON.parse(file);
  data["Data 1"] = round(Math.random() * 100);
  data["Data 2"] = round(Math.random() * 100);
  data["Data 3"] = round(Math.random() * 100);
  data["Data 4"] = round(Math.random() * 100);
  data["Data 5"] = round(Math.random() * 100);
  data["Data 6"] = round(Math.random() * 100);
  data["Boolean 1"] = Math.random() > 0.5;
  data["Boolean 2"] = Math.random() > 0.5;
  data["Boolean 3"] = Math.random() > 0.5;
  // convert ApiDataModel to ChartDataModel

  const samples: LineChartData[] = data["Large Data 100ms 10000Samples"].map(
    (sample, i) => {
      return {
        value: sample,
        index: i+1,
      };
    }
  );

  const revisedData: ChartDataModel = {
    ...data,
    samples: samples,
  };

  return Response.json(revisedData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const round = (value: number) => {
  return Math.round(value * 100) / 100;
};
