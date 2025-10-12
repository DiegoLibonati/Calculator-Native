import { Operation } from "@src/entities/app";

import operations from "@src/constants/operations";

export const getIfLastCharIsAnOperation = (char: string) => {
  return operations.includes(char as Operation);
};
