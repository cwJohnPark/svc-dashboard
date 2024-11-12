import React from "react";
import Charts from "@/components/Charts";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <>
      <main className="flex-grow ml-64 relative">
        <StatusBar />
        <Charts />
      </main>
    </>
  );
}
