const searchInput = document.getElementById('searchCreator');
const creatorItems = document.querySelectorAll('.creator2');

// Search event
searchInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();
    
    // Loop through each creator item
    creatorItems.forEach(creator => {
        const creatorName = creator.querySelector('.details h3').textContent.toLowerCase();
        
        // Show or hide the creator based on search input
        if (creatorName.includes(filter)) {
            creator.style.display = "flex"; // Show matching creator
        } else {
            creator.style.display = "none"; // Hide non-matching creator
        }
    });
});
