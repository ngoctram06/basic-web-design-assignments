function filterItems(type) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (type === 'all' || item.classList.contains(type)) {
      item.style.display = 'block';  // hiện item
    } else {
      item.style.display = 'none';   // ẩn item
    }
  });
}


