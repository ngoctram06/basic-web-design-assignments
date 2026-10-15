var ok = document.getElementById("ok");

ok.onclick = function () {

    var semester1 = Number(document.getElementById("semester1").value);
    var semester2 = Number(document.getElementById("semester2").value);

    var average = (semester1 + semester2) / 2;

    document.getElementById("summarise").value = average;

    if (average >= 8) {
        document.getElementById("result").innerHTML = "Hoc sinh gioi";
    }
    else if (average >= 6.5) {
        document.getElementById("result").innerHTML = "Hoc sinh kha";
    }
    else if (average >= 5) {
        document.getElementById("result").innerHTML = "Hoc sinh trung binh";
    }
    else {
        document.getElementById("result").innerHTML = "Hoc sinh yeu";
    }

};


var cancel = document.getElementById("cancel");

cancel.onclick = function () {

    document.getElementById("semester1").value = "";
    document.getElementById("semester2").value = "";
    document.getElementById("summarise").value = "";
    document.getElementById("result").innerHTML = "";

};