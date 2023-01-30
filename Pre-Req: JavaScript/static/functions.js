/* Event Listener for Keystrokes */
document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.querySelector("#textBox");
  const output = document.querySelector("#output");

  textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
  });
});
