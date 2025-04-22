// atoms/Input.tsx
import React from 'react';
import { FieldValues, UseFormRegister, FieldError } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type?: string; // Input type (e.g., text, email, password, etc.)
  placeholder?: string;
  className?: string;
  register: UseFormRegister<FieldValues>; // RHF register method
  errors: FieldError | undefined; // RHF error object for validation messages
  required?: boolean; // Mark field as required for validation
  defaultValue?: string; // Default value for the input
}

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  className,
  register,
  errors,
  required = false,
  defaultValue,
}: InputProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-primary"
      >
        {label}
      </label>
      <input
        type={type}
        id={name} 
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, { required: required && `${label} is required.` })}
        className={`mt-1 px-4 py-2 w-full rounded-md border-2 ${
          errors ? 'border-error' : 'border-gray-300'
        } text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue`}
      />
      {errors && <p className="mt-1 text-sm text-error">{errors.message}</p>}
    </div>
  );
};
