document.addEventListener("click", (event) => {
  const thumb = event.target.closest(".linha-thumbnail");
  if (!thumb) return;

  window.location.href = thumb.dataset.link;
});

document.addEventListener("click", (event) => {
  const titulo = event.target.closest(".info-video");
  if (!titulo) return;

  window.location.href = titulo.dataset.link;
});
