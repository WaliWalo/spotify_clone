const queryString = window.location.search;
const queryAlbum = queryString.slice(1);
console.log(queryAlbum);
console.log(JSON.parse(localStorage.getItem(queryAlbum)));
let clickedAlbum = JSON.parse(localStorage.getItem(queryAlbum));
// for (let i = 0; i < albums.length; i++) {
//   if (albums[i].album === queryAlbum) {
//     clickedAlbum = albums[i];
//   }
// }
let albumTitle = document.querySelector("#albumTitle");
albumTitle.innerText = clickedAlbum.album;
let albumDesc = document.querySelector("#albumDesc");
albumDesc.innerText = clickedAlbum.albumDesc;
let albumImg = document.querySelector("#albumImg");
albumImg.setAttribute("src", clickedAlbum.imageUrl);

let albumTrack = [];
for (let i = 0; i < tracks.length; i++) {
  if (tracks[i].album === clickedAlbum.album) {
    albumTrack.push(tracks[i]);
  }
}
console.log(albumTrack);
let tbody = document.querySelector("tbody");
for (let i = 0; i < albumTrack.length; i++) {
  let tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row">${i + 1}</th>
                    <td>
                        <div class="container">
                        <div><strong>${albumTrack[i].title}</strong></div>
                        <div>${clickedAlbum.artist}</div>
                        </div>
                    </td>
                    <td>${albumTrack[i].album}</td>
                    <td>3 days ago</td>
                    <td>${albumTrack[i].duration}</td>`;
  tbody.appendChild(tr);
}
