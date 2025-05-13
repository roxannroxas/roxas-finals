// Placeholder for JavaScript functionality
console.log("Portfolio loaded.");

// Function to switch sections
function showSection(id) {
  const sections = document.querySelectorAll('main .section');
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
}

// Optional: Automatically show the 'home' section on page load
window.onload = () => {
  showSection('home');
};
