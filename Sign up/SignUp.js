let logIn = document.querySelector("#log-in");


logIn.addEventListener("click", () => {
    window.open ("http://127.0.0.1:5500/Spotify/Log%20in/Log-in.html")
})


document.getElementById('next-btn').addEventListener('click', function() {
    var emailInput = document.getElementById('email').value;
    if (!emailInput.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail address');
    } else {
        window.open ("http://127.0.0.1:5500/Spotify/Spotify%20App/SpotifyApp.html")
    }
});