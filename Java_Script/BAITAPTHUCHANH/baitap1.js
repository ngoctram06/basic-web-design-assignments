function tinhchuvi(a,b) {
    return 2 * (a + b);
}
function tinhdientich(a,b) {
    return a * b;
}

let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));
let chuvi = tinhchuvi(a, b);
let dientich = tinhdientich(a, b);

alert ("Chu vi hinh chu nhat: " + chuvi);
alert ("Dien tich hinh chu nhat: " + dientich);