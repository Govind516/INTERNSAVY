const navLinks = document.querySelectorAll('.nav_link');

// Add click event listener to each navbar link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId); // Find the target section

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
    }
  });
});