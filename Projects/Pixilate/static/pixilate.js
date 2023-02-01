/*
 * Pixilate is a webpage sketchpad made with HTML, CSS, and JavaScript.
 * The files associated with this program include pixilate.css, pixilate.html
 * and pixilate.js (this file).
 */

// Initalize Code when all content is loaded
document.addEventListener("DOMContentLoaded", () => {
  /* Create a dynamically changing grid-size displayed on .html with the slider.
   * Function createGrid(size) takes the current size of gridSizeSlider and
   * resizes the grid displayed.
   */

  // Initialize constant variables
  const gridContainer = document.getElementById("grid-container");
  const gridSizeSlider = document.getElementById("grid-size");

  // Create grids to be displayed
  function createGrid(size) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      gridContainer.appendChild(cell);
    }
    document.documentElement.style.setProperty("--size", size); // Creates global variable "--size" for css
  }

  // Automatically updates grid based on slider
  gridSizeSlider.addEventListener("input", () => {
    createGrid(gridSizeSlider.value);
  });

  // Loads grids on startup / page refresh
  createGrid(gridSizeSlider.value);

  // Update user with current slider size
  document.body.addEventListener("input", () => {
    document.getElementById(
      "canvas-size-info"
    ).innerHTML = `Current Canvas Resolution : ${gridSizeSlider.value}px`;
  });

  /* Fetches pen colour and draws onto the canvas */

  // Initialize variables
  const penColour = document.getElementById();
  /* End of DOMContentLoaded */
});
