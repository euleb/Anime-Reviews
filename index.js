
// Function to fetch the anime data and assign constants
function fetchAndSetupAnime(animeId, titleId, imageId, popupData) {
    fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
        .then((response) => response.json())
        .then(data => {
            const animeData = data.data;

            // Assign the title and image URL to the respective elements
            document.getElementById(titleId).textContent = animeData.title;
            const imgElement = document.getElementById(imageId);
            imgElement.src = animeData.images.jpg.image_url;
        })
        // Handles errors
        .catch(error => console.error(`Error fetching data for ${animeId}:`, error));
}

// Adds ability to search through animes
// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const gallery = document.getElementById('gallery');
  const cards = gallery.getElementsByClassName('hoverinfo_trigger');
   // Handles user input
  searchInput.addEventListener('input', function() {
    const userAnime = searchInput.value.toLowerCase();
    Array.from(cards).forEach(card => {
      const tooltip = card.querySelector('.tooltip');
      const title = tooltip ? tooltip.textContent.toLowerCase() : '';
      if (title.includes(userAnime)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// Call the function for each anime ID
fetchAndSetupAnime(34572, "title", "imageUrl");
fetchAndSetupAnime(11061, "title2", "imageUrl2");
fetchAndSetupAnime(22319, "title3", "imageUrl3");
fetchAndSetupAnime(32182, "title4", "imageUrl4");
fetchAndSetupAnime(9919, "title5", "imageUrl5");
fetchAndSetupAnime(40748, "title6", "imageUrl6");
fetchAndSetupAnime(48549, "title7", "imageUrl7");
fetchAndSetupAnime(36649, "title8", "imageUrl8");
fetchAndSetupAnime(38000, "title9", "imageUrl9");
fetchAndSetupAnime(33255, "title10", "imageUrl10");
fetchAndSetupAnime(31043, "title11", "imageUrl11");
fetchAndSetupAnime(39533, "title12", "imageUrl12");
fetchAndSetupAnime(1735, "title13", "imageUrl13");
fetchAndSetupAnime(37520, "title14", "imageUrl14");
fetchAndSetupAnime(37430, "title15", "imageUrl15");