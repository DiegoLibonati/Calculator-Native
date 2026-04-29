import { getIfLastCharIsAnOperation } from "@/helpers/getIfLastCharIsAnOperation";

describe("getIfLastCharIsAnOperation", () => {
  describe("when char is an operation", () => {
    it("should return true for '+'", () => {
      expect(getIfLastCharIsAnOperation("+")).toBe(true);
    });

    it("should return true for '-'", () => {
      expect(getIfLastCharIsAnOperation("-")).toBe(true);
    });

    it("should return true for '*'", () => {
      expect(getIfLastCharIsAnOperation("*")).toBe(true);
    });

    it("should return true for '/'", () => {
      expect(getIfLastCharIsAnOperation("/")).toBe(true);
    });

    it("should return true for '%'", () => {
      expect(getIfLastCharIsAnOperation("%")).toBe(true);
    });
  });

  describe("when char is not an operation", () => {
    it("should return false for a digit", () => {
      expect(getIfLastCharIsAnOperation("5")).toBe(false);
    });

    it("should return false for '0'", () => {
      expect(getIfLastCharIsAnOperation("0")).toBe(false);
    });

    it("should return false for a dot", () => {
      expect(getIfLastCharIsAnOperation(".")).toBe(false);
    });

    it("should return false for a letter", () => {
      expect(getIfLastCharIsAnOperation("a")).toBe(false);
    });

    it("should return false for an empty string", () => {
      expect(getIfLastCharIsAnOperation("")).toBe(false);
    });
  });
});
