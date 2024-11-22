function startQuiz() {
  showNext('question1');
}

// Show the next section
function showNext(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

// Validate the name question
function validateName(answer) {
  // Display the message based on the answer
  if (answer.toLowerCase().includes('fadoua')) {
    document.getElementById('result-message').textContent = "Correct! It's me, your love 💖!";
  } else if (answer.toLowerCase().includes('fadouaaa el chikouraaaaa')) {
    document.getElementById('result-message').textContent = "I'm always a Chikouraaa, Ilyes! 😘";
  }

  // Proceed to the next question after displaying the message
  showNext('question3');
}

// Validate the love question
function validateLove(answer) {
  if (answer.toLowerCase() === 'yes') {
    showNext('love-response');
  } else {
    alert("Wrong answer! Try again!");
  }
}

// Show the "Kiss Me!" section
function showKissMe() {
  showNext('kiss-me');
}

// Proceed to the "Big Turn" section
function goToBigTurn() {
  showNext('big-turn');
}

// Validate the favorite book question
function checkBookAnswer(answer) {
  const bookResponse = document.getElementById('book-response');

  if (answer.toLowerCase() === 'fourthwing') {
    bookResponse.textContent = "Chikourr ❤️❤️❤️";
    showNext('now-screen');
  } else {
    bookResponse.textContent = "T7wss nrdlk lymak? 😂";
    showNext('response-section');
  }
}

// Show the video section
function showVideoButton() {
  showNext('video-section');
  const watchVideoBtn = document.getElementById('watch-video-btn');
  watchVideoBtn.style.display = 'block';
}

// Play the video and transition to the letter intro after it ends
function playVideo() {
  const video = document.getElementById('birthday-video');
  const watchVideoBtn = document.getElementById('watch-video-btn');

  watchVideoBtn.style.display = 'none';
  video.style.display = 'block';
  video.style.width = '50%';
  video.style.position = 'absolute';
  video.style.top = '50%';
  video.style.left = '50%';
  video.style.transform = 'translate(-50%, -50%)';
  video.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  video.style.borderRadius = '10px';

  video.play();

  video.addEventListener('ended', () => {
    showNext('letter-intro');
  });
}

function openLetter() {
  const letterContent = document.getElementById('letter-content');

  // Toggle visibility of the letter content
  letterContent.classList.toggle('hidden');
}

    

// Show the Mwah section after the letter
function goToMwah() {
  showNext('mwah-section');
}
function showSecondVideo() {
  const videoSection = document.getElementById('second-video-section');
  const video = document.getElementById('second-video');

  // Show the video section
  showNext('second-video-section'); // Ensure this un-hides the section

  // Make the video visible and play
  video.style.display = 'block'; // Ensures the video is visible
  video.style.width = '60%'; // Set a medium size for the video
  video.style.margin = '0 auto'; // Center it horizontally
  video.style.position = 'relative'; // Relative to the container

  // Start the video playback
  video.play().catch((error) => {
    console.error('Error playing the video:', error);
  });
}
// Show the "And Finally" button after the second video ends
function showAndFinallyButton() {
  showNext('and-finally-section');
}

// Display the "Mwahhhhh" message
function showMwahMessage() {
  showNext('mwah-message-section');
}

// Show and play the final video
function showFinalVideo() {
  const videoSection = document.getElementById('final-video-section');
  const video = document.getElementById('final-video');

  // Show the final video section
  showNext('final-video-section');

  // Style the video for center positioning and medium size
  video.style.display = 'block';
  video.style.width = '60%'; // Adjust size as needed
  video.style.margin = '0 auto';
  video.style.position = 'relative';

  // Start playing the video
  video.play().catch((error) => {
    console.error('Error playing the video:', error);
  });
}

// Add event listener for the end of the second video
document.getElementById('second-video').addEventListener('ended', showAndFinallyButton);


