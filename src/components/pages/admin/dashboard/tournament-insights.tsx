'use client'

import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: 10,
    uv: 40,
  },
  {
    name: 11,
    uv: 42,
  },
  {
    name: 12,
    uv: 60,
  },
  {
    name: 13,
    uv: 44,
  },
  {
    name: 14,
    uv: 55,
  },
  {
    name: 15,
    uv: 80,
  },
  {
    name: 16,
    uv: 43,
  },
  {
    name: 17,
    uv: 50,
  },
  {
    name: 18,
    uv: 76,
  },
  {
    name: 19,
    uv: 63,
  },
  {
    name: 20,
    uv: 48,
  },
  {
    name: 21,
    uv: 60,
  },
  {
    name: 22,
    uv: 50,
  },
  {
    name: 23,
    uv: 60,
  },
];

function TournamentInsights() {
  return (
    <div className="col-span-2 p-7 bg-background rounded-lg border-2 border-muted">
      <h2 className="text-foreground text-xl capitalize">
        Tournament Registrations
      </h2>
      <div className="mt-5 h-full max-h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="linear"
              style={{color: "F15D2F"}}
              dataKey="uv"
              stroke="#EF5F00"
              fill="rgba(241, 93, 47, 0.24)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TournamentInsights;
