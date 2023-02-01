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

  /* Function createGrid uses a simple if loop to create the amount of individual cells required
   *  to fill the page with grids */
  function createGrid(size) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      // Begin implementation of drawing functionality
      cell.addEventListener("click", () => {
        mouseClick(cell);
      }); // End implementation of drawing functionality
      gridContainer.appendChild(cell);
    }
    // Creates global variable "--size" for css
    document.documentElement.style.setProperty("--size", size);
  }

  // Automatically updates grid based on slider
  gridSizeSlider.addEventListener("input", () => {
    createGrid(gridSizeSlider.value);
  });

  // Loads grids on startup / page refresh
  createGrid(gridSizeSlider.value);

  // Update user with current slider size
  gridSizeSlider.addEventListener("input", () => {
    document.getElementById(
      "canvas-size-info"
    ).innerHTML = `Current Canvas Resolution : ${gridSizeSlider.value}px`;
  });

  /* Fetches pen colour and draws onto the canvas */

  // Initialize variables
  const penColorChanger = document.getElementById("pen-color");

  /* Function to change grid cell colour to penColour on click */
  function mouseClick(item) {
    item.style.backgroundColor = penColorChanger.value;
  }

  /* End of DOMContentLoaded */
});
