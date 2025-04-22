// atoms/bodies.tsx
import React from 'react';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

// 🪶 BodyLg: For core content paragraphs, readable & comfy
export const BodyLg = ({ children, className }: BodyProps) => (
  <p
    className={`text-base font-normal text-primary sm:text-lg ${className ?? ''}`}
  >
    {children}
  </p>
);

// 🧾 Body: Default body copy – for general use
export const Body = ({ children, className }: BodyProps) => (
  <p
    className={`text-sm font-normal text-muted-foreground sm:text-base ${className ?? ''}`}
  >
    {children}
  </p>
);

// 🫥 BodySm: Subtext, descriptions, helper text
export const BodySm = ({ children, className }: BodyProps) => (
  <p
    className={`text-xs font-normal text-muted-foreground sm:text-sm ${className ?? ''}`}
  >
    {children}
  </p>
);

// 🧿 Caption: Tiny labels below items (e.g. timestamp, badge, etc.)
export const Caption = ({ children, className }: BodyProps) => (
  <span
    className={`text-[11px] font-medium text-gray-400 sm:text-xs ${className ?? ''}`}
  >
    {children}
  </span>
);

// 🧵 Label: Used for things like form labels or chip tags
export const Label = ({ children, className }: BodyProps) => (
  <label
    className={`text-xs font-semibold text-foreground tracking-wide ${className ?? ''}`}
  >
    {children}
  </label>
);
