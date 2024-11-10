function showContent(section) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(sec) {
        sec.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Default to showing the home section on page load
window.onload = function() {
    showContent('home');
};
