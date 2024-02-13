var currentImageIndex = 0;
var totalImages = 14; // Change this to the total number of images you have
var buttonClicked = false; // Variable to track if the button has been clicked before

// Array of captions corresponding to each image
var captions = [
    "Kartais reikalaujanti drąsos",
    "Tokia dark mysterious, hot",
    "Reikalajanti dėmesio",
    "Labai seksova",
    "Dėmesinga ir koncentruota",
    "Kartais reikalaujanti poilsio",
    "Kitokia nei visų?",
    "Tikra",
    "Tikrai reikalaujanti drąsos...",
    "Kupina adrenalino",
    "Kupina šilumos",
    "Staigi, žaibiška, nenuspėjama, neadekvati vapšie",
    "Labai kieta ir verta kitų dėmesio",
    "What a hell man?",
];

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= totalImages) {
        // If it's the last photo, show the text container and hide the image gallery
        document.getElementById('imageGallery').style.display = 'none';
        document.getElementById('textContainer').style.display = 'block';

        return; // Stop further execution
    }
    document.getElementById('loveHeading') .style.display = 'block'; // Show the heading
    document.getElementById('galleryImage').src = 'images/' + currentImageIndex + '.jpg';
    document.getElementById('caption').innerText = captions[currentImageIndex - 1]; // Subtract 1 because array indices start from 0

    if (buttonClicked) {
        // If the button has been clicked before, change the button text to "Žiūrim toliau"
        document.getElementById('galleryButton').innerText = 'Žiūrim toliau';
    } else {
        // If the button hasn't been clicked before, change the button text to "Žiūrim"
        document.getElementById('galleryButton').innerText = 'Kas toliau';
        buttonClicked = true; // Update the buttonClicked variable to true
    }
}

function startMusicAndOpenGallery() {
    // Start playing the music
    var audio = new Audio('music/1.mp3');
    audio.play();
    audio.currentTime = 21; // Skip the first 21 seconds of the audio

    // Hide the start button
    document.getElementById('startBtn').style.display = 'none';

    // Show the image gallery container
    document.getElementById('imageGallery').style.display = 'block';
}
