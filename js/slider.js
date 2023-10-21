document.addEventListener("DOMContentLoaded", function() {

  const slider = document.querySelector("#card-slider");
  const sliderMainImage = slider.querySelector(".slider__main-img");
  const sliderGalleryLage = slider.querySelector(".slider__gallery_lage");
  const sliderGallerySmall = slider.querySelector(".slider__gallery_small");

  sliderMainImage.src = `img/gallery/${product.img[0]}`;
  sliderMainImage.alt = "Product Image";

  for (let i = 0; i < product.img.length; i++) {

    const img = document.createElement("img");
    const item = document.createElement("div");

    img.src = `img/gallery/${product.img[i]}`;
    img.alt = `Img ${i + 1}`;
    img.classList.add("slider__gallery_img");
    sliderGalleryLage.appendChild(img);

    item.classList.add("slider__gallery_item");
    sliderGallerySmall.appendChild(item);
  };

  const gallery = slider.querySelectorAll(".slider__gallery_img");
  const items = slider.querySelectorAll(".slider__gallery_item");
  gallery[0].classList.add("active-img");

  gallery.forEach((img, index) => {

      img.addEventListener("click", () => {

        gallery.forEach((el) => {

          if(el.classList.contains("active-img")){
            el.classList.remove("active-img");
          };
        });

        sliderMainImage.src = `img/gallery/${product.img[index]}`;
        sliderMainImage.alt = img.alt;
        img.classList.add("active-img");
    });
  });

  let touchStartX = null;
  let currentSlideIndex = 0;

  function showSlide(slideIndex) {

    slideIndex = (slideIndex + gallery.length) % gallery.length;
    
    items.forEach((el) => {

      if(el.classList.contains("active-slide")){
        el.classList.remove("active-slide");
      };
    });
    
    currentSlideIndex = slideIndex;
    sliderMainImage.src = gallery[slideIndex].src;
    items[slideIndex].classList.add("active-slide");
  }

  slider.addEventListener("touchstart", (e) => {

    touchStartX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (e) => {

    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 0) {
      showSlide(currentSlideIndex - 1);
    } 
      else {
        showSlide(currentSlideIndex + 1);
      }

    touchStartX = null;
  });

  slider.addEventListener("touchend", () => {

    touchStartX = null;
  });

  showSlide(currentSlideIndex);
});

