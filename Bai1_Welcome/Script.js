// Thêm hiệu ứng hover bằng JS để mỗi dòng đổi màu khác nhau
document.addEventListener("DOMContentLoaded", function() {
    const row1 = document.querySelector(".row1");
    const row2 = document.querySelector(".row2");
    const row3 = document.querySelector(".row3");

    row1.addEventListener("mouseenter", () => {
        row1.style.backgroundColor = "#f28b82"; // hồng đậm
    });
    row1.addEventListener("mouseleave", () => {
        row1.style.backgroundColor = "#f9d5d3"; // hồng nhạt
    });

    row2.addEventListener("mouseenter", () => {
        row2.style.backgroundColor = "#81c995"; // xanh lá đậm
    });
    row2.addEventListener("mouseleave", () => {
        row2.style.backgroundColor = "#d3f9d8"; // xanh lá nhạt
    });

    row3.addEventListener("mouseenter", () => {
        row3.style.backgroundColor = "#fdd663"; // vàng đậm
    });
    row3.addEventListener("mouseleave", () => {
        row3.style.backgroundColor = "#fff3b0"; // vàng nhạt
    });
});
