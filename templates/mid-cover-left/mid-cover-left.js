[...document.querySelectorAll(".mid-cover-left")].forEach((mcl, _) => {
  const $img = mcl.querySelector(".img img");
  if ($img) {
    mcl.querySelector(".img").style.backgroundImage =
      `url(${$img.getAttribute("data-src")})`;
  }
});
