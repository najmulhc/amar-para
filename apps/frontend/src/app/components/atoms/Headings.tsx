// atoms/headings.tsx
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

// 🧠 H1: Primary screen title – clean & bold, but not massive
export const H1 = ({ children, className }: HeadingProps) => (
  <h1
    className={`text-2xl font-bold tracking-tight text-primary sm:text-2xl md:text-3xl ${className ?? ''}`}
  >
    {children}
  </h1>
);

// 📌 H2: Section headers
export const H2 = ({ children, className }: HeadingProps) => (
  <h2
    className={`text-lg font-semibold text-primary sm:text-xl md:text-2xl ${className ?? ''}`}
  >
    {children}
  </h2>
);

// 📝 H3: Card titles / sub-sections
export const H3 = ({ children, className }: HeadingProps) => (
  <h3
    className={`text-base font-medium text-secondary sm:text-lg ${className ?? ''}`}
  >
    {children}
  </h3>
);

// 🔖 H4: Modal titles or label headers
export const H4 = ({ children, className }: HeadingProps) => (
  <h4
    className={`text-sm font-semibold text-primary sm:text-base ${className ?? ''}`}
  >
    {children}
  </h4>
);

// 💬 H5: Micro text headers
export const H5 = ({ children, className }: HeadingProps) => (
  <h5
    className={`text-xs font-medium text-subtle sm:text-sm ${className ?? ''}`}
  >
    {children}
  </h5>
);

// 🫧 H6: Tiny uppercase labels
export const H6 = ({ children, className }: HeadingProps) => (
  <h6
    className={`text-[10px] font-semibold uppercase tracking-wide text-border sm:text-xs ${className ?? ''}`}
  >
    {children}
  </h6>
);
