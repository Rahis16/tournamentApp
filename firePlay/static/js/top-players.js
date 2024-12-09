const searchInput = document.getElementById('searchTopPlayer');
const playerItems = document.querySelectorAll('.player'); // Assuming each player has a "player" class

// Filter top players as user types
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    // Loop through all player items
    playerItems.forEach(player => {
        const playerName = player.querySelector('.details h3').textContent.toLowerCase();

        // Show or hide player based on search query
        if (playerName.includes(query)) {
            player.style.display = "flex"; // Show matching player
        } else {
            player.style.display = "none"; // Hide non-matching player
        }
    });
});
