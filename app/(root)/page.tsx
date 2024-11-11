'use client';

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Example data for the chart
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Completed Habits',
      data: [3, 4, 5, 6, 5, 3, 4],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Home() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Read for 30 minutes', completed: false },
    { id: 2, name: 'Exercise', completed: false },
    { id: 3, name: 'Meditate', completed: false }
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <section className="flex flex-col justify-center items-center container space-y-6">
      <div className="card w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Today’s Habits</h2>
        <div className="space-y-3">
          {habits.map(habit => (
            <div key={habit.id} className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <Input 
                  type="checkbox" 
                  checked={habit.completed} 
                  onChange={() => toggleHabit(habit.id)} 
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className={`text-sm ${habit.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {habit.name}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="card w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Progress Analytics</h2>
        <div className="p-4">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
}
