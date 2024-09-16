
# Gpay Scratch Card

A simple web-based scratch card simulation inspired by Gpay, where users can scratch off a hidden image using mouse or touch interactions.

## Features
- Interactive scratch-off effect.
- Works on both desktop and mobile devices (supports mouse and touch events).
- Reveals a hidden image as the user scratches away the overlay.

## Project Structure

- **index.html**: Contains the basic structure of the webpage and links to the external CSS and JavaScript files.
- **style.css**: Styles the scratch card container and hidden image.
- **script.js**: Handles the scratch card functionality, mouse, and touch events.

## How It Works

1. The webpage displays a card with a hidden image covered by a scratchable overlay.
2. The overlay contains a gradient and text ("Scratch here for #update").
3. As users move their mouse or finger over the overlay, the scratched portions of the overlay are removed, revealing the hidden image beneath.

## How to Run the Project

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Scratch the card using your mouse or touch (on mobile devices) to reveal the hidden image.

## Setup Instructions

### 1. HTML (index.html)
- Contains the structure of the scratch card, including the hidden image and a `<canvas>` element used for the scratch effect.

### 2. CSS (style.css)
- Styles the body and scratch card with a clean, minimalistic design.
- Ensures the canvas covers the hidden image and applies the necessary dimensions and layout.

### 3. JavaScript (script.js)
- Handles the scratch interaction using canvas, mouse, and touch events.
- Creates a gradient overlay and dynamically scratches away areas based on user interaction.

## Code Example

### Sample Event Handler for Scratch Effect:
```javascript
canvas.addEventListener('mousemove', function(e){
    if(isDrawing && isMouseDown){
        const pos = getMousePos(e);
        scratch(pos.x, pos.y);
    }
});
```

### Scratch Function:
```javascript
function scratch(x, y){
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
}
```

## Demo

- Open `index.html` in a browser and scratch the card to see the hidden image.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Canvas API)

## License
This project is open-source and available under the [MIT License](LICENSE).
