'use client'

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useHabits } from './HabitsContext';

const AddHabit: React.FC = () => {
  const { addHabit } = useHabits();
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      addHabit(newHabit);
      setNewHabit('');
    }
  };

  return (
    <div className="flex items-center mt-4">
      <Input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Add new habit"
        className="w-full mr-2 p-2 border rounded"
      />
      <button onClick={handleAddHabit} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
    </div>
  );
};

export default AddHabit;

