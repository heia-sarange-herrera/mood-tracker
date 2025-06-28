'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';

export default function StatsPage() {
  const [data, setData] = useState<{ mood: string; count: number }[]>([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('moods') || '[]');
    const counts: Record<string, number> = {};

    raw.forEach((entry: { mood: string }) => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
    });

    const formatted = Object.entries(counts).map(([mood, count]) => ({
      mood,
      count,
    }));

    setData(formatted);
  }, []);

  return (
    <main className="min-h-screen px-4 py-6 bg-neutral-100">
      <div className="max-w-screen-sm w-full mx-auto">
        <h1 className="text-xl font-semibold mb-6">Mood Stats</h1>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="mood" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
