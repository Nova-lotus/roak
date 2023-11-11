const generateButton = document.getElementById("generateButton");
const kindnessSuggestion = document.getElementById("kindnessSuggestion");
const kindnessSuggestions = [
    "Hold the door open for someone.",
    // ... rest of the suggestions ...
    "Offer your time to assist a local community center with programs for youth and families.",
];

const kindnessDescriptions = [
    "Holding the door open for someone is a simple act of kindness that can brighten someone's day.",
    // Add more descriptions here...
];

// Function to load random acts of kindness from the file
function loadRandomActsOfKindness(callback) {
    fetch('raok.txt')
        .then(response => response.text())
        .then(data => {
            console.log('File content:', data);
            const kindnessSuggestions = data.split('\n').filter(item => item.trim() !== '');
            console.log('Suggestions array:', kindnessSuggestions);
            callback(kindnessSuggestions);
        })
        .catch(error => {
            console.error('Error loading random acts of kindness:', error);
            callback([]);
        });
}

generateButton.addEventListener("click", () => {
    if (kindnessSuggestions.length === 0) {
        kindnessSuggestion.textContent = "Sorry, no suggestions available.";
    } else {
        const randomIndex = Math.floor(Math.random() * kindnessSuggestions.length);
        kindnessSuggestion.textContent = kindnessSuggestions[randomIndex];
        // Add code here to display the detailed description...
    }
});

const submissionForm = document.getElementById("submissionForm");
submissionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userSubmission = document.getElementById("userSubmission").value;
    kindnessSuggestions.push(userSubmission);
});

const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", () => {
    const postContent = encodeURIComponent(kindnessSuggestion.textContent);
    window.open(`https://twitter.com/intent/tweet?text=${postContent}`);
});