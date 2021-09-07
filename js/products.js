const pic = document.getElementById("pic");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");

// list gambar
const picList = [pic1, pic2, pic3, pic4, pic5];

// gambar aktif
let picActive = 1;
["mouseover", "touchstart"].forEach(event => {
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(`shoes${id}.png`, id);
    });
  }
});

// ganti gambar aktif
const changeImage = (imgSrc, n) => {
  // mengganti gambar
  pic.src = imgSrc;
};
