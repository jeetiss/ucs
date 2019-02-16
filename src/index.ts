import {
  useState,
  useEffect,
  useDebugValue,
  Dispatch,
  SetStateAction
} from "react";

function isDefined(variable: any) {
  return typeof variable !== "undefined";
}

function format<T>([localValue, globalValue]: [T, T]) {
  const isControlled = isDefined(globalValue) ? "controlled" : "uncontrolled";
  const value = isDefined(globalValue) ? globalValue : localValue;
  return `State is ${isControlled} | Value is ${value}`;
}

function useControlledState<T>(
  value: T,
  onChange: (value: T) => void,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [localValue, setLocalValue] = useState(() =>
    isDefined(value) ? value : defaultValue
  );

  useDebugValue([localValue, value], format);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(localValue);
    }
  }, [localValue]);

  return [isDefined(value) ? value : localValue, setLocalValue];
}

export default useControlledState;
