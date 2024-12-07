import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (_?: any) => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={`p-2 rounded-full bg-black text-white flex items-center justify-center ${className}`}
      onClick={onClick}
      {...props} // Spread other props dynamically
    >
      {children}
    </button>
  );
};

export default Button;