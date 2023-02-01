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
  const penColorChanger = document.getElementById("pen-color");
  const eraserCheck = document.getElementById("eraser");
  const rainbowMode = document.getElementById("rainbowmode");

  /* Function createGrid uses a simple if loop to create the amount of individual cells required
   * to fill the page with grids */
  function createGrid(size) {
    gridContainer.innerHTML = ""; // Set the elements inside gridContainer as an empty string
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div"); // Creates a constant variable "cell" as a div element
      cell.classList.add("grid-cell"); // Updates cell's classList property
      /*
       * Begin implementation of drawing functionality (with color)
       * Three event listeners are added to the "cell" variable
       * mousedown - when the mouse button is pressed on the cell, the mouseclick property is activated
       * mouseenter - when the mouse enters a cell, it checks if the mousedown property is active
       * mouseup - resets the mousedown variable to false
       */
      cell.addEventListener("mousedown", () => {
        mouseDown = true;
        if (eraserCheck.checked) {
          eraseClick(cell);
        } else if (rainbowMode.checked) {
          rainbowClick(cell);
        } else {
          mouseClick(cell);
        }
      });

      cell.addEventListener("mouseenter", () => {
        if (mouseDown) {
          if (eraserCheck.checked) {
            eraseClick(cell);
          } else if (rainbowMode.checked) {
            rainbowClick(cell);
          } else {
            mouseClick(cell);
          }
        }
      });

      cell.addEventListener("mouseup", () => {
        mouseDown = false;
      });
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

  /* Function to change grid cell colour to penColour on click */
  function mouseClick(item) {
    item.style.backgroundColor = penColorChanger.value;
  }

  /* Function to revert cells back to original color */
  function eraseClick(item) {
    item.style.backgroundColor = "rgb(245, 245, 245)";
  }

  /* Functions to implement rainbow mode
   * getRandomColors() returns three colors in the RGB spectrum
   * rainbowClick() changes grid cell color to a random rainbow color
   */
  function getRandomColors() {
    const colors = [0, 255, 127];
    let result = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * colors.length);
      let color = colors[randomIndex];
      result.push(color);
      if (result.filter((c) => c === color).length >= 2) {
        colors.splice(randomIndex, 1);
      }
    }
    return result;
  }

  function rainbowClick(item) {
    const colors = getRandomColors();
    item.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }

  /* End of DOMContentLoaded */
});
