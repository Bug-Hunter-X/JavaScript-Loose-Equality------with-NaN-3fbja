# JavaScript Loose Equality (==) with NaN

This repository demonstrates a subtle bug in JavaScript related to loose equality (==) and the handling of NaN (Not a Number).

## The Bug
The provided JavaScript code defines a function `foo` that attempts to handle null and undefined values. However, it unexpectedly returns NaN when it's called with NaN as argument.

## The Solution
The solution involves using strict equality (===) for comparisons, which addresses the issue by treating NaN as distinct.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (e.g., Node.js).
3. Observe the unexpected output.
4. Compare it with the corrected output in `bugSolution.js`.

## Note
This is a common issue in JavaScript that highlights the importance of understanding the differences between loose and strict equality.

