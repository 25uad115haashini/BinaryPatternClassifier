import numpy as np

# PLUS pattern
plus = np.array([
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
])

# X pattern
x = np.array([
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
])

print("PLUS Pattern:")
print(plus)

print("\nX Pattern:")
print(x)
# Feature Extraction

def extract_features(pattern):

    ones = np.sum(pattern)

    centre_pixel = pattern[2, 2]

    density = ones / 25

    horizontal_symmetry = np.array_equal(pattern, np.flipud(pattern))

    vertical_symmetry = np.array_equal(pattern, np.fliplr(pattern))

    return ones, centre_pixel, density, horizontal_symmetry, vertical_symmetry


# Extract PLUS features
plus_features = extract_features(plus)

print("\nPLUS Features:")
print("Number of 1s:", plus_features[0])
print("Centre Pixel:", plus_features[1])
print("Binary Density:", plus_features[2])
print("Horizontal Symmetry:", plus_features[3])
print("Vertical Symmetry:", plus_features[4])


# Extract X features
x_features = extract_features(x)

print("\nX Features:")
print("Number of 1s:", x_features[0])
print("Centre Pixel:", x_features[1])
print("Binary Density:", x_features[2])
print("Horizontal Symmetry:", x_features[3])
print("Vertical Symmetry:", x_features[4])
def classify_pattern(pattern):

    if np.array_equal(pattern, plus):
        return "PLUS"

    elif np.array_equal(pattern, x):
        return "X"

    else:
        return "NOT RECOGNIZED"


print("\nClassification Results:")
print("PLUS:", classify_pattern(plus))
print("X:", classify_pattern(x))
# Test Cases

test_cases = [
    ("PLUS", plus),
    ("X", x),
    ("PLUS", plus),
    ("X", x),
    ("PLUS", plus),
    ("X", x),
    ("PLUS", plus),
    ("X", x),
    ("PLUS", plus),
    ("X", x),

    ("EDGE - All Zeros", np.zeros((5, 5), dtype=int)),
    ("EDGE - All Ones", np.ones((5, 5), dtype=int)),
    ("FAULT - Missing Centre", plus.copy()),
    ("FAULT - Noisy Pattern", plus.copy()),
    ("FAULT - Invalid Pattern", np.zeros((5, 5), dtype=int))
]

# Create fault cases
test_cases[12][1][2, 2] = 0
test_cases[13][1][0, 0] = 1

correct = 0

print("\nTest Case Results:")

for i, (name, pattern) in enumerate(test_cases, start=1):

    result = classify_pattern(pattern)

    if name.startswith("PLUS"):
        expected = "PLUS"
    elif name.startswith("X"):
        expected = "X"
    else:
        expected = "NOT RECOGNIZED"

    if result == expected:
        status = "PASS"
        correct += 1
    else:
        status = "FAIL"

    print(f"Test {i}: {name} → {result} → {status}")


accuracy = (correct / len(test_cases)) * 100

print("\nTotal Test Cases:", len(test_cases))
print("Correct Cases:", correct)
print("Accuracy:", accuracy, "%")
import matplotlib.pyplot as plt

labels = ["Correct", "Incorrect"]
values = [correct, len(test_cases) - correct]

plt.bar(labels, values)

plt.title("Binary Pattern Classification Accuracy")
plt.xlabel("Result")
plt.ylabel("Number of Test Cases")

plt.show()