Affidavit:
"I attest that I am the sole author of this submitted work and any code borrowed from other sources has been identified by comments placed in my submitted code.
Soliman Elkhouli, 101244211"

---------------------------------------------------
Assignment Overview:

This submission is for COMP 2406 Assignment 4 (Winter 2025), focusing on building an Express.js server with a thick client to manage a music playlist. The application:
- Uses the iTunes public API to fetch song data (title, artist, artwork) based on user search input.
- Features a server that abstracts the API interaction and a client that handles DOM manipulation and playlist management.
- Implements a playlist with add/remove/move functionality and persists it using client-side localStorage.
The project satisfies the requirements outlined in the Assignment 4 specification, including server-side API calls, client layout, behavior, and persistence.

---------------------------------------------------
Install Instructions:

1. Ensure you have Node.js (version 18.x.x or higher) and npm installed on your system.
2. Download and extract the assignment files to a preferred directory (e.g., "C:\Users\Soliman\Assignment4").
3. Open a terminal and navigate to the project folder:
   cd path/to/Assignment4
4. Install the necessary dependencies:
   npm install
5. This will create a node_modules/ directory and a package-lock.json file. 

---------------------------------------------------
Launch Instructions:

1. Start the server:
   cd path/to/Assignment4
   node server.js
2. The application will be available at: http://localhost:3000
3. Stop the server with Ctrl+C when finished testing.

---------------------------------------------------
Testing Instructions:

1. Open a Chrome browser and visit: http://localhost:3000/
2. Verify the following functionality:
   - Initial Load: The page loads with an empty Playlist area, an Input area ("Enter Song Title:" with text field and Submit button), and a Search Results area.
   - Search Songs: Enter a song title (e.g., "Body And Soul") in the text field and click "Submit" or press Enter. Verify that the Search Results area updates with a heading like "Songs matching: Body And Soul" and a table showing up to 20 songs with columns: "+" button, title, artist, and artwork image.
   - Add Song: Click the "+" button next to a search result. Verify the song appears at the bottom of the Playlist table with columns: "-/up/down" buttons, title, artist, artwork.
   - Remove Song: Click the "-" button in the Playlist. Verify the song is removed instantly.
   - Move Song: Click the "🔼" (up) or "🔽" (down) buttons in the Playlist. Verify the song moves up/down one position (ignored if at top/bottom) and updates instantly.
   - Persistence: Reload the page or close/reopen the browser. Verify the playlist remains as it was.
   - Multiple URLs: Test http://localhost:3000/mytunes, http://localhost:3000/mytunes.html, http://localhost:3000/index.html, and http://localhost:3000/. All should load the same page.
3. Ensure the server is running during testing.

---------------------------------------------------
Known Issues:

- Ensure port 3000 is free before launching the server to avoid conflicts.
- If no songs appear after searching, try a different title and ensure an active internet connection.
- If the server fails to start, check the terminal for errors (e.g., missing dependencies or syntax errors).

---------------------------------------------------
How to Run:

1. Start the server with: node server.js
2. Navigate to http://localhost:3000 in Chrome.
3. Test the application by searching for songs (e.g., "Body And Soul"), adding them to the playlist, rearranging with up/down buttons, removing songs, and reloading the page to confirm persistence.
4. Stop the server with Ctrl+C when done.

---------------------------------------------------
Notes:

- This project uses the iTunes public API, which requires no authentication or API keys.

---------------------------------------------------
Contact:

For any questions or concerns, feel free to reach out:
Email: solimanelkhouli@cmail.carleton.ca