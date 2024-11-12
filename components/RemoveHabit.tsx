'use client';

import React from 'react';
import { useHabits } from './HabitsContext';

const RemoveHabit: React.FC = () => {
  const { removeLastHabit } = useHabits();

  return (
    <div className="flex items-center mt-4">
      <button onClick={removeLastHabit} className="px-4 py-2 bg-red-500 text-white rounded">Remove Last Habit</button>
    </div>
  );
};

export default RemoveHabit;

