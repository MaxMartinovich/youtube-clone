document.addEventListener("click", (event) => {
  const thumb = event.target.closest(".linha-thumbnail");
  if (!thumb) return;

  window.location.href = thumb.dataset.link;
});

document.addEventListener("click", (event) => {
  const titulo = event.target.closest(".titulo-video");
  if (!titulo) return;

  window.location.href = titulo.dataset.link;
});

document.addEventListener("click", (event) => {
  const icone = event.target.closest(".icone-canal, .autor-video");
  if (!icone) return;

  window.location.href = icone.dataset.link;
});
