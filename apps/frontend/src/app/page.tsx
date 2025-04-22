'use client'
import React, { useEffect } from 'react'
import BasicToggle from './components/atoms/ToggleBtn'
import { H1, H2, H3 } from './components/atoms/Headings';
import { Body } from './components/atoms/Bodies';
import { Input } from './components/atoms/Input';

export function toggleTheme(isDark: boolean) {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;
  const theme = isDark ? 'dark' : '';

  html.setAttribute('data-theme', theme);
  localStorage.setItem('data-theme', theme);
}

// this will get the theme from the local storage in the first render
export function loadSavedTheme() {
  if (typeof document === 'undefined') return;

  const saved = localStorage.getItem('theme') || '';
  document.documentElement.setAttribute('data-theme', saved);
}

const HomePage = () => {
  useEffect(() => {
    loadSavedTheme();
  }
    , []); 
  return (
    <main className='bg-bg min-h-screen  '> 
      <H1 className="text-primary">This is the heading</H1>
      <Body> this is a body textwe are taking this very hard  </Body>
      <BasicToggle  onChange={toggleTheme}  />
    </main>
  )
}

export default HomePage