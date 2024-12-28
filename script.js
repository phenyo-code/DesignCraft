// Toggle Navigation Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Animate Hamburger Icon
  document.querySelectorAll('.line').forEach((line, index) => {
    line.classList.toggle(`open`);
  });
});

// Show Popup
const applyButtons = document.querySelectorAll('.btn-apply');
const popupForm = document.getElementById('popupForm');
const closePopup = document.getElementById('closePopup');

applyButtons.forEach(button => {
  button.addEventListener('click', () => {
    popupForm.style.display = 'flex';
  });
});

// Close Popup
closePopup.addEventListener('click', () => {
  popupForm.style.display = 'none';
});

// Close Popup When Clicking Outside
window.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    popupForm.style.display = 'none';
  }
});

// Form Submission
document.getElementById('applicationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Application submitted successfully!');
  popupForm.style.display = 'none';
});

document.addEventListener('click', function (event) {
  const statsButton = document.querySelector('.stats-button');
  const popupMenu = document.querySelector('.popup-menu');

  if (!statsButton.contains(event.target)) {
    popupMenu.style.display = 'none';
  } else {
    popupMenu.style.display = 'block';
  }
});

document.addEventListener('click', function (event) {
  const statsButton = document.querySelector('.stats-button');
  const popupMenu = document.querySelector('.popup-menu');

  if (!statsButton.contains(event.target)) {
    popupMenu.style.display = 'none';
  } else {
    popupMenu.style.display = 'block';
  }
});





