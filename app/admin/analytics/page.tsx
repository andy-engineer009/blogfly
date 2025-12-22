"use client";

import { useState } from "react";

// Mock data for visitors
const dailyData = [
  { day: "Mon", visitors: 1200 },
  { day: "Tue", visitors: 1900 },
  { day: "Wed", visitors: 3000 },
  { day: "Thu", visitors: 2780 },
  { day: "Fri", visitors: 1890 },
  { day: "Sat", visitors: 2390 },
  { day: "Sun", visitors: 3490 },
];

const weeklyData = [
  { week: "Week 1", visitors: 12000 },
  { week: "Week 2", visitors: 15000 },
  { week: "Week 3", visitors: 18000 },
  { week: "Week 4", visitors: 22000 },
];

const todayVisitors = 3490;
const yesterdayVisitors = 2390;
const weeklyTotal = weeklyData.reduce((sum, week) => sum + week.visitors, 0);

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"daily" | "weekly">("daily");
  const [graphType, setGraphType] = useState<"bar" | "line">("bar");

  const maxDailyValue = Math.max(...dailyData.map((d) => d.visitors));
  const maxWeeklyValue = Math.max(...weeklyData.map((w) => w.visitors));

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Analytics</p>
          <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Website Visitors</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedPeriod("daily")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                selectedPeriod === "daily"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setSelectedPeriod("weekly")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                selectedPeriod === "weekly"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
            >
              Weekly
            </button>
          </div>
          <div className="flex gap-2 border-l border-[var(--border-color)] pl-3">
            <button
              onClick={() => setGraphType("bar")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                graphType === "bar"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
              title="Bar Chart"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>
            <button
              onClick={() => setGraphType("line")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                graphType === "line"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
              title="Line Chart"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Today */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Today</p>
              <p className="mt-2 text-3xl font-black text-[var(--foreground)]">{todayVisitors.toLocaleString()}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Visitors</p>
            </div>
            <div className="rounded-xl bg-green-500/20 p-3 text-green-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Yesterday */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Yesterday</p>
              <p className="mt-2 text-3xl font-black text-[var(--foreground)]">{yesterdayVisitors.toLocaleString()}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Visitors</p>
            </div>
            <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Weekly Total */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">This Week</p>
              <p className="mt-2 text-3xl font-black text-[var(--foreground)]">{weeklyTotal.toLocaleString()}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Total Visitors</p>
            </div>
            <div className="rounded-xl bg-purple-500/20 p-3 text-purple-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-lg sm:p-8">
        <h2 className="mb-6 text-xl font-bold text-[var(--foreground)]">
          {selectedPeriod === "daily" ? "Daily Visitors (Last 7 Days)" : "Weekly Visitors (Last 4 Weeks)"}
        </h2>

        {/* Chart Container */}
        <div className="mt-8">
          {selectedPeriod === "daily" ? (
            graphType === "bar" ? (
              <div className="space-y-4">
                {/* Chart Bars */}
                <div className="flex h-[300px] items-end justify-between gap-2 sm:gap-4">
                  {dailyData.map((data, index) => {
                    const height = (data.visitors / maxDailyValue) * 100;
                    return (
                      <div key={index} className="flex flex-1 flex-col items-center gap-2">
                        <div className="group relative flex w-full flex-col items-center justify-end">
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-[var(--accent)] to-[#fb4fa0] transition-all duration-500 hover:opacity-80"
                            style={{ height: `${height}%`, minHeight: "8px" }}
                          />
                          <div className="absolute -top-8 hidden rounded-lg bg-[var(--foreground)] px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {data.visitors.toLocaleString()}
                          </div>
                        </div>
                        <span className="text-xs font-medium text-[var(--muted)]">{data.day}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Y-axis Labels */}
                <div className="flex justify-between border-t border-[var(--border-color)] pt-4 text-xs text-[var(--muted)]">
                  <span>0</span>
                  <span>{(maxDailyValue / 2).toLocaleString()}</span>
                  <span>{maxDailyValue.toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Line Chart */}
                <div className="relative h-[300px] w-full">
                  <svg className="h-full w-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={`${y}%`}
                        x2="100%"
                        y2={`${y}%`}
                        stroke="var(--border-color)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    ))}
                    
                    {/* Area under line */}
                    <path
                      d={`M 0,${300 - (dailyData[0].visitors / maxDailyValue) * 300} ${dailyData
                        .map(
                          (data, index) =>
                            `L ${(index / (dailyData.length - 1)) * 1000},${300 - (data.visitors / maxDailyValue) * 300}`
                        )
                        .join(" ")} L 1000,300 L 0,300 Z`}
                      fill="url(#lineGradient)"
                    />
                    
                    {/* Line */}
                    <polyline
                      points={dailyData
                        .map(
                          (data, index) =>
                            `${(index / (dailyData.length - 1)) * 1000},${300 - (data.visitors / maxDailyValue) * 300}`
                        )
                        .join(" ")}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data Points */}
                    {dailyData.map((data, index) => {
                      const x = (index / (dailyData.length - 1)) * 1000;
                      const y = 300 - (data.visitors / maxDailyValue) * 300;
                      return (
                        <g key={index}>
                          <circle
                            cx={x}
                            cy={y}
                            r="6"
                            fill="var(--accent)"
                            stroke="white"
                            strokeWidth="2"
                            className="hover:r-8 transition-all cursor-pointer"
                          />
                          <title>{data.visitors.toLocaleString()} visitors</title>
                        </g>
                      );
                    })}
                  </svg>
                  
                  {/* X-axis Labels */}
                  <div className="absolute -bottom-6 flex w-full justify-between text-xs text-[var(--muted)]">
                    {dailyData.map((data, index) => (
                      <span key={index} className="font-medium">
                        {data.day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Y-axis Labels */}
                <div className="flex justify-between border-t border-[var(--border-color)] pt-4 text-xs text-[var(--muted)]">
                  <span>0</span>
                  <span>{(maxDailyValue / 2).toLocaleString()}</span>
                  <span>{maxDailyValue.toLocaleString()}</span>
                </div>
              </div>
            )
          ) : (
            graphType === "bar" ? (
              <div className="space-y-4">
                {/* Chart Bars */}
                <div className="flex h-[300px] items-end justify-between gap-4 sm:gap-6">
                  {weeklyData.map((data, index) => {
                    const height = (data.visitors / maxWeeklyValue) * 100;
                    return (
                      <div key={index} className="flex flex-1 flex-col items-center gap-2">
                        <div className="group relative flex w-full flex-col items-center justify-end">
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-[var(--accent)] to-[#fb4fa0] transition-all duration-500 hover:opacity-80"
                            style={{ height: `${height}%`, minHeight: "8px" }}
                          />
                          <div className="absolute -top-8 hidden rounded-lg bg-[var(--foreground)] px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {data.visitors.toLocaleString()}
                          </div>
                        </div>
                        <span className="text-xs font-medium text-[var(--muted)]">{data.week}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Y-axis Labels */}
                <div className="flex justify-between border-t border-[var(--border-color)] pt-4 text-xs text-[var(--muted)]">
                  <span>0</span>
                  <span>{(maxWeeklyValue / 2).toLocaleString()}</span>
                  <span>{maxWeeklyValue.toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Line Chart */}
                <div className="relative h-[300px] w-full">
                  <svg className="h-full w-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <defs>
                      <linearGradient id="weeklyLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={`${y}%`}
                        x2="100%"
                        y2={`${y}%`}
                        stroke="var(--border-color)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    ))}
                    
                    {/* Area under line */}
                    <path
                      d={`M 0,${300 - (weeklyData[0].visitors / maxWeeklyValue) * 300} ${weeklyData
                        .map(
                          (data, index) =>
                            `L ${(index / (weeklyData.length - 1)) * 1000},${300 - (data.visitors / maxWeeklyValue) * 300}`
                        )
                        .join(" ")} L 1000,300 L 0,300 Z`}
                      fill="url(#weeklyLineGradient)"
                    />
                    
                    {/* Line */}
                    <polyline
                      points={weeklyData
                        .map(
                          (data, index) =>
                            `${(index / (weeklyData.length - 1)) * 1000},${300 - (data.visitors / maxWeeklyValue) * 300}`
                        )
                        .join(" ")}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data Points */}
                    {weeklyData.map((data, index) => {
                      const x = (index / (weeklyData.length - 1)) * 1000;
                      const y = 300 - (data.visitors / maxWeeklyValue) * 300;
                      return (
                        <g key={index}>
                          <circle
                            cx={x}
                            cy={y}
                            r="6"
                            fill="var(--accent)"
                            stroke="white"
                            strokeWidth="2"
                            className="hover:r-8 transition-all cursor-pointer"
                          />
                          <title>{data.visitors.toLocaleString()} visitors</title>
                        </g>
                      );
                    })}
                  </svg>
                  
                  {/* X-axis Labels */}
                  <div className="absolute -bottom-6 flex w-full justify-between text-xs text-[var(--muted)]">
                    {weeklyData.map((data, index) => (
                      <span key={index} className="font-medium">
                        {data.week}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Y-axis Labels */}
                <div className="flex justify-between border-t border-[var(--border-color)] pt-4 text-xs text-[var(--muted)]">
                  <span>0</span>
                  <span>{(maxWeeklyValue / 2).toLocaleString()}</span>
                  <span>{maxWeeklyValue.toLocaleString()}</span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4">
          <p className="text-xs font-medium text-[var(--muted)]">Average Daily</p>
          <p className="mt-1 text-2xl font-bold text-[var(--foreground)]">
            {Math.round(dailyData.reduce((sum, d) => sum + d.visitors, 0) / dailyData.length).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4">
          <p className="text-xs font-medium text-[var(--muted)]">Peak Day</p>
          <p className="mt-1 text-2xl font-bold text-[var(--foreground)]">
            {dailyData.find((d) => d.visitors === maxDailyValue)?.day || "N/A"}
          </p>
        </div>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4">
          <p className="text-xs font-medium text-[var(--muted)]">Growth Rate</p>
          <p className="mt-1 text-2xl font-bold text-green-500">
            +{Math.round(((todayVisitors - yesterdayVisitors) / yesterdayVisitors) * 100)}%
          </p>
        </div>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4">
          <p className="text-xs font-medium text-[var(--muted)]">Total This Month</p>
          <p className="mt-1 text-2xl font-bold text-[var(--foreground)]">67,000</p>
        </div>
      </div>
    </div>
  );
}

