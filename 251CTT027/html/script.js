let currentIdx = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
  slides[currentIdx].classList.remove("active");
  currentIdx = (currentIdx + direction + slides.length) % slides.length;
  slides[currentIdx].classList.add("active");
}
setInterval(() => changeSlide(1), 4000);

const modal = document.getElementById("modal");

function openModal(name, desc) {
  document.getElementById("modal-title").innerText = name;
  document.getElementById("modal-desc").innerText = desc;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
