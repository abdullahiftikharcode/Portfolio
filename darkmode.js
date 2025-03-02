// Toggle dark mode and store preference in localStorage
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    
    // Update localStorage with the current mode
    localStorage.setItem('dark-theme', isDark ? 'true' : 'false');
    
    // Toggle icon visibility
    document.getElementById('iconLight').classList.toggle('d-none');
    document.getElementById('iconDark').classList.toggle('d-none');
  }
  
  // On page load, check for saved dark mode preference
  document.addEventListener('DOMContentLoaded', function () {
    const darkThemeSetting = localStorage.getItem('dark-theme');
    if (darkThemeSetting === 'true') {
      document.body.classList.add('dark-theme');
      document.getElementById('iconLight').classList.add('d-none');
      document.getElementById('iconDark').classList.remove('d-none');
    }
  });
  