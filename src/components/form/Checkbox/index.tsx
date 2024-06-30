import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle, ChangeEvent } from 'react';

export interface CheckboxProps {
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  inputId?: string;
  invalid?: boolean;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
  tooltip?: string;
  unstyled?: boolean;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      autoFocus = false,
      checked,
      className = '',
      disabled = false,
      id,
      inputId,
      invalid = false,
      name,
      readOnly = false,
      required = false,
      tooltip,
      unstyled = false,
      width = 20,
      height = 20,
      rounded = false,
      onChange
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState<boolean>(checked || false);
    const internalInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus && internalInputRef.current) {
        internalInputRef.current.focus();
      }
    }, [autoFocus]);

    useEffect(() => {
      if (typeof checked !== 'undefined') {
        setInternalChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (readOnly) return;

      const newChecked = e.target.checked;

      if (typeof checked === 'undefined') {
        setInternalChecked(newChecked);
      }

      if (onChange) {
        onChange(e);
      }
    };

    useImperativeHandle(ref, () => ({
      ...internalInputRef.current!,
      get checked() {
        return internalInputRef.current?.checked ?? false;
      }
    }));

    const parseDimension = (dim: string | number) => (typeof dim === 'number' ? `${dim}px` : dim);

    const parsedWidth = parseDimension(width);
    const parsedHeight = parseDimension(height);

    const style = {
      width: parsedWidth,
      height: parsedHeight
    };

    const combinedClass = unstyled ? className : `relative inline-flex items-center justify-center ${className}`;

    const boxClass = unstyled
      ? ''
      : `flex items-center justify-center w-full h-full border ${
          internalChecked ? 'bg-blue-500' : 'bg-white'
        } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${
          invalid ? 'border-red-500' : 'border-gray-300'
        } ${rounded ? 'rounded-md' : ''}`;

    const svgSize = `calc(${parsedWidth} * 0.6)`;

    return (
      <div ref={ref} className={combinedClass} id={id} title={tooltip} style={style}>
        <input
          type="checkbox"
          id={inputId}
          name={name}
          ref={internalInputRef}
          checked={internalChecked}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={invalid}
          className="hidden"
        />
        <div
          className={boxClass}
          onClick={() => {
            if (disabled || readOnly) return;
            internalInputRef.current?.click();
          }}
        >
          {internalChecked && !unstyled && (
            <svg className="text-white" width={svgSize} height={svgSize} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
