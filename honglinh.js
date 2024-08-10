// Click vào nút hiệu chỉnh xuất hiện màn hình mới
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalButtons = document.querySelectorAll(".openModal");
  const closeButton = document.querySelector(".close-button");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
