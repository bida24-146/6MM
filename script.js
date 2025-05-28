// Welcome message on page load
window.onload = function () {
  alert("Welcome to 6MM – Rooted in Quality grown by 6MM");
  document.getElementById("year").textContent = new Date().getFullYear();
};

// Filter logic
document.getElementById("categoryFilter").addEventListener("change", function () {
  const selected = this.value;
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (selected === "all" || product.dataset.category === selected) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
