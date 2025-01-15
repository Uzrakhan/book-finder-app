import express, { json } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();

const PORT = 4001;


app.use(cors());
app.use(json());

app.get('/api/books', async (req,res) => {
    if(!query) {
        return res.status(400).json({error: 'Query parameter is required.'});
    }

    const API_KEY = 'AIzaSyBRUEy7lEAyBvKmel1AZZSiGJOIoIsUdoA';
    const GOOGLE_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=`;

    try{
        const response = await fetch(`${GOOGLE_BOOKS_API_URL}${query}`);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error('Error fetching books:',error);
        res.status(500).json({ error: 'Error fetching data from Google Books API.' });
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})