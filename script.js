// Array of text to rotate
const rotatingText = ["Web Apps", "Databases", "Deep Learning algorithms", "Dreams", "The Future!"];

// Get the rotating text, prefix, and cursor elements
const rotatingTextElement = document.getElementById("rotating-text");
const prefixElement = document.getElementById("prefix");
const cursorElement = document.getElementById("cursor");

let index = 0;
let currentWord = "";
let currentIndex = 0;
let isTyping = true;

// Function to update the rotating text
function updateRotatingText() {
    if (isTyping) {
        currentWord = rotatingText[index].substring(0, currentIndex);
        rotatingTextElement.textContent = currentWord;
        currentIndex++;
        if (currentIndex <= rotatingText[index].length) {
            setTimeout(updateRotatingText, 100); // Typing speed (e.g., 100ms)
        } else {
            isTyping = false;
            currentIndex = rotatingText[index].length;
            setTimeout(() => {
                isTyping = false;
                setTimeout(startDeleting, 1000); // Pause after typing (e.g., 1000ms)
            }, 1000);
        }
    }
}

// Function to start deleting
function startDeleting() {
    if (currentIndex >= 0) {
        currentWord = rotatingText[index].substring(0, currentIndex);
        rotatingTextElement.textContent = currentWord;
        currentIndex--;
        setTimeout(startDeleting, 50); // Deleting speed (e.g., 50ms)
    } else {
        currentIndex = 0;
        setTimeout(() => {
            index = (index + 1) % rotatingText.length;
            setTimeout(() => {
                isTyping = true;
                updateRotatingText(); // Start typing the next word
            }, 0); // Pause before typing the next word (e.g., 1000ms)
        }, 300); // Pause after deleting (e.g., 1000ms)
    }
}

// Function to make the cursor blink
function blinkCursor() {
    cursorElement.style.visibility = cursorElement.style.visibility === "visible" ? "hidden" : "visible";
    setTimeout(blinkCursor, 400); // Cursor blink interval (e.g., 500ms)
}

// Initial call to start the typing animation
updateRotatingText();

// Initial call to start the cursor blinking animation
blinkCursor();

// Function to update the prefix
function updatePrefix() {
    prefixElement.textContent = "I design and develop ";
}


// Function to initialize tooltips
    // Function to load tooltips from JSON file
    function loadTooltips(callback) {
        fetch('tooltips.json')
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Error loading tooltips:', error));
    }

// Function to initialize tooltips
function initTooltips(tooltipsData) {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        const tooltipKey = tooltip.getAttribute('data-tooltip');
        if (tooltipsData.hasOwnProperty(tooltipKey)) {
            const tooltipText = tooltipsData[tooltipKey];
            tooltip.addEventListener('mouseenter', () => {
                showTooltip(tooltip, tooltipText);
            });
            tooltip.addEventListener('mouseleave', () => {
                hideTooltip(tooltip);
            });
        }
    });
}

// Function to show tooltip
function showTooltip(element, text) {
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip-window');
    // Replace newline characters with HTML line breaks
    const formattedText = text.replace(/<br>/g, '\n \n');
    tooltipElement.textContent = formattedText;
    element.appendChild(tooltipElement);
}

// Function to hide tooltip
function hideTooltip(element) {
    const tooltipElement = element.querySelector('.tooltip-window');
    if (tooltipElement) {
        tooltipElement.remove();
    }
}

// Initial call to display the prefix
updatePrefix();

// Load tooltips and initialize them
loadTooltips(initTooltips);




