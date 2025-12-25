function toggleDropdown(element) {
    if (window.innerWidth <= 992) {
        // Stop the click from affecting anything else
        event.stopPropagation();
        
        // Toggle the class on the clicked LI
        element.classList.toggle('active');
    }
}