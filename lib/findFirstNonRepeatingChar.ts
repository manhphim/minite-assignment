export const findFirstNonRepeatingChar = (s: string): string | null => {
  const charCount = new Map<string, number>();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of s) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};
