function login() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("errorMessage");

    if (email === "" || password === "") {
        error.textContent = "Please enter Email ID and Password.";
        return;
    }

    if (password !== "student@123") {
        error.textContent = "Invalid password. Please try again.";
        return;
    }

    localStorage.setItem("email", email);

    window.location.href = "dashboard.html";
}


function classifyPattern() {

    const input = document.getElementById("binaryInput").value.trim();
    const result = document.getElementById("result");
    const features = document.getElementById("features");

    const rows = input.split(/\r?\n/).map(row => row.trim());

    if (rows.length !== 5 || rows.some(row => !/^[01]{5}$/.test(row))) {
        result.textContent = "❌ Please enter exactly 5 rows of 5 digits.";
        features.innerHTML = "";
        return;
    }

    const ones = rows.flatMap(row => row.split("")).filter(x => x === "1").length;

    const centrePixel = rows[2][2];

    const density = (ones / 25).toFixed(2);

    let horizontalSymmetry = true;
    let verticalSymmetry = true;

    for (let i = 0; i < 5; i++) {

        if (rows[i] !== rows[4 - i]) {
            horizontalSymmetry = false;
        }

        for (let j = 0; j < 5; j++) {

            if (rows[i][j] !== rows[i][4 - j]) {
                verticalSymmetry = false;
            }
        }
    }

    let classification = "Pattern Not Recognized ❌";

    // 1. PLUS
    if (
        rows[0] === "00100" &&
        rows[1] === "01110" &&
        rows[2] === "11111" &&
        rows[3] === "01110" &&
        rows[4] === "00100"
    ) {
        classification = "PLUS Pattern ✅";
    }

    // 2. X
    else if (
        rows[0] === "10001" &&
        rows[1] === "01010" &&
        rows[2] === "00100" &&
        rows[3] === "01010" &&
        rows[4] === "10001"
    ) {
        classification = "X Pattern ✅";
    }

    // 3. SQUARE
    else if (
        rows[0] === "11111" &&
        rows[1] === "10001" &&
        rows[2] === "10001" &&
        rows[3] === "10001" &&
        rows[4] === "11111"
    ) {
        classification = "SQUARE Pattern ✅";
    }

    // 4. VERTICAL LINE
    else if (
        rows[0] === "00100" &&
        rows[1] === "00100" &&
        rows[2] === "00100" &&
        rows[3] === "00100" &&
        rows[4] === "00100"
    ) {
        classification = "VERTICAL LINE Pattern ✅";
    }

    // 5. HORIZONTAL LINE
    else if (
        rows[0] === "00000" &&
        rows[1] === "00000" &&
        rows[2] === "11111" &&
        rows[3] === "00000" &&
        rows[4] === "00000"
    ) {
        classification = "HORIZONTAL LINE Pattern ✅";
    }

    // 6. DIAGONAL LINE ↘
    else if (
        rows[0] === "10000" &&
        rows[1] === "01000" &&
        rows[2] === "00100" &&
        rows[3] === "00010" &&
        rows[4] === "00001"
    ) {
        classification = "DIAGONAL ↘ Pattern ✅";
    }

    // 7. DIAGONAL LINE ↙
    else if (
        rows[0] === "00001" &&
        rows[1] === "00010" &&
        rows[2] === "00100" &&
        rows[3] === "01000" &&
        rows[4] === "10000"
    ) {
        classification = "DIAGONAL ↙ Pattern ✅";
    }

    // 8. T PATTERN
    else if (
        rows[0] === "11111" &&
        rows[1] === "00100" &&
        rows[2] === "00100" &&
        rows[3] === "00100" &&
        rows[4] === "00100"
    ) {
        classification = "T Pattern ✅";
    }

    // 9. L PATTERN
    else if (
        rows[0] === "10000" &&
        rows[1] === "10000" &&
        rows[2] === "10000" &&
        rows[3] === "10000" &&
        rows[4] === "11111"
    ) {
        classification = "L Pattern ✅";
    }

    // 10. H PATTERN
    else if (
        rows[0] === "10001" &&
        rows[1] === "10001" &&
        rows[2] === "11111" &&
        rows[3] === "10001" &&
        rows[4] === "10001"
    ) {
        classification = "H Pattern ✅";
    }

    result.textContent = "Classification Result: " + classification;

    features.innerHTML =
        "<h3>🔍 Extracted Features</h3>" +
        "<p>Number of 1s = <b>" + ones + "</b></p>" +
        "<p>Centre Pixel = <b>" + centrePixel + "</b></p>" +
        "<p>Binary Density = <b>" + density + "</b></p>" +
        "<p>Horizontal Symmetry = <b>" +
        (horizontalSymmetry ? "Yes" : "No") +
        "</b></p>" +
        "<p>Vertical Symmetry = <b>" +
        (verticalSymmetry ? "Yes" : "No") +
        "</b></p>";
}