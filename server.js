const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Serve static files from 'public' directory 
app.use(express.static('public'));

// Handle multiple routes
app.get(['/', '/mytunes', '/mytunes.html', '/index.html'], (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API endpoint to search iTunes
app.get('/search', async (req, res) => {
  const songTitle = req.query.title;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(songTitle)}&entity=song&limit=20`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Limit to 20 songs
    const songs = data.results.slice(0, 20).map(song => ({
      title: song.trackName,
      artist: song.artistName,
      artwork: song.artworkUrl100
    }));
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Server running at http://localhost:${port}/mytunes`);
  console.log(`Server running at http://localhost:${port}/index.html`);
  console.log(`Server running at http://localhost:${port}/mytunes.html`);
});