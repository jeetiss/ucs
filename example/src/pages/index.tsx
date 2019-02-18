import React, { useState } from "react";
import Layout from "../components/Layout";
import CView from "../components/Counter";
import Input from "../components/Input";
import useControlledState from "ucs";
import Example from "../components/Example";

const Counter = ({
  value,
  onChange,
  defaultValue
}: {
  value?: number;
  onChange?: any;
  defaultValue?: number;
}) => {
  const [state, setState] = useControlledState(value, onChange, defaultValue);

  return <CView value={state} setter={setState} />;
};

const Controll = ({
  children,
  disabled
}: {
  children: ({ value: number, onChange: any }) => JSX.Element;
  disabled?: boolean;
}) => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Input
        value={number}
        disabled={disabled}
        onChange={e => setNumber(Number.parseInt(e.target.value))}
      />

      {children({ value: number, onChange: setNumber })}
    </div>
  );
};

const examples = [
  {
    title: "Uncontrolled",
    code: `const Counter = ({ value, onChange, defaultValue }) => {
  const [state, setState] = useControlledState(
    value, onChange, defaultValue
  );

  return (
    <button onClick={() => setState(state - 1)}>-</button>
    <span>{state}</span>
    <button onClick={() => setState(state + 1)}>+</button>
  )
}

export default () => (
  <Counter defaultValue={0} />
)`,
    demo: <Counter defaultValue={0} />
  },
  {
    title: "Controlled",
    code: `const Counter = ({ value, onChange, defaultValue }) => {
  const [state, setState] = useControlledState(
    value, onChange, defaultValue
  );

  return (
    <button onClick={() => setState(state - 1)}>-</button>
    <span>{state}</span>
    <button onClick={() => setState(state + 1)}>+</button>
  )
}

export default () => {
  const [value, setValue] = useState(0)

  return (
    <Counter value={0} onChange={setValue} />
  )
}`,
    demo: (
      <Controll>
        {({ value, onChange }) => <Counter value={value} onChange={onChange} />}
      </Controll>
    )
  },
  {
    title: "Uncontrolled (subscribe on change)",
    code: `const Counter = ({ value, onChange, defaultValue }) => {
  const [state, setState] = useControlledState(
    value, onChange, defaultValue
  );

  return (
    <button onClick={() => setState(state - 1)}>-</button>
    <span>{state}</span>
    <button onClick={() => setState(state + 1)}>+</button>
  )
}

export default () => (
  <Counter onChange={console.log} />
)
`,
    demo: (
      <Controll disabled>
        {({ onChange }) => <Counter defaultValue={0} onChange={onChange} />}
      </Controll>
    )
  },
  {
    title: "Controlled (ignore changes)",
    code: `const Counter = ({ value, onChange, defaultValue }) => {
  const [state, setState] = useControlledState(
    value, onChange, defaultValue
  );

  return (
    <button onClick={() => setState(state - 1)}>-</button>
    <span>{state}</span>
    <button onClick={() => setState(state + 1)}>+</button>
  )
}

export default () => {
  const [value, setValue] = useState(10)

  return (
    <Counter value={0} />
  )
}
`,
    demo: <Controll>{({ value }) => <Counter value={value} />}</Controll>
  }
];

const IndexPage = () => (
  <Layout>
    <h1>Controlled State Hook</h1>

    {examples.map(example => (
      <Example key={example.title} {...example} />
    ))}
  </Layout>
);

export default IndexPage;
