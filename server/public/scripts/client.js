function onReady() {
    console.log('Hello from client.js');

    axios.get('/artist')
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            contentDiv.innerHTML=''
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    axios.get('/song')
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#songTableBody');
            contentDiv.innerHTML=''
            for (let song of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
}

onReady();

function newArtist(event) {
    event.preventDefault();
    let name = document.getElementById('artistName').value
    document.getElementById('artistName').value = ''
    let born = Number(document.getElementById('artistBorn').value)
    document.getElementById('artistBorn').value = ''
    let died = Number(document.getElementById('artistDeath').value)
    document.getElementById('artistDeath').value = ''
    axios({
        method: 'POST', // Type of request
        url: '/artist', // Route that we will match on
        // Must be an object - will be available as req.body
        data: {
            "name": name,
            "born": born,
            "died": died
        }
      }).then(function(response) {
          console.log("SUCCESS!!!");
    
    // renderHTML()
    onReady()
    })
}

// function renderHTML()
// render the dom
