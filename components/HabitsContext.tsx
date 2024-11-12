'use client'

import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode } from 'react';

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

interface HabitsContextType {
  habits: Habit[];
  addHabit: (name: string) => void;
  removeLastHabit: () => void;
  toggleHabit: (id: number) => void;
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export const HabitsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const storedHabits = localStorage.getItem('habits');
    return storedHabits ? JSON.parse(storedHabits) : [
      { id: 1, name: 'Read for 30 minutes', completed: false },
      { id: 2, name: 'Exercise', completed: false },
      { id: 3, name: 'Meditate', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name: string) => {
    setHabits([...habits, { id: habits.length + 1, name, completed: false }]);
  };

  const removeLastHabit = () => {
    setHabits(habits.slice(0, -1));
  };

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit, removeLastHabit, toggleHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitsProvider');
  }
  return context;
};

