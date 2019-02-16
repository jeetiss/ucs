# ucs

> another controlled state hook

[![NPM](https://img.shields.io/npm/v/ucs.svg)](https://www.npmjs.com/package/ucs)

## Install

```bash
npm install ucs
```

## Usage

```jsx
import React from "react";
import useControlledState from "ucs";

const Toggler = ({ value, onChange, defaultValue }) => {
  const [state, setState] = useControlledState(() => value || defaultValue);

  return (
    <button onClick={() => setState(!state)}>{state ? "on" : "off"}</button>
  );
};
```

## License

MIT © [jeetiss](https://github.com/jeetiss)
