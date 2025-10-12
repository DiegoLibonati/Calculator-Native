import { DebugFunction } from "@testing-library/react-native";
import {
  GetAllByQuery,
  GetByQuery,
  QueryByQuery,
} from "@testing-library/react-native/build/queries/make-queries";
import {
  TextMatch,
  TextMatchOptions,
} from "@testing-library/react-native/build/matches";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import {
  ByRoleMatcher,
  ByRoleOptions,
} from "@testing-library/react-native/build/queries/role";

export type GlobalTest = {
  debug: DebugFunction;
  gets?: {
    getByText?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getByRole?: GetByQuery<ByRoleMatcher, ByRoleOptions>;
    getByTestId?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getAllByTestId?: GetAllByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
  querys?: {
    queryByText?: QueryByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
};
