document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ctaButton");

  if (!button) return;

  button.addEventListener("click", () => {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Loading...";

    setTimeout(() => {
      window.location.href = "https://comein.pro/vijey/jay";
    }, 500);
  });

  window.addEventListener("pageshow", () => {
    button.disabled = false;
    button.textContent = "Lanjutkan →";
  });
});
