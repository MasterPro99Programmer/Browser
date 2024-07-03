// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Add an event listener to the search button
searchBtn.addEventListener('click', function() {
    // Get the search query from the input field
    const searchQuery = searchInput.value.trim();

    // Open a new tab with the search results
    window.open(`https://www.google.com/search?q=${searchQuery}`);
});

// Get the news list element
const newsList = document.getElementById('news-list');

// Fetch news data from a API (e.g. News API)
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
   .then(response => response.json())
   .then(data => {
        // Loop through the news articles and create list items
        data.articles.forEach(article => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${article.url}">${article.title}</a>`;
            newsList.appendChild(listItem);
        });
    })
   .catch(error => console.error(error));

   // Get the toggle button and content elements
const toggleButton = document.getElementById('dark-mode-toggle');
const contentElement = document.getElementById('content');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the dark mode class on the body and content elements
  document.body.classList.toggle('dark-mode');
  contentElement.classList.toggle('dark-mode');
});