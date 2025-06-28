'use client';

import { useState } from 'react';

const moods = ['🙂', '😢', '😠', '😐', '😍'];

export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!selectedMood) return alert('Please select a mood');

    const entry = {
      mood: selectedMood,
      note,
      date: new Date().toISOString(),
    };

    const stored = JSON.parse(localStorage.getItem('moods') || '[]');
    stored.push(entry);
    localStorage.setItem('moods', JSON.stringify(stored));

    setSelectedMood(null);
    setNote('');
    alert('Mood saved!');
  };

  return (
    <main className="min-h-screen px-4 py-6 bg-neutral-100">
      <div className="max-w-screen-sm w-full mx-auto">
        <h1 className="text-xl font-semibold text-neutral-900 mb-4">
          How are you feeling today?
        </h1>

        <div className="flex gap-3 mb-6 overflow-x-auto">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`text-3xl px-4 py-2 border border-neutral-300 ${
                selectedMood === mood ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Add a note (optional)..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-neutral-300 p-2 h-24 bg-white text-sm resize-none focus:outline-none focus:border-black mb-4"
        />

        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-2 text-sm hover:bg-neutral-800 transition-colors"
        >
          Save Mood
        </button>
      </div>
    </main>
  );
}
