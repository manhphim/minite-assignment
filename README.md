# First Non-Repeating Character Finder

This project is a Next.js web application that finds the first non-repeating character in a given string.

## How it Works

The main functionality is implemented in the `AppPage` component (`components/app-page.tsx`). Here's how it solves the assignment:

1. **Input Handling**: The app accepts a string input through a form.

2. **Character Finding Algorithm**: The `findFirstNonRepeatingChar` function takes the input string and returns the first non-repeating character:
   - It uses a Map to count character occurrences.
   - It then iterates through the string again to find the first character with a count of 1.
   - If no such character is found, it returns null.

3. **Result Display**: The result (or an error message) is displayed to the user.

4. **Word Saving (Bonus Feature)**: New words are saved in localStorage and displayed in a list.

5. **User Feedback**: Toast notifications provide feedback on successful saves and errors.

## Algorithm Complexity

The `findFirstNonRepeatingChar` function uses an algorithm with a time complexity of **O(n)**, where n is the length of the input string. Here's a breakdown of the algorithm:

1. First Pass: **O(n)**
   - The function iterates through each character in the string once to count occurrences.
   - It uses a `Map` to store character counts, which provides **O(1)** lookup and insertion.

2. Second Pass: **O(n)**
   - The function iterates through the string again to find the first character with a count of 1.

3. Total Time Complexity: **O(n) + O(n) = O(n)**
   - The two passes through the string result in a linear time complexity.

Space Complexity: **O(k)**, where k is the number of unique characters in the string.
   - In the worst case, where all characters are unique, k = n, resulting in O(n) space complexity.
   - However, in practice, k is often much smaller than n, especially for strings using a fixed character set (e.g., ASCII).

## How to Run the Project

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run the following command to run the tests:
```bash
  npm run test
```
The tests are written using Jest. Here we only test the logic of the `findFirstNonRepeatingChar` function.

## Tech stacks

- Next.js
- TypeScript
- Shadcn UI
- Tailwind CSS

## Project Structure

- `app/page.tsx`: The main page component that renders `AppPage`.
- `components/app-page.tsx`: The core component containing the application logic.
- UI components from a custom UI library are used for styling.
- `components/ui`: Reusable UI components from Shadcn UI.
- `hooks`: Custom hooks used in the application.
- `lib`: Utility functions and constants.
