(function(){
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // trigger a bit before full view
      threshold: 0.15
    };

    function onObserve(entries, observer){
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const container = entry.target;
          // find all children with .anim inside this container (only inside section)
          const animatedEls = container.querySelectorAll('.anim');
          animatedEls.forEach(el=>{
            const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
            el.style.animationDelay = (delay/1000) + 's';
            el.classList.add('in-view');
            // optionally remove anim class so it won't re-run on re-intersect
            el.classList.remove('anim');
          });
          observer.unobserve(container); // animate once
        }
      });
    }

    const observer = new IntersectionObserver(onObserve, observerOptions);
    const target = document.getElementById('menuSection');
    if(target) observer.observe(target);
  })();




      // Fade-in-left on scroll
    const target = document.getElementById("banner");

    function showOnScroll(){
        const rect = target.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            target.classList.add("show");
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
