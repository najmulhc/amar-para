'use client';

import { useState } from 'react';

type BasicToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function BasicToggle({
  defaultChecked = false,
  onChange,
}: BasicToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <button
      onClick={toggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
        checked ? 'bg-accent-coral' : 'bg-accent-blue'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
