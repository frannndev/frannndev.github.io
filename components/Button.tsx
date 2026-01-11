import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // px-3 is 12px, py-2 is 8px
  const baseStyles = "inline-flex items-center justify-center px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-100",
    outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-900 dark:border-white dark:text-white dark:hover:bg-slate-800",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;