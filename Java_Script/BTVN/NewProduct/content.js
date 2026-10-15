function average(a, b) {
    return (a + b) / 2;
}

function calculate() {

    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);

    let avg = average(grade1, grade2);

    let result;

    if (avg >= 9) {
        result = "Good";
    }
    else if (avg >= 8) {
        result = "Fair";
    }
    else if (avg >= 7) {
        result = "Above";
    }
    else if (avg >= 5) {
        result = "Average";
    }
    else {
        result = "Weak";
    }

    document.getElementById("average").innerHTML =
        "Average score: " + avg.toFixed(2);

    document.getElementById("result").innerHTML =
        "Grade: " + result;
}