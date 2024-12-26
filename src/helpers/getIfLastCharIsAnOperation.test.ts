import { Operation } from "../entities/entities";

import { getIfLastCharIsAnOperation } from "./getIfLastCharIsAnOperation";

test("It should return 'true' if a string that is an operation is entered.", () => {
  const truthyValues: Operation[] = ["+", "-", "*", "%", "/"];

  for (const value of truthyValues) {
    const isAnOperation = getIfLastCharIsAnOperation(value);

    expect(isAnOperation).toBeTruthy();
  }
});


test("It should return 'false' if a string that is not an operation is entered.", () => {
    const falsyValues: string[] = ["0", ".", "a", "p", "1"];
  
    for (const value of falsyValues) {
      const isAnOperation = getIfLastCharIsAnOperation(value);
  
      expect(isAnOperation).toBeFalsy();
    }
  });
  