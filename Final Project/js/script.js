$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000, 
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


  const scrollBtn = document.getElementById("scrollToTop");

  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
