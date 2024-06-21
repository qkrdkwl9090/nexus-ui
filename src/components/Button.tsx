import React, { forwardRef } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  rounded?: boolean;
  severity?: 'primary' | 'success' | 'warning' | 'secondary' | 'info' | 'danger';
  size?: 'small' | 'medium' | 'large';
  raised?: boolean;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  outlined?: boolean;
  unstyled?: boolean;
  visible?: boolean;
  text?: boolean;
}

const severityClasses = {
  primary: 'bg-primary-50 border-primary-50 text-primary-50',
  success: 'bg-green-50 border-green-50 text-green-50',
  warning: 'bg-yellow-50 border-yellow-50 text-yellow-50',
  secondary: 'bg-gray-50 border-gray-50 text-gray-50',
  info: 'bg-purple-50 border-purple-50 text-purple-50',
  danger: 'bg-red-50 border-red-50 text-red-50'
};

const sizeClasses = {
  small: 'text-sm px-2 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-6 py-3'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      disabled = false,
      rounded = false,
      severity = 'primary',
      size = 'medium',
      raised = false,
      className = '',
      icon,
      type = 'button',
      outlined = false,
      unstyled = false,
      visible = true,
      text = false
    },
    ref
  ) => {
    if (!visible) return null;

    const severityClass = severityClasses[severity];
    const backgroundClass = outlined || text ? 'bg-transparent' : severityClass.split(' ')[0];
    const borderClass = outlined ? `${severityClass.split(' ')[1]} border` : '';
    const textColorClass = outlined || text ? severityClass.split(' ')[2] : 'text-white';
    const sizeClass = sizeClasses[size];
    const roundedClass = rounded ? 'rounded-full' : 'rounded-md';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const raisedClass = raised ? 'shadow-md' : '';
    const userClass = className;

    const combinedClass = unstyled
      ? className
      : `${backgroundClass} ${borderClass} ${textColorClass} ${sizeClass} ${roundedClass} ${disabledClass} ${raisedClass} ${userClass}`.trim();

    return (
      <button onClick={onClick} className={combinedClass} disabled={disabled} ref={ref} type={type}>
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
