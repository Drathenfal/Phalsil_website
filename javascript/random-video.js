//random video

// Array of video sources
const videoSources = [
    'images/mp4/bg.mp4',
    'images/mp4/dog.mp4',
    // Add more video sources here
];

// Get the video element and the video source element
const video = document.querySelector('.bg-video');
const videoSource = document.getElementById('bg-video-source');

// Function to pick a random video source
function getRandomVideoSource() {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
}

// Function to change the video source
function changeVideoSource() {
    const randomSource = getRandomVideoSource();
    videoSource.src = randomSource;
    video.load();
}

// Change the video source initially and on page load
changeVideoSource();

// Change the video source at regular intervals (e.g., every 10 seconds)
setInterval(changeVideoSource, 10000); // Change every 10 seconds (adjust as needed)