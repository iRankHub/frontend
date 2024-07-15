"use client";
import Image from "next/image";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const data = [{ name: "Group A", value: 400 }];

const COLORS = ["#15B26C", "#00C49F", "#FFBB28", "#FF8042"];

function ProgressView({ value }: { value: number }) {
  const data = [
    { name: "Score", value: value },
    { name: "Empty", value: 100 - value },
  ];

  const COLORS = ["#15B26C", "#F5F5F5"];

  return (
    <div className="w-full grid place-content-center py-10">
      <div className="relative w-48 h-36">
        <PieChart width={200} height={100}>
          <Pie
            data={data}
            cx={96}
            cy={96}
            startAngle={180}
            endAngle={0}
            innerRadius={76}
            outerRadius={86}
            cornerRadius={5}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-lg text-gray-500">Total</div>
          <div className="text-3xl font-bold">{value}%</div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="bg-[#15B26C]/30 text-green-600 px-3 py-2 rounded-md font-bold inline-flex items-center text-sm">
          <Image
            src={"/static/checkmark.svg"}
            alt="checkmark"
            width={20}
            height={20}
            className="mr-2"
          />
          Excellent
        </div>
        <div className="text-primary text-xl flex items-center font-bold">
          <svg
            className="w-6 h-6 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          score
        </div>
      </div>
    </div>
  );
}

export default ProgressView;
