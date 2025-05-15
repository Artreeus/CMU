/**
 * Department listing search and filter functionality
 * This script manages the search and filter features for the department cards
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input elements
    const searchInput = document.getElementById('departmentSearch');
    const facultySelect = document.getElementById('facultyFilter');
    const departmentItems = document.querySelectorAll('.department-item');
    
    // Add event listeners
    searchInput.addEventListener('input', filterDepartments);
    facultySelect.addEventListener('change', filterDepartments);
    
    /**
     * Filter departments based on search text and faculty selection
     */
    function filterDepartments() {
        const searchText = searchInput.value.toLowerCase();
        const selectedFaculty = facultySelect.value;
        
        // Loop through all department items
        departmentItems.forEach(function(item) {
            const departmentTitle = item.querySelector('.department-title').textContent.toLowerCase();
            const faculty = item.getAttribute('data-faculty');
            
            // Check if the item matches both search text and faculty filter
            const matchesSearch = departmentTitle.includes(searchText);
            const matchesFaculty = selectedFaculty === 'all' || faculty === selectedFaculty;
            
            // Show or hide the item based on the filters
            if (matchesSearch && matchesFaculty) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Check if no results found and display a message
        checkNoResults();
    }
    
    /**
     * Check if no departments match the current filters
     * and display a message if needed
     */
    function checkNoResults() {
        // Count visible items
        const visibleItems = document.querySelectorAll('.department-item[style="display: block"]');
        
        // Find or create the no-results message element
        let noResultsMsg = document.getElementById('noResultsMessage');
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMessage';
            noResultsMsg.className = 'col-12 text-center my-5';
            noResultsMsg.innerHTML = '<h3>No departments found matching your criteria</h3>';
            
            // Insert after the department cards container
            const cardsContainer = document.getElementById('departmentCards');
            cardsContainer.parentNode.insertBefore(noResultsMsg, cardsContainer.nextSibling);
        }
        
        // Show or hide the message based on results
        if (visibleItems.length === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }
    
    // Initialize any other features
    function init() {
        // Set all items to display block initially to fix any display issues
        departmentItems.forEach(item => {
            item.style.display = 'block';
        });
    }
    
    // Run initialization
    init();
});