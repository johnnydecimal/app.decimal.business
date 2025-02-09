export function updateStatusIndicator(
  elementId: string,
  success: boolean,
  errorMessage?: string
): void {
  const statusEl = document.getElementById(elementId);
  if (!statusEl) {
    console.error(`🚨 Element with ID "${elementId}" does not exist!`);
    return;
  }

  // Generate a readable name from the elementId
  // e.g., "useEmojiSaved" -> "set useEmoji"
  const actionName = elementId
    .replace(/Saved$/, "") // Remove 'Saved' suffix
    .replace(/([A-Z])/g, " $1") // Add spaces before capitals
    .toLowerCase()
    .trim();

  if (success) {
    statusEl.innerText = " ■";
    statusEl.classList.add("green");
    statusEl.classList.remove("red", "hidden");
    console.log(`✅ ${actionName}.`);

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
    console.error(`${actionName} failed:`, errorMessage || "Unknown error");
  }
}
