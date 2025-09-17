import { Operation } from "@src/entities/entities";

import { operations } from "@src/constants/constants";

export const getIfLastCharIsAnOperation = (char: string) => {
  return operations.includes(char as Operation);
};
