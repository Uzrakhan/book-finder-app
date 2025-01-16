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
        displayBooks(data);
    } catch(error) {
        console.error('error', error);
    }
}

function displayBooks(books) {
    resultsDiv.innerHTML = '';

    if(!books.items || books.items.length === 0) {
        console.log('no books available');
        resultsDiv.innerHTML = '<p>Nobooks available.</p>'
        return;
    }

    books.items.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
         <div class="book-card">
          <div class="left">
            <img src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="${book.volumeInfo.title}" style="width: 11vw; height: auto;">
            <h5>${book.volumeInfo.title || 'No Title'}</h5>
          </div>
          <div class="right">
            <p><strong>Authors: </strong>${book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>
            <p><strong>Publisher: </strong>${book.volumeInfo.publisher || 'Unknown Publisher'}</p>
            <p><strong>Published Date: </strong>${book.volumeInfo.publishedDate || 'Unknown published date'}</p>
            <button onclick="fetchBookDetails(${book.id}">View Details</button>
          </div>

         </div>
        `;
        resultsDiv.appendChild(bookDiv);
    })
};

function fetchBookDetails(book) {
    
}

searchBtn.addEventListener('click', (event) => {
    const query = searchInput.value.trim();
    if(query) {
        fetchBooks(query)
    }
})