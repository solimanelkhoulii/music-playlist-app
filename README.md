# Music Playlist App

A full-stack web application built with Node.js and Express that lets users search for songs using the iTunes API and manage a personal playlist.

## Features
- Search songs by title using the iTunes public API (no API key required)
- Browse up to 20 search results with title, artist, and album artwork
- Add songs to a personal playlist
- Reorder playlist with up/down controls
- Remove songs from playlist
- Playlist persists across browser sessions using localStorage

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, vanilla JavaScript
- **API:** iTunes Search API
- **Persistence:** localStorage

## Setup
1. Clone the repo and navigate to the folder
2. Install dependencies: `npm install`
3. Start the server: `node server.js`
4. Open http://localhost:3000 in your browser

## Usage
Enter a song title in the search box and click Submit. Click + to add songs to your playlist. Use the up/down arrows to reorder, and - to remove songs.