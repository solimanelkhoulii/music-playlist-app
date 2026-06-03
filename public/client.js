document.addEventListener('DOMContentLoaded', () => {
  const playlistTable = document.querySelector('#playlist-table tbody');
  const searchTable = document.querySelector('#search-results-table tbody');
  const songTitleInput = document.getElementById('song-title');
  const submitBtn = document.getElementById('submit-btn');
  const searchHeading = document.getElementById('search-heading');

  // Load playlist from local storage
  let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
  renderPlaylist();

  submitBtn.addEventListener('click', searchSongs);
  songTitleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchSongs();
  });

  async function searchSongs() {
    const title = songTitleInput.value.trim();
    if (!title) return;
    searchHeading.textContent = `Songs matching: ${title}`;
    const response = await fetch(`/search?title=${encodeURIComponent(title)}`);
    const songs = await response.json();
    renderSearchResults(songs);
  }

  function renderPlaylist() {
    playlistTable.innerHTML = '';
    playlist.forEach((song, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <button onclick="removeSong(${index})">-</button>
          <button onclick="moveSongUp(${index})">🔼</button>
          <button onclick="moveSongDown(${index})">🔽</button>
        </td>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td><img src="${song.artwork}" alt="Artwork"></td>
      `;
      playlistTable.appendChild(row);
    });
    localStorage.setItem('playlist', JSON.stringify(playlist)); 
  }

  function renderSearchResults(songs) {
    searchTable.innerHTML = '';
    songs.forEach((song, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><button onclick="addSong(${index})">+</button></td>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td><img src="${song.artwork}" alt="Artwork"></td>
      `;
      searchTable.appendChild(row);
    });
    window.currentSearchResults = songs; 
  }

  window.addSong = (index) => {
    playlist.push(currentSearchResults[index]);
    renderPlaylist();
  };

  window.removeSong = (index) => {
    playlist.splice(index, 1); 
    renderPlaylist();
  };

  window.moveSongUp = (index) => {
    if (index > 0) {
      [playlist[index], playlist[index - 1]] = [playlist[index - 1], playlist[index]]; 
      renderPlaylist();
    }
  };

  window.moveSongDown = (index) => {
    if (index < playlist.length - 1) {
      [playlist[index], playlist[index + 1]] = [playlist[index + 1], playlist[index]]; 
      renderPlaylist();
    }
  };
});