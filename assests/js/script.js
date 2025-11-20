const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  let target = +counter.getAttribute("data-countto");
  let duration = +counter.getAttribute("data-duration");
  let step = target / (duration / 50);

  let count = 0;

  let updateCounter = () => {
    count += step;
    if (count < target) {
      counter.innerText = Math.floor(count);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});


// faq //
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
// end faq //

// fillter //

    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".menu-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            document.querySelector(".filter-btn.active").classList.remove("active");
            btn.classList.add("active");

            let filter = btn.dataset.filter;

            cards.forEach(card => {
                card.classList.add("hide");

                if (card.dataset.category === filter) {
                    card.classList.remove("hide");
                }
            });
        });
    });
// end fillter //


// carousel /
    const container = document.querySelector(".reviews-container");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    right.onclick = () => container.scrollBy({ left: 300, behavior: "smooth" });
    left.onclick  = () => container.scrollBy({ left: -300, behavior: "smooth" });

