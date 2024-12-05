/*
 * Author: Kimberly Estrada <kestrad9@ucsc.edu>
 * Date: 12-9-2024
 * Description: This script is an implementation of experimenting with data objects that help hide and show 
 * descriptions of locations, available exits, and more. This approach makes it clean and accessible to different pages and buttons without needing several different HTML pages.
 * Credits to Chat GPT and WesBot for helping and guiding me through the javascript code for this project.
 * 
*/

// Room definitions
const rooms = {
    cul: {
        name: "Forest or Food?",
        description: "You wake up in the middle of a forest, with no recollection of how you got there. Where do you choose to go?",
        exitOptions: [
            { key: "food", text: "Towards the smell of food" },
            { key: "forest", text: "Deeper into the forest to explore." }
        ]
    },
    food: {
        name: "Towards the smell of food",
        description: "As you head towards the smell of food, you come across a small cabin in the woods, where you hear humming coming from inside. What do you do?",
        exitOptions: [
            { key: "window", text: "Slip in through the open side window" },
            { key: "knock", text: "Knock on the door" }
        ]
    },
    window: {
        name: "Through the window",
        description: "You slip in through the side window and fall to the ground with a crash. The humming stops. You look up and see:",
        exitOptions: [
            { key: "mother", text: "Your mother, smiling down at you, holding a bowl of your favorite food." },
            { key: "bear", text: "A bear with golden braids, staring down in confusion." }
        ]
    },
    mother: {
        name: "Dining with mother",
        description: "Your mother invites you to eat in the dining room as she hums a song from your childhood. What do you do?",
        exitOptions: [
            { key: "eat", text: "Eat the food she graciously offered." },
            { key: "run", text: "Run. Before it's too late." }
        ]
    },
    eat: {
        name: "Consuming the food",
        description: "As your stomach grumbles, you quickly scarf down the food. Yet, the more you eat, the more the world around you begins to melt away.",
        exitOptions: [
            { key: "HMMMM", text: "HMMMM" }
        ]
    },
    HMMMM: {
        name: "Waking up",
        description: "You suddenly wake up, back in your house. You should not dorm... You will miss home too much, and you are too trusting for your own good."
    },
    knock: {
        name: "Knocking on the door",
        description: "You knock on the door again and again, but no one answers. What do you do?",
        exitOptions: [
            { key: "keep", text: "Keep knocking" },
            { key: "window", text: "Give up and go through the side window." }
        ]
    },
    keep: {
        name: "Continue Knocking",
        description: "After 10 minutes of knocking, a deep voice exclaims angrily, 'Enough!'. Seconds pass before a large grumpy bear opens the door. What do you do?",
        exitOptions: [
            { key: "intro", text: "You introduce yourself."},
            { key: "sorry", text: "You apologize profusely"},
        ]
    },
    intro: {
        name: "Introducing Yourself",
        description: "The bear pauses, shocked to see a human at his door. He invites you inside. Do you follow?",
        exitOptions: [
            { key: "no", text: "NO"},
            { key: "yes", text: "YES"},
        ]
    },
    sorry:{
        name: "Apologizing Profusely",
        description: "The bear laughs. He didn't mean to scare you. He asks why you are at his door, distrubing his sleep.",
        exitOptions: [
            { key: "explain", text: "Explain your situation to him."},
            { key: "beg", text: "Beg for food and place to stay."},
        ]
    },
};

// Global variables
let currentRoom = "cul"; // Start room key
const outputHTMLid = "js-output";

// Function to clear the display area
function clearDisplayArea() {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        output.innerHTML = "";
    }
}

// Function to display the current room
function displayCurrentRoom(room) {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        output.innerHTML += `<h1>${room.name}</h1>`;
        output.innerHTML += `<p>${room.description}</p>`;
    }
}

// Function to display the available exits
function displayCurrentExits(room) {
    const output = document.getElementById(outputHTMLid);
    if (output && room.exitOptions) {
        room.exitOptions.forEach(option => {
            output.innerHTML += `<button onclick="newRoom('${option.key}')">${option.text}</button>`;
        });
    }
}

// Function to move to a new room
function newRoom(nextRoom) {
    if (!rooms[nextRoom]) {
        console.error(`Room "${nextRoom}" does not exist.`);
        return;
    }
    currentRoom = nextRoom;
    const currentRoomObj = rooms[currentRoom];
    clearDisplayArea();
    displayCurrentRoom(currentRoomObj);
    displayCurrentExits(currentRoomObj);
}

// Adding a class to the descriptions in ordert to style it
function displayCurrentRoom(room) {
    const output = document.getElementById(outputHTMLid);
    if (output) {
        output.innerHTML += `<h1>${room.name}</h1>`;
        output.innerHTML += `<p class="room-description">${room.description}</p>`;
    }
};

// Initialize the game
window.onload = function () {
    newRoom(currentRoom);
};