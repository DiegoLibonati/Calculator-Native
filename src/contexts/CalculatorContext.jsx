import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext(null);

const initialValues = {
  firstValue: null,
  operation: null,
  screen: "0",
  comma: false,
};

export const CalculatorProvider = ({ children }) => {
  const [values, setValues] = useState(initialValues);

  const handleScreen = (value) => {
    if (values.comma && value === ".") return;
    if (value === ".") values.comma = true;

    if (
      (values.screen === "0" || (values.firstValue && !values.operation)) &&
      !(value === ".")
    ) {
      return setValues({ ...values, screen: `${value}`, firstValue: null });
    }

    return setValues({ ...values, screen: `${values.screen}${value}` });
  };

  const resetInitialValues = () => {
    return setValues(initialValues);
  };

  const handleOperation = (value) => {
    values.comma = false;
    if (values.operation)
      return setValues({
        ...values,
        operation: value,
        screen: `${values.firstValue} ${value} `,
      });

    if (values.firstValue && values.operation) return handleEqual();

    return setValues({
      ...values,
      firstValue: Number(values.screen),
      operation: value,
      screen: `${values.screen} ${value} `,
    });
  };

  const handleConvertNumber = () => {
    if (values.firstValue && values.operation) return;

    if (Number(values.screen) > 0) {
      return setValues({
        ...values,
        firstValue: -Number(values.screen),
        operation: null,
        screen: `-${values.screen}`,
      });
    }
    return setValues({
      ...values,
      firstValue: Math.abs(Number(values.screen)),
      operation: null,
      screen: `${Math.abs(values.screen)}`,
    });
  };

  const handleEqual = () => {
    const secondValue = Number(values.screen.split(" ").pop());

    let result = null;

    switch (values.operation) {
      case "+":
        result = values.firstValue + secondValue;
        break;
      case "-":
        console.log(values.firstValue, secondValue);
        result = values.firstValue - secondValue;
        break;

      case "*":
        result = values.firstValue * secondValue;
        break;

      case "/":
        result = values.firstValue / secondValue;
        break;

      case "%":
        result = (values.firstValue * secondValue) / 100;
        break;

      default:
        return;
    }

    return setValues({
      ...values,
      screen: String(result),
      operation: null,
      firstValue: result,
    });
  };

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  return (
    <CalculatorContext.Provider
      value={{
        values,
        handleScreen,
        resetInitialValues,
        handleOperation,
        handleEqual,
        handleConvertNumber,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
