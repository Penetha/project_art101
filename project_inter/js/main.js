/*
 * Author: Kimberly Estrada <kestrad9@ucsc.edu>
 * Date: 12-9-2024 
 * Description: This script integrates all functionalities for character selection, room navigation, and game progression.
 * Credits to WesBot, Chat GPT, and other sources for help and guidance.
 */

// Hide the rooms initially
document.addEventListener("DOMContentLoaded", function () {
    const roomContainer = document.getElementById(outputHTMLid); // Assuming this is the room container ID
    if (roomContainer) {
        roomContainer.style.display = "none"; // Hide the container initially
    }
});

// Character selection logic
document.querySelectorAll(".character-img img").forEach(function (img) {
    img.addEventListener("click", function () {
        // Highlight the selected character
        img.classList.add("selected");

        // Show the selection message and continue button
        document.getElementById("selection-message").style.display = "block";

        // Show the room container
        const roomContainer = document.getElementById(outputHTMLid);
        if (roomContainer) {
            roomContainer.style.display = "block"; // Make the room container visible
        }

        // Optionally scroll to the room container
        roomContainer.scrollIntoView({ behavior: "smooth" });
    });
});

// Room definitions
const rooms = {
    cul: {
        name: "Where Are You Headed?",
        description: "You wake up in the middle of a forest, with no recollection of how you got there. Which way would you prefer to go?",
        image: "./img/default.png",
        exitOptions: [
            { key: "quest2", text: "Towards the smell of food", value: 1 },
            { key: "quest2", text: "Deeper into the forest to explore.", value: 10 },
            { key: "quest2", text: "In search of a warm place to sleep." , value: 15},
            { key: "quest2", text: "Towards the sound of music.", value: 5},
            { key: "quest2", text: "North, that way always leads to civilization", value: 20}

        ]
    },
    quest2: {
        name: "Deeper into the Forest",
        description: "As you continue to wander the forest, you come across a lake, so deep you can’t see the bottom. Koi fish swim around and for a moment you swear you can see a light flicker below. What do you do?",
        image: "./img/pond.png",
        exitOptions: [
            { key: "quest3", text: "Jump in the water and go for a swim", value: 5 },
            { key: "quest3", text: "Try to catch a koi fish.", value: 10 },
            { key: "quest3", text: "Take a sip of the water." , value: 15},
            { key: "quest3", text: "Ignore the water, still water is never safe.", value: 20},
            { key: "quest3", text: "Just dip your feet in for a moment.", value: 1}
        ],
    },
    quest3: {
        name: "Something or Someone Is Near...",
        description: "Eventually a voice begins to speak. You look around for a moment and realize a koi fish is speaking to you! It begins to say:",
        image: "./img/koi-pond.png",
        exitOptions: [
            { key: "quest4", text: "What are you doing here? Don’t you have a test tomorrow?", value: 20 },
            { key: "quest4", text: "Not all who wander are lost… but you’re lost as hell.", value: 5 },
            { key: "quest4", text: "You’re going the wrong way, turn around. " , value: 10},
            { key: "quest4", text: "Free me! FREE ME!", value: 15},
            { key: "quest4", text: "Can you get me a glass of water?", value: 1}
        ]
    },
    quest4: {
        name: "Lonely Cabin",
        description: "Ignoring the voice of the fish, you continue your journey. Soon enough you come across a cabin in the woods. What do you do?",
        image: "./img/cabin.png",
        exitOptions: [
            { key: "quest5", text: "Wait outside the cabin", value: 20 },
            { key: "quest5", text: "Sneak in through the open window on the side.", value: 5 },
            { key: "quest5", text: "Break the front door down." , value: 10},
            { key: "quest5", text: "Knock on the door", value: 15},
            { key: "quest5", text: "Yell for help", value: 1}
        ]
    },
    quest5: {
        name: "BEAR!!!",
        description: "Before you know it, you find yourself in the cabin following a large brown bear with golden locks. He offers you some food and asks why you have come to his house. What do you tell him?",
        image: "./img/bear-food.png",
        exitOptions: [
            { key: "quest6", text: "Ask for the nearest town with humans", value: 20 },
            { key: "quest6", text: "Lie to him, you don’t know if you can trust him", value: 5 },
            { key: "quest6", text: "Ask for a place to stay the night" , value: 10},
            { key: "quest6", text: "Explain your situation to him", value: 15},
            { key: "quest6", text: "Apologize for intruding and offer to help around the house for his generosity", value: 1}
        ]
    },
    quest6: {
        name: "Sleep Over",
        description: "The bear listens closely to the words you say. He offers you a place to stay for the night, but in the morning you must be on your way. He tells you that there is a library in the heart of the forest. There, you can find:",
        image: "./img/bear-home.png",
        exitOptions: [
            { key: "quest7", text: "A book with the answers to any problem in the world, but not the steps to achieve those goals", value: 20 },
            { key: "quest7", text: "A book with the best jokes, but you will never be able to share them with anyone", value: 5 },
            { key: "quest7", text: "A book which tells you of your future, but once you read it, you can never change your fate" , value: 10},
            { key: "quest7", text: "A book that fixes the world’s problems, but you will never get to experience that world", value: 15},
            { key: "quest7", text: "A book that tells you everyone’s soulmate, but not your own", value: 1}
        ]
    },
    quest7: {
        name: "Next Morning",
        description: "The next morning you go out in search of the library, with the bear trailing behind to make sure you make it there safely. To pass time throughout the long journey, you:",
        image: "./img/bear.png",
        exitOptions: [
            { key: "quest8", text: "Ask more questions about the library and book you seek", value: 20 },
            { key: "quest8", text: "Hum songs, soon the bear starts to hum along too", value: 5 },
            { key: "quest8", text: "Begin recounting your own funny stories", value: 10},
            { key: "quest8", text: "Ask the bear about his story", value: 15},
            { key: "quest8", text: "Ask if all the creatures in the forest can talk", value: 1}
        ]
    },
    quest8: {
        name: "Stone...",
        description: "Before the bear gets the chance to answer, you trip on a stone and:",
        image: "./img/stone.png",
        exitOptions: [
            { key: "quest9", text: "Break my arm, it’s painful but not a necessity in order to get home", value: 20 },
            { key: "quest9", text: "Fall face flat, I hear the bear laugh behind me", value: 5 },
            { key: "quest9", text: "Catch myself! You’ll never catch me slipping", value: 10},
            { key: "quest9", text: "Hit my head, the worst case scenario is a concussion", value: 15},
            { key: "quest9", text: "The bear catches me, saving me once again", value: 1}
        ]
    },
    quest9: {
        name: "Proceeding Forward",
        description: "As you carefully walk through the rest of the forest, you finally come face to face with a looming library. Beautiful, yet ominous. Before you enter, you must answer the following question: “Why do you deserve to enter?",
        image: "./img/library.png",
        exitOptions: [
            { key: "quest10", text: "I seek knowledge, and I’ve been told you hold all the knowledge I need. Let me enter, and I will change the world.", value: 20 },
            { key: "quest10", text: "I just want to go home", value: 5 },
            { key: "quest10", text: "Because I have survived this far.", value: 10},
            { key: "quest10", text: "I want to know if the legends of the library are true.", value: 15},
            { key: "quest10", text: "I don’t, but the bear does.", value: 1}
        ]
    },
    quest10: {
        name: "Inside the Mysterious Library",
        description: "As you make your way to the library, the doors begin to open, you and the bear slowly walk in. You immediately see the book you seek, sitting at a podium at the center of the room. As you approach, the world around you begins to fade away. Suddenly you hear a calm and soft voice in the distance. What does it tell you? ",
        image: "./img/book.png",
        exitOptions: [
            { key: "end", text: "Knowledge without action is a riddle without a solution.", value: 15 },
            { key: "end", text: "Laughter trapped in solitude echoes the loudest in the soul.", value: 5 },
            { key: "end", text: "To glimpse the future is to surrender the freedom of tomorrow." , value: 10 },
            { key: "end", text: "A better world needs those willing to plant seeds for trees they'll never sit under.", value: 1 },
            { key: "end", text: "To see the threads of others' hearts but not your own is the loneliest wisdom.", value: 20 },
        ]
    },
};

// Create a new howler sound object for the background music
var backgroundMusic = new Howl({
    src: ['./sound/woods.mp3'],
    loop: true,
});

let isPlaying = false;

// Handle play/pause button click
$('#music-button').click(function () {
    if (isPlaying) {
        backgroundMusic.pause();
        $(this).html('&#9658;'); // Play symbol
    } else {
        backgroundMusic.play();
        $(this).html('&#10074;&#10074;'); // Pause symbol
    }
    isPlaying = !isPlaying; // Toggle the playing state
});

// Autoplay policies: play music after user interaction
$(document).one('click', function () {
    if (!isPlaying) {
        backgroundMusic.play();
        $('#music-button').html('&#10074;&#10074;'); // Pause symbol
        isPlaying = true;
    }
});

// document.addEventListener('click', function() {
//     // Play the background music when the user interacts with the page.
//     backgroundMusic.play();
//   })

// Function to display the room description in a container with a border
function displayRoomDescription() {
    const output = document.getElementById(outputHTMLid); // Assuming you have an output element
    if (output) {
        // Clear previous content
        clearDisplayArea(); // Clear the display area (function to clear previous content)
        
        // Create a div to hold the room description
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('room-description');
        
        // Set the room description text
        descriptionContainer.innerHTML = `<h2>${cul.name}</h2><p>${cul.description}</p>`;
        
        // Append the description container to the output area
        output.appendChild(descriptionContainer);
        
        // Optionally, display the room's image as well
        output.innerHTML += `<img src="${cul.image}" alt="Image for ${cul.name}" style="max-width: 100%; height: auto; border-radius: 8px;">`;
        
        // Display the exit options (if needed)
        cul.exitOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = function() {
                selectRoom(option.key, option.text, option.value); // Assuming you have a function to handle room selection
            };
            output.appendChild(button);
        });
    }
}

// Global variables
let currentRoom = "cul"; // Start room key
const outputHTMLid = "js-output";
const userSelections = []; // Array to keep track of user selections
let totalScore = 0; // Variable to track total score

// Track the count of selections for specific values
const selectionCounts = {
    1: 4,
    5: 4,
    10: 4,
    15: 4,
    20: 4,
};

// Function to clear the display area
function clearDisplayArea() {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        output.innerHTML = "";
    }
}

// Function to display the current room along with its image
function displayCurrentRoom(room) {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        clearDisplayArea(); // Clear previous content
        
        // Display the room's name and description
        output.innerHTML += `<h1>${room.name}</h1>`;
        output.innerHTML += `<p class="room-description">${room.description}</p>`;
        
          // Create the image element
          const img = document.createElement('img');
          img.src = room.image; // Set the image source
          img.alt = `Image of ${room.name}`; // Set alt text
  
          // Add a class to the image element
          img.classList.add('room-image');
  
         // Append the image to the output container
         output.appendChild(img);
    }
}

// Function to apply styling to buttons 
function styleButton(button) {
    button.classList.add('exit-button'); 
}

// Function to display the available exits
function displayCurrentExits(room) {
    const output = document.getElementById(outputHTMLid); 
    if (output && room.exitOptions) {

        // Create a container to hold the buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container'); // Add the CSS class

        room.exitOptions.forEach(option => {
            // Create a button for each exit option
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = function() {
                selectRoom(option.key, option.text, option.value);
            };

            // Add styling to the button using a CSS class
            styleButton(button);

            // Append the button to the button container
            buttonContainer.appendChild(button);
        });

        // Append the button container to the output container
        output.appendChild(buttonContainer);
    } else {
        console.error('Error: No exit options or output element found.');
    }
}

// Function to handle room selection, update score, and keep track of choices
function selectRoom(nextRoom, selectedText, value) {
    console.log(`Selected: ${selectedText}, Value: ${value}`); // Debugging
    totalScore += value; // Add the selected option's value to the total score
    console.log(`Updated Total Score: ${totalScore}`); // Debugging
    userSelections.push({ room: nextRoom, choice: selectedText, points: value });
    
    // Update the selection count for the chosen value
    if (selectionCounts.hasOwnProperty(value)) {
        selectionCounts[value]++;
    }
    
    updateScoreDisplay(); // Update the displayed score
    newRoom(nextRoom);
}

// Function to load a new room
function newRoom(nextRoom) {
    const currentRoomObj = rooms[nextRoom];
    if (currentRoomObj) {
        currentRoom = nextRoom;
        clearDisplayArea();
        displayCurrentRoom(currentRoomObj);
        displayCurrentExits(currentRoomObj);
    } else {
        displayFinalScore();
    }
}

// Function to display the final score, description, and image based on selection counts
function displayFinalScore() {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        clearDisplayArea(); // Clear the display area
        output.innerHTML = `<h1>Waking Up</h1>`;
        output.innerHTML += `<p>Your total score is: ${totalScore}</p>`;

        // Determine the most frequently selected value
        let mostSelectedValue = null;
        let maxCount = 0;

        for (const [value, count] of Object.entries(selectionCounts)) {
            if (count > maxCount) {
                maxCount = count;
                mostSelectedValue = value;
            }
        }

        // Map values to descriptions and images
        const descriptions = {
            1: "You suddenly wake up in Oakes/RCC College. This college is represented by people who are guided by love and care for others and the Earth, holding the campus on their backs. They provide support through laughter and love, offering love and support to those seeking company. Affiliates are prepared to build and care for their communities.",
            5: "You suddenly wake up in Porter/Kresge College. This college is represented by people who create stories, art, and ideas that could shape the world. Their strengths come from imagination and ambition, often presenting bizarre ideas with great results. They believe their dreams can be realized in reality.",
            10: "You suddenly wake up in Cowell/Stevenson College. This college is represented by people who are social, natural leaders, and active members of UCSC's sports, fraternities, and organizations. Despite criticism for their bossy and controlling nature, they excel in planning and facilitating well.",
            15: "You suddenly wake up in 9/JRL College. This college is represented by people who are dedicated to peace, justice, and promoting harmony here at UCSC. They advocate for their beliefs in their communities and globally, often avoiding confrontation. Their love and empathy guide them through university, ensuring a balanced and balanced environment.",
            20: "You suddenly wake up in Crown/Merrill College. This college is represented by people who appreciate quiet life and are often the brainiest. They are problem solvers and adaptable, but struggle with heart problems. Embracing this college requires independence and practicing independence.",
        };

        const images = {
            1: "./img/oakes.png",
            5: "./img/porter.png",
            10: "./img/stevenson.png",
            15: "./img/nine.png",
            20: "./img/crown.png",
        };

       // Display the corresponding description and image
       if (mostSelectedValue !== null) {
        // Create a container for the description with a border
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description-container');
        descriptionContainer.textContent = descriptions[mostSelectedValue];
        output.appendChild(descriptionContainer);

        // Add the image with class for styling
        output.innerHTML += `<img src="${images[mostSelectedValue]}" alt="Image for ${descriptions[mostSelectedValue]}" class="final-image">`;
    } else {
        output.innerHTML += `<p>No specific affiliation could be determined based on your choices.</p>`;
    }
    
       // Add credits at the bottom
       const creditsContainer = document.createElement('div');
       creditsContainer.classList.add('credits-container');
       creditsContainer.innerHTML = `
            <p>Thank You For Playing!<p>
           <p>CREDITS:</p>
            <p>Project Leader - Madison De La Merce <p>
           <p>Art Design by John Conrad & Story by Dani Dayao <p> 
           <p>Technical Team - Kimberly Estrada, Deigo Garcia, Pennetha Jayakumar <p>
       `;
       output.appendChild(creditsContainer);
   }
}

// Function to update the score display
function updateScoreDisplay() {
    const scoreElement = document.getElementById("score-display");
    if (scoreElement) {
        scoreElement.textContent = `Score: ${totalScore}`;
    } else {
        console.error("Score display element not found.");
    }
}

// Initialize the application
window.onload = function () {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        output.innerHTML = `<div id="score-display">Score: 0</div>`; // Initial score display
    }
    newRoom(currentRoom);
};


