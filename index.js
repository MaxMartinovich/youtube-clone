document.addEventListener("click", (event) => {
  const thumb = event.target.closest(".linha-thumbnail");
  if (!thumb) return;

  window.open(thumb.dataset.link, "_blank");
});

document.addEventListener("click", (event) => {
  const titulo = event.target.closest(".titulo-video");
  if (!titulo) return;

  window.open(titulo.dataset.link, "_blank");
});

document.addEventListener("click", (event) => {
  const icone = event.target.closest(".icone-canal, .autor-video");
  if (!icone) return;

  window.open(icone.dataset.link, "_blank");
});
