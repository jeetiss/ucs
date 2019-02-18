import { useState, useDebugValue, useEffect } from 'react';

function isDefined(variable) {
    return typeof variable !== "undefined";
}
function format(_a) {
    var localValue = _a[0], globalValue = _a[1];
    var isControlled = isDefined(globalValue) ? "controlled" : "uncontrolled";
    var value = isDefined(globalValue) ? globalValue : localValue;
    return "State is " + isControlled + " | Value is " + value;
}
function useControlledState(value, onChange, defaultValue) {
    var _a = useState(function () {
        return isDefined(value) ? value : defaultValue;
    }), localValue = _a[0], setLocalValue = _a[1];
    useDebugValue([localValue, value], format);
    useEffect(function () {
        if (typeof onChange === "function") {
            onChange(localValue);
        }
    }, [localValue]);
    return [isDefined(value) ? value : localValue, setLocalValue];
}

export default useControlledState;
