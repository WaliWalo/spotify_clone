const populateAlbums = function () {
  let albumDiv = document.querySelector("#v-pills-home>div");

  // ROW TITLE
  let rowTitle = document.createTextNode("#TGIFRIDAY");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  albumsLocal = JSON.parse(localStorage.getItem("albums"));
  for (let i = 0; i < albumsLocal.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${albumsLocal[i].album}"
                                ><img src="${albumsLocal[i].imageUrl}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${albumsLocal[i].album}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
};

const populateLibrary = function () {
  let albumDiv = document.querySelector("#v-pills-library>div");
  // ROW TITLE
  let rowTitle;
  if (playlists.length === 0) {
    rowTitle = document.createTextNode("#YOUR PLAYLIST IS EMPTY");
  } else {
    rowTitle = document.createTextNode("#YOUR PLAYLIST");
  }

  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < playlists.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                                <a href="album.html?${playlists[i].album}"
                                  ><img src="${playlists[i].imageUrl}" class="card-img-top" alt="..."
                                />
                                <div class="play-btn rounded-pill"></div>
                                </a>
                              </div>
                              <h6 class="card-title"><strong>${playlists[i].album}</strong></h6>
                            </div>`;
    albumRow.appendChild(albumCol);
  }
};

const addPlayList = function () {
  let artist = document.querySelector("#inputArtist").value;
  let playlistName = document.querySelector("#inputAlbum").value;
  let desc = document.querySelector("#inputDesc").value;
  let genre = document.querySelector("#inputGenre").value;
  let date = document.querySelector("#inputDate").value;
  let rating = document.querySelector("#inputRating").value;
  let image = document.querySelector("#inputFile").value;
  let url = "images/album/" + image.slice(12);
  console.log(image.slice(12));
  let newAlbum = new album(
    artist,
    playlistName,
    desc,
    date,
    genre,
    url,
    rating
  );
  addPlaylist(newAlbum);
  location.reload();
};
populateAlbums();
populateLibrary();

async function deezerSearchAsync(query) {
  try {
    const response = await fetch(
      `https://rapidapi.p.rapidapi.com/search?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function deezerTrack(query) {
  try {
    const response = await fetch(
      `https://rapidapi.p.rapidapi.com/album/${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function loadEminem() {
  const { data } = await deezerSearchAsync("eminem");
  let albumDiv = document.querySelector("#v-pills-home>div");
  // ROW TITLE
  let rowTitle = document.createTextNode("#EMINEM");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < data.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${data[i].title}"
                                ><img src="${data[i].album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${data[i].title}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
}

async function loadMetallica() {
  const { data } = await deezerSearchAsync("metallica");
  let albumDiv = document.querySelector("#v-pills-home>div");
  // ROW TITLE
  let rowTitle = document.createTextNode("#METALLICA");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < data.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${data[i].title}"
                                ><img src="${data[i].album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${data[i].title}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
}

async function loadBehemoth() {
  const { data } = await deezerSearchAsync("behemoth");
  let albumDiv = document.querySelector("#v-pills-home>div");
  // ROW TITLE
  let rowTitle = document.createTextNode("#BEHEMOTH");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < data.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${data[i].title}"
                                ><img src="${data[i].album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${data[i].title}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
}
loadEminem();
loadMetallica();
loadBehemoth();

async function listAlbum() {
  const { data } = await deezerSearchAsync("random");
  let albumDiv = document.querySelector("#v-pills-home>div");
  console.log(data);
  // ROW TITLE
  let rowTitle = document.createTextNode("#RANDOM");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < data.length; i++) {
    const track = await deezerTrack(data[i].album.id);
    //console.log(track.tracks.data);
    let tracks = [];
    for (let j = 0; j < track.tracks.data.length; j++) {
      tracks.push(track.tracks.data[j].title);
    }
    console.log(tracks);
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a data-toggle="modal" data-target="#exampleModal${i}""
                                ><img src="${data[i].album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${data[i].title}</strong></h6>
                          </div>
                          <!-- Modal -->
                          <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">${data[i].title}</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <audio controls>
                                    <source src="${data[i].preview}" type="audio/mpeg">
                                  Your browser does not support the audio element.
                                  </audio>
                                  ${tracks}
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                              </div>
                            </div>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
}
