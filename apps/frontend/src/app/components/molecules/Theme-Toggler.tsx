'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const htmlElem = document.documentElement;
    if (!darkMode) {
      htmlElem.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElem.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 px-4 rounded-md border bg-[var(--color-primary)] text-white"
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
