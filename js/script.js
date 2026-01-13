document.addEventListener("DOMContentLoaded", () => {

  /* ================= TESTIMONIALS SLIDER ================= */
  const reviews = [
    { text: "Amazing coffee and great ambiance!", author: "Rahul" },
    { text: "Best café to relax and work.", author: "Priya" },
    { text: "Loved the mocha and cappuccino!", author: "Aman" }
  ];

  let index = 0;

  setInterval(() => {
    const reviewText = document.getElementById("review-text");
    const reviewAuthor = document.getElementById("review-author");

    if (reviewText && reviewAuthor) {
      reviewText.textContent = `"${reviews[index].text}"`;
      reviewAuthor.textContent = `– ${reviews[index].author}`;
      index = (index + 1) % reviews.length;
    }
  }, 3000);

  /* ================= SCROLL REVEAL ANIMATION ================= */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on page load

  /* ================= BACK TO TOP BUTTON ================= */
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});
