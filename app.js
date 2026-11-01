const TRELLIS_URL = "https://huggingface.co/spaces/trellis-community/TRELLIS";

const input = document.querySelector("#imageInput");
const preview = document.querySelector("#preview");
const emptyState = document.querySelector("#emptyState");
const fileName = document.querySelector("#fileName");
const launchButton = document.querySelector("#launchButton");
const clearButton = document.querySelector("#clearButton");
const status = document.querySelector("#status");
const dropzone = document.querySelector("#dropzone");

let selectedFile = null;
let previewUrl = null;

function setFile(file) {
  if (!file) return;
  const allowed = ["image/png", "image/jpeg", "image/webp"];
  if (!allowed.includes(file.type)) {
    status.textContent = "Format non pris en charge. Choisis une image PNG, JPG ou WEBP.";
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    status.textContent = "Image trop volumineuse (maximum conseillé : 15 Mo).";
    return;
  }
  selectedFile = file;
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = URL.createObjectURL(file);
  preview.src = previewUrl;
  preview.hidden = false;
  emptyState.hidden = true;
  fileName.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} Mo`;
  launchButton.disabled = false;
  clearButton.hidden = false;
  status.textContent = "Image prête. Clique pour ouvrir TRELLIS, puis importe cette même image dans son interface.";
}

input.addEventListener("change", () => setFile(input.files[0]));

["dragenter", "dragover"].forEach(eventName => {
  dropzone.addEventListener(eventName, event => {
    event.preventDefault();
    dropzone.classList.add("drag");
  });
});
["dragleave", "drop"].forEach(eventName => {
  dropzone.addEventListener(eventName, event => {
    event.preventDefault();
    dropzone.classList.remove("drag");
  });
});
dropzone.addEventListener("drop", event => setFile(event.dataTransfer.files[0]));

clearButton.addEventListener("click", () => {
  selectedFile = null;
  input.value = "";
  preview.removeAttribute("src");
  preview.hidden = true;
  emptyState.hidden = false;
  fileName.textContent = "Aucune image sélectionnée";
  launchButton.disabled = true;
  clearButton.hidden = true;
  status.textContent = "Ajoute une image pour commencer.";
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
});

launchButton.addEventListener("click", () => {
  if (!selectedFile) return;
  status.textContent = "TRELLIS s'ouvre dans un nouvel onglet. Pense à y importer ton image.";
  window.open(TRELLIS_URL, "_blank", "noopener,noreferrer");
});
