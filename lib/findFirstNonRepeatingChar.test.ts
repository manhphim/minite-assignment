import { findFirstNonRepeatingChar } from "./findFirstNonRepeatingChar";

describe("findFirstNonRepeatingChar", () => {
  it("should return the first non-repeating character", () => {
    expect(findFirstNonRepeatingChar("aabbc")).toBe("c");
    expect(findFirstNonRepeatingChar("aabbcdeeff")).toBe("c");
    expect(findFirstNonRepeatingChar("abcdef")).toBe("a");
  });

  it("should return null if all characters repeat", () => {
    expect(findFirstNonRepeatingChar("aabbccddee")).toBeNull();
    expect(findFirstNonRepeatingChar("aaaaaa")).toBeNull();
  });

  it("should handle empty strings", () => {
    expect(findFirstNonRepeatingChar("")).toBeNull();
  });

  it("should be case-sensitive", () => {
    expect(findFirstNonRepeatingChar("aAbBcC")).toBe("a");
    expect(findFirstNonRepeatingChar("AaBbCc")).toBe("A");
  });

  it("should handle strings with spaces and special characters", () => {
    expect(findFirstNonRepeatingChar("a b c d")).toBe("a");
    expect(findFirstNonRepeatingChar("a!b@c#a!b@")).toBe("c");
  });

  it("should return the correct character for strings with only one unique character", () => {
    expect(findFirstNonRepeatingChar("x")).toBe("x");
    expect(findFirstNonRepeatingChar("zzz")).toBeNull();
  });

  it("should handle long strings efficiently", () => {
    const longString = "a".repeat(1000000) + "b";
    expect(findFirstNonRepeatingChar(longString)).toBe("b");
  });
});
