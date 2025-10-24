[...document.querySelectorAll(".mid-cover-right")].forEach((mcr, _) => {
  const $img = mcr.querySelector(".img img");
  if ($img) {
    mcr.querySelector(".img").style.backgroundImage =
      `url(${$img.getAttribute("data-src")})`;
  }
});
