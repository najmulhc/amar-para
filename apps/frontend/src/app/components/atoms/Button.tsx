// atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Optional click handler for listening to click events
  href?: string; // If the button is used as a link, provide the href
  type?: 'button' | 'submit' | 'reset'; // Type for native button element
}

// Reusable Button component for links or button actions
export const Button = ({
  children,
  className,
  onClick,
  href,
  type = 'button',
}: ButtonProps) => {
  if (href) {
    // Link-style button
    return (
      <a
        href={href}
        className={`inline-block text-center px-4 py-2 rounded-md font-semibold text-primary bg-accent-blue hover:bg-accent-coral transition-all ${className}`}
      >
        {children}
      </a>
    );
  }

  // Regular button with click handler
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-block text-center px-4 py-2 rounded-md font-semibold text-primary bg-accent-blue hover:bg-accent-coral transition-all ${className}`}
    >
      {children}
    </button>
  );
};
