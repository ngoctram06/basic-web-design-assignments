function searchProduct() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const name = product.querySelector('.name').textContent.toLowerCase();
    product.style.display = name.includes(keyword) ? 'block' : 'none';
  });
}

function subscribe() {
  const email = document.getElementById('emailInput').value;
  if (email.includes('@')) {
    alert('Cảm ơn bạn đã đăng ký nhận tin!');
  } else {
    alert('Vui lòng nhập email hợp lệ.');
  }
}
