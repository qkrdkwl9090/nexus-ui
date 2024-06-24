---
id: inputText
title: InputText
---

# InputText Component

The `InputText` component is a customizable text input field that supports various features such as validation, styles, and controlled/uncontrolled states.

## Import

To use the `InputText` component, import it as follows:

```jsx
import InputText from '@tony9090/nexus-ui';
```

## Usage

Here's a basic example of how to use the InputText component:

### Default InputText

```jsx
import React from 'react';
import { InputText } from '@tony9090/nexus-ui';

export default function MyComponent() {
  return <InputText placeholder="Enter text here" />;
}
```

### Customized InputText

```jsx
import React from 'react';
import { InputText } from '@tony9090/nexus-ui';

export default function CustomInput() {
  return (
    <InputText
      autoFocus
      invalid={false}
      keyfilter={/^[a-zA-Z0-9]*$/}
      size="large"
      tooltip="Enter your username"
      unstyled={false}
      validateOnly={false}
      value=""
      variant="outlined"
      rounded
      onInput={(e) => console.log(e.target.value)}
    />
  );
}
```

## Props

The InputText component accepts the following props:

| Prop           | Type                                                                           | Default      | Description                                                                                        |
| -------------- | ------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------- |
| `autoFocus`    | `boolean`                                                                      | `false`      | When present, it specifies that the component should automatically get focus on load.              |
| `className`    | `string`                                                                       | `''`         | Style class of the element.                                                                        |
| `invalid`      | `boolean`                                                                      | `false`      | When present, it specifies that the component should have invalid state style.                     |
| `keyfilter`    | `RegExp` \| `(key: string) => boolean`                                         | `null`       | Format definition of the keys to block.                                                            |
| `placeholder`  | `string`                                                                       | `''`         | Placeholder text for the input field.                                                              |
| `size`         | `'small'` \| `'medium'` \| `'large'`                                           | `'medium'`   | Size of the input.                                                                                 |
| `tooltip`      | `string`                                                                       | `''`         | Content of the tooltip.                                                                            |
| `unstyled`     | `boolean`                                                                      | `false`      | When enabled, it removes component related styles in the core.                                     |
| `validateOnly` | `boolean`                                                                      | `false`      | When enabled, instead of blocking keys, input is validated internally to test against the pattern. |
| `value`        | `string`                                                                       | `''`         | The value of the component.                                                                        |
| `variant`      | `'filled'` \| `'outlined'`                                                     | `'outlined'` | Specifies the input variant of the component.                                                      |
| `rounded`      | `boolean`                                                                      | `false`      | Adds rounded corners to the input field.                                                           |
| `onInput`      | `(event: React.FormEvent<HTMLInputElement>, validatePattern: boolean) => void` | `undefined`  | Callback to invoke while typing value on input.                                                    |
| `onChange`     | `(event: React.ChangeEvent<HTMLInputElement>) => void`                         | `undefined`  | Callback to invoke on value change.                                                                |

## Example

Here's an example of an InputText component used in a form:

```jsx
import React, { useState } from 'react';
import { InputText } from '@tony9090/nexus-ui';

const FormExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="p-4 border rounded-md shadow-sm">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        Username
      </label>
      <InputText
        id="username"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your username"
        variant="outlined"
        size="medium"
        rounded
        tooltip="Enter a unique username"
      />
    </form>
  );
};

export default FormExample;
```

This example demonstrates how to create a form with an InputText component, providing a controlled input with validation and tooltip support.
