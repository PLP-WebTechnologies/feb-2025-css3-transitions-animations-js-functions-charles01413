function savePreference(color) {
  localStorage.setItem("bgColor", color);
}

function applyPreference() {
  let color = localStorage.getItem("bgColor");
  if (color) {
    document.body.style.backgroundColor = color;
  }
}

// Apply preferences on page load
window.onload = applyPreference;
