import React, { useState, useEffect, useRef, forwardRef } from 'react';

export type KeyFilterType = RegExp | ((key: string) => boolean);

export interface InputTextProps {
  autoFocus?: boolean;
  className?: string;
  invalid?: boolean;
  keyfilter?: KeyFilterType;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  tooltip?: string;
  unstyled?: boolean;
  validateOnly?: boolean;
  value?: string;
  variant?: 'filled' | 'outlined';
  rounded?: boolean;
  onInput?: (event: React.FormEvent<HTMLInputElement>, validatePattern: boolean) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      autoFocus = false,
      className = '',
      invalid = false,
      keyfilter,
      size = 'medium',
      tooltip,
      placeholder,
      unstyled = false,
      validateOnly = false,
      value = '',
      variant = 'outlined',
      rounded = false,
      onInput,
      onChange
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(value);
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (typeof value !== 'undefined') {
        setInternalValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (autoFocus && internalRef.current) {
        internalRef.current.focus();
      }
    }, [autoFocus]);

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value;
      let validatePattern = true;

      if (keyfilter && !validateOnly) {
        const key = inputValue.slice(-1);
        if (typeof keyfilter === 'function') {
          validatePattern = keyfilter(key);
        } else if (keyfilter instanceof RegExp) {
          validatePattern = keyfilter.test(key);
        }
      }

      if (validateOnly && keyfilter && inputValue) {
        if (typeof keyfilter === 'function') {
          validatePattern = inputValue.split('').every(keyfilter);
        } else if (keyfilter instanceof RegExp) {
          validatePattern = keyfilter.test(inputValue);
        }
      }

      if (validatePattern) {
        setInternalValue(inputValue);
        if (onInput) onInput(event, validatePattern);
      } else {
        event.preventDefault();
      }
    };

    const sizeClass = {
      small: 'text-sm px-2 py-1',
      medium: 'text-base px-3 py-2',
      large: 'text-lg px-4 py-3'
    };

    const defaultClass = unstyled
      ? ''
      : `form-input ${
          variant === 'outlined' ? 'border border-gray-300' : 'bg-gray-100'
        } ${invalid ? 'border-red-500' : ''} ${rounded ? 'rounded-md' : ''} ${
          sizeClass[size]
        } focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent`;
    const combinedClass = `${defaultClass} ${className}`;

    return (
      <input
        ref={ref}
        className={combinedClass}
        value={internalValue}
        placeholder={placeholder}
        onInput={handleInput}
        onChange={onChange}
        title={tooltip}
        aria-invalid={invalid}
        autoFocus={autoFocus}
      />
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
