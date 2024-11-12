'use client';

import { useHabits } from '@/components/HabitsContext';
import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Progress: React.FC = () => {
  const { habits } = useHabits();

  const completedData = habits.reduce((acc, habit) => {
    if (habit.completed) acc[6] += 1; // assuming it's today's count
    return acc;
  }, [3, 4, 5, 6, 5, 3, 4]);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Completed Habits',
        data: completedData,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Habit Completion',
      },
    },
  };

  return (
    <div className="card w-full mx-auto mt-10 max-w-xs md:max-w-md lg:max-w-lg sm:max-w-2xl bg-white shadow-lg rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">Progress Analytics</h2>
      <div className="flex items-center justify-center p-2 sm:p-4">
        <div className="w-full h-64">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Progress;

