# Binary Pattern Based Image Classifier

## Project Overview

Binary Pattern Based Image Classifier is a software prototype that classifies 5 × 5 binary image patterns using digital logic and feature-based rules.

The system takes a binary image containing 0s and 1s as input and identifies the pattern.

## Objectives

- Create binary image samples using 0 and 1.
- Extract important binary features.
- Apply digital logic rules for classification.
- Classify different binary patterns.
- Test normal, edge and fault cases.
- Measure classification accuracy.

## Patterns Used

The classifier identifies the following patterns:

1. PLUS Pattern
2. X Pattern
3. SQUARE Pattern
4. VERTICAL LINE Pattern

## Features Extracted

The system extracts:

- Number of 1s
- Centre Pixel
- Binary Density
- Horizontal Symmetry
- Vertical Symmetry

## Digital Logic

The extracted features are processed using Boolean logic rules.

Example:

F = C · H · V

Where:

- C = Centre Pixel
- H = Horizontal Symmetry
- V = Vertical Symmetry

## Test Cases

The project contains 15 test cases:

- 10 Normal test cases
- 2 Edge cases
- 3 Fault cases

The test cases are used to verify the classification system.

## Accuracy

Total Test Cases: 15

Correctly Classified: 15

Accuracy: 100%

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- NumPy
- Pandas
- Matplotlib

## Project Structure

```text
BinaryPatternClassifier/
│
├── index.html
├── dashboard.html
├── classifier.html
├── logic.html
├── testcases.html
├── results.html
├── style.css
├── script.js
├── binary_classifier.py
├── requirements.txt
└── README.md