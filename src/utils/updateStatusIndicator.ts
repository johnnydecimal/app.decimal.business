export function updateStatusIndicator(
  statusEl: HTMLElement | null,
  success: boolean
): void {
  if (!statusEl) return;

  if (success) {
    statusEl.innerText = " ■";
    statusEl.classList.add("green");
    statusEl.classList.remove("red", "hidden");

    setTimeout(() => {
      statusEl.classList.add("hidden");
      setTimeout(() => {
        statusEl.innerText = "";
        statusEl.classList.remove("green");
      }, 700);
    }, 2000);
  } else {
    statusEl.innerHTML = ` Error saving: please <a href="#" onclick="location.reload();">reload</a>`;
    statusEl.classList.add("red");
    statusEl.classList.remove("green", "hidden");
  }
}
