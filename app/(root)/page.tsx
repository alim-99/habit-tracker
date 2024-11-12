'use client';
import { Input } from "@/components/ui/input";
import { useHabits } from '@/components/HabitsContext';
import AddHabit from "@/components/AddHabit";
import RemoveHabit from "@/components/RemoveHabit";

export default function Home() {
  const { habits, toggleHabit } = useHabits();

  return (
    <section className="flex flex-col justify-center items-center container space-y-6 px-4 sm:px-6 lg:px-8">
      <div className="card w-full mt-10 max-w-lg sm:max-w-2xl shadow-lg rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">Today’s Habits</h2>
        <div className="space-y-3">
          {habits.map(habit => (
            <div key={habit.id} className="flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg">
              <label className="flex items-center space-x-3">
                <Input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(habit.id)}
                  className={`w-5 h-5 rounded focus:ring-2 focus:ring-blue-300 ${
                    habit.completed ? 'text-blue-600' : 'text-blue-400 dark:text-blue-500'
                  }`}
                  aria-label={`Mark ${habit.name} as completed`}
                />
                <span className={`text-sm ${habit.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {habit.name}
                </span>
              </label>
            </div>
          ))}
        </div>
        <AddHabit />
        <RemoveHabit />
      </div>
    </section>
  );
}


