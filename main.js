// 1. Adjust the font size of the span with the class `mess-with-me` to 40 pixels.

const messWithMeSpan = document.querySelector('.mess-with-me');
messWithMeSpan.style.fontSize = '40px';


// 2. Modify the paragraph with the class `mess-with-me` to have a green background.
const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green';

// 3. Conceal the second dinosaur's image, rendering it invisible while causing the space below it to adjust accordingly. If you're uncertain about the method to achieve this, you can look up the CSS rule to hide an element.

const hideMeImage = document.querySelector('#hide-me');
hideMeImage.style.display = 'none';

// 4. Resize the first dinosaur image to be 324 pixels in width.

const triceratopsImage = document.querySelector('#triceratops');
triceratopsImage.style.width = '324px';

// ## Event Listener Challenges

// 1. Apply an event listener to the span with the class `mess-with-me` such that when clicked, the font color transitions to orange.

messWithMeSpan.addEventListener('click', () => {
    messWithMeSpan.style.color = 'orange';
});

// 2. Attach an event listener to the first dinosaur, so that clicking it results in a red border.

triceratopsImage.addEventListener('click', () => {
    triceratopsImage.style.border = '2px solid red';
});

// 3. Assign an event listener to the feathered dinosaur, causing it to become 50% transparent upon clicking.

const feathersImage = document.querySelector('#feathers');
feathersImage.addEventListener('click', () => {
    feathersImage.style.opacity = '0.5';
});

// 4. Implement an event listener for the "Switch Background Color" button that, upon clicking, alters the background color of the row of dinosaurs to a color of your preference.

const toggleButton = document.querySelector('#toggle');
const dinoRow = document.querySelector('#row');
toggleButton.addEventListener('click', () => {
    dinoRow.style.backgroundColor = 'grey'; 
});

// 5. Establish an event listener for the dinosaur with the ID `biggify`, ensuring that when HOVERED, the image expands to a width of 200 pixels. Note that this requires a different event type, so some research may be necessary to determine the correct event.

const biggifyImage = document.querySelector('#biggify');
biggifyImage.addEventListener('mouseover', () => {
    biggifyImage.style.width = '200px';
});

// ## Stretch Goals

// 1. Enable the "Switch Background Color" button to toggle between white and your chosen color upon clicking. This modification can be achieved by reworking the function used in your existing event listener. **Hint:** If you haven't explicitly set the background color **via JavaScript**, its value will always be an empty string, regardless of any prior settings from other sources.

toggleButton.addEventListener('click', () => {
    if (dinoRow.style.backgroundColor === 'blue') {
        dinoRow.style.backgroundColor = 'white';
    } else {
        dinoRow.style.backgroundColor = 'green';
    }
});

// 2. Introduce a new event listener that reverts the `biggify` dinosaur back to its original size when it is no longer being hovered. **Hint:** This action is similar to the previous one, but focuses on the width. **Hint 2:** You'll need to use a different type of event, though the name is somewhat related.

biggifyImage.addEventListener('mouseout', () => {
    biggifyImage.style.width = '162px';
});