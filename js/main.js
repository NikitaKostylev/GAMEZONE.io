console.log('mir_igr_urls_site loaded');

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide img"); // все картинки
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    slides.forEach((img, n) => {
      img.style.display = n === i ? "block" : "none";
    });
  }

  showSlide(index); // показываем первый слайд

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
});

