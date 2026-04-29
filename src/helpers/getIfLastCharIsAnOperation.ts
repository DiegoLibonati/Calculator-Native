import type { Operation } from "@/types/app";

import operations from "@/constants/operations";

export const getIfLastCharIsAnOperation = (char: string): boolean => {
  return operations.includes(char as Operation);
};
