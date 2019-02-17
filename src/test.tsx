import * as React from "react";
import { mount } from "enzyme";
import useControlledState from "./";

describe("useControlledState", () => {
  it("renders correctly 1", () => {
    const wrapper = mount(<Input defaultValue="test1" />);
    expect(wrapper.text()).toBe("test1");
  });

  it("renders correctly 2", () => {
    const wrapper = mount(<Input value="test2" />);
    expect(wrapper.text()).toBe("test2");
  });

  it("renders correctly 3", () => {
    const wrapper = mount(<Input defaultValue="random" />);
    expect(wrapper.find("input")).toHaveLength(1);
    wrapper.find("input").simulate("change", { target: { value: "test3" } });
    expect(wrapper.text()).toBe("test3");
  });
});

type Props<T> = {
  value?: T;
  onChange?: (value?: T) => void;
  defaultValue?: T;
};

const Input = ({ value, onChange, defaultValue }: Props<string>) => {
  const [state, setState] = useControlledState(value, onChange, defaultValue);

  return (
    <div>
      <span>{state}</span>
      <input
        value={state}
        onChange={(e: any) => {
          console.log("simulation works", e.target.value);
          setState(e.target.value);
        }}
      />
    </div>
  );
};
