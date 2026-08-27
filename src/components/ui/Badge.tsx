import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'amber' | 'slate' | 'green' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'red',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
  };

  const variantStyles = {
    red: 'bg-brand-50 text-brand-700 border border-brand-200/80',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full uppercase select-none',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
