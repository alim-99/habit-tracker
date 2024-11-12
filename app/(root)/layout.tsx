import React, { Children } from 'react';
import { HabitsProvider } from '@/components/HabitsContext';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <HabitsProvider>
      <Navbar />
      {children}
    </HabitsProvider>
  )
}
