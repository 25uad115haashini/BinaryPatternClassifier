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


    // PLUS
    if (
        rows[0] === "00100" &&
        rows[1] === "01110" &&
        rows[2] === "11111" &&
        rows[3] === "01110" &&
        rows[4] === "00100"
    ) {
        classification = "PLUS Pattern ✅";
    }


    // X
    else if (
        rows[0] === "10001" &&
        rows[1] === "01010" &&
        rows[2] === "00100" &&
        rows[3] === "01010" &&
        rows[4] === "10001"
    ) {
        classification = "X Pattern ✅";
    }


    // SQUARE
    else if (
        rows[0] === "11111" &&
        rows[1] === "10001" &&
        rows[2] === "10001" &&
        rows[3] === "10001" &&
        rows[4] === "11111"
    ) {
        classification = "SQUARE Pattern ✅";
    }


    // VERTICAL LINE
    else if (
        rows[0] === "00100" &&
        rows[1] === "00100" &&
        rows[2] === "00100" &&
        rows[3] === "00100" &&
        rows[4] === "00100"
    ) {
        classification = "VERTICAL LINE Pattern ✅";
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