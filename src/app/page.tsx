import React from "react";
import Charts from "@/components/Charts";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow ml-64 relative">
          <Charts />
        </main>
      </div>
    </>
  );
}
