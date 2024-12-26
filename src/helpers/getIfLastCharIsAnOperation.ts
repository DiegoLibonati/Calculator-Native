import { Operation } from "../entities/entities";

import { operations } from "../constants/constants";

export const getIfLastCharIsAnOperation = (char: string) => {
  return operations.includes(char as Operation);
};
