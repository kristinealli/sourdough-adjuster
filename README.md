# Sourdough Adjuster

A simple React application that dynamically adjusts a sourdough bread recipe based on the amount of starter used. The app recalculates the necessary flour and water amounts to maintain the original recipe ratios.

## Features
- Adjust the amount of sourdough starter (in cups)
- Automatically recalculates flour and water adjustments
- Displays results in both cups and grams

## Usage
- Use the input field to adjust the amount of starter in cups.
- The application will update and display the adjusted flour and water amounts.
- The results are shown in both cups and grams for better accuracy.

## Calculation Breakdown
- Each cup of starter consists of **1/2 cup flour** and **1/2 cup water**.
- The total flour and water are adjusted accordingly to maintain the correct hydration ratio.
- Conversion factors used:
  - **1 cup of flour ≈ 120g**
  - **1 cup of water ≈ 237g**

## Technologies Used
- React (useState for state management)
- JavaScript (ES6+ features)
- HTML/CSS (inline styling for simplicity)