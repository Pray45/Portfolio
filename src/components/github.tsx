"use client";

import { useEffect, useMemo, useState } from "react";
import { social } from "@/data/content";
import { Section } from "./section";

type DayItem = {
  date: string;
  level: number;
};

export function GithubSection() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; level: number } | null>(null);
  const [apiData, setApiData] = useState<{ total: string; days: DayItem[] } | null>(null);

  // Dynamically fetch live data from /api/github route on component mount
  useEffect(() => {
    async function fetchGithubData() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("API request failed");
        const data = await res.json();
        if (data && Array.isArray(data.days) && data.days.length > 0) {
          setApiData(data);
        }
      } catch (err) {
        console.warn("Failed to fetch live API data, using cached dataset:", err);
      }
    }

    fetchGithubData();
  }, []);

  // Compute weeks & calendar structure from API response or fallback data
  const { weeks, monthLabels, totalCount } = useMemo(() => {
    const sourceDays = apiData?.days
    const dayMap = new Map<string, number>();
    sourceDays?.forEach((d) => {
      dayMap.set(d.date, d.level);
    });

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);

    // Adjust startDate back to Sunday
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }

    const weeksArr: { date: string; level: number }[][] = [];
    let currentWeek: { date: string; level: number }[] = [];
    const months: { name: string; weekIdx: number }[] = [];
    let lastMonth = -1;

    const curr = new Date(startDate);
    let weekCounter = 0;

    while (curr <= today) {
      const dateStr = curr.toISOString().split("T")[0];
      const level = dayMap.get(dateStr) ?? 0;
      const month = curr.getMonth();

      if (month !== lastMonth && currentWeek.length === 0) {
        months.push({
          name: curr.toLocaleDateString("en-US", { month: "short" }).toLowerCase(),
          weekIdx: weekCounter,
        });
        lastMonth = month;
      }

      currentWeek.push({ date: dateStr, level });

      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
        weekCounter++;
      }

      curr.setDate(curr.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeksArr.push(currentWeek);
    }

    return {
      weeks: weeksArr,
      monthLabels: months,
      totalCount: apiData?.total
    };
  }, [apiData]);

  return (
    <Section id="github" label="open_source" title="GitHub Contributions">
      <div className="gh-card">
        {/* Top bar header */}
        <div className="gh-card-header">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-header-profile"
          >
            <svg className="gh-icon" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.372 0 11.997 0 17.3 3.438 21.795 8.205 23.38c.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.609-4.042-1.609C4.422 17.77 3.633 17.4 3.633 17.4c-1.087-.744.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.929 0-1.31.465-2.38 1.235-3.219-.135-.303-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.006 2.04.138 3 .404 2.28-1.551 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.608-2.805 5.623-5.475 5.918.42.36.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.284 0 .315.21.69.825.57C20.565 21.79 24 17.291 24 11.997 24 5.372 18.627 0 12 0" />
            </svg>
            <span>@Pray45</span>
          </a>
          <span className="gh-count">
            <strong style={{ color: "var(--grn)" }}>{totalCount}</strong> contributions in the last year
          </span>
        </div>

        {/* Contribution Graph Grid Container */}
        <div className="gh-graph-container">
          {/* Months header row */}
          <div className="gh-months-row">
            {monthLabels.map((m, i) => (
              <span
                key={i}
                className="gh-month-label"
                style={{ gridColumnStart: m.weekIdx + 1 }}
              >
                {m.name}
              </span>
            ))}
          </div>

          {/* Grid of days */}
          <div className="gh-grid">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="gh-week">
                {week.map((day) => (
                  <div
                    key={day.date}
                    className={`gh-day level-${day.level}`}
                    onMouseEnter={() => setHoveredCell({ date: day.date, level: day.level })}
                    onMouseLeave={() => setHoveredCell(null)}
                    title={`Activity level ${day.level} on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer & Legend */}
        <div className="gh-card-footer">
          <div className="gh-tooltip-info">
            {hoveredCell ? (
              <span>
                Activity level <strong style={{ color: "var(--fg)" }}>{hoveredCell.level}</strong> on {hoveredCell.date}
              </span>
            ) : (
              <span>{"// "}mhm.. dont judge me</span>
            )}
          </div>

          <div className="gh-legend">
            <span>Less</span>
            <div className="gh-day level-0" />
            <div className="gh-day level-1" />
            <div className="gh-day level-2" />
            <div className="gh-day level-3" />
            <div className="gh-day level-4" />
            <span>More</span>
          </div>
        </div>
      </div>

      <p className="cmt" style={{ fontSize: "0.84rem", marginTop: "18px" }}>
        {"// "}It&apos;s my own project... Don&apos;t think I&apos;m an open-source contributor &gt;_&lt;
      </p>
    </Section>
  );
}
