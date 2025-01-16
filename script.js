const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

const API_KEY = 'AIzaSyBRUEy7lEAyBvKmel1AZZSiGJOIoIsUdoA';

const fetchBooks = async (query) => {
    const GOOGLE_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try{
        const response = await fetch(GOOGLE_BOOKS_API_URL);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error('error', error);
    }
}


searchBtn.addEventListener('click', (event) => {
    const query = searchInput.value.trim();
    if(query) {
        fetchBooks(query)
    }
})