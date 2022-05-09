var swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });