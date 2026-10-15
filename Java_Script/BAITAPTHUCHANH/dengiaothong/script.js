
function doiMau(mau) {
    // Tắt tất cả các đèn
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");


    // Bật đèn được chọn
    document.getElementById(mau).classList.add("active");
}
