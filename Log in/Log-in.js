let signUp = document.querySelector("#sign-up");


signUp.addEventListener("click", () => {
    window.open ("http://127.0.0.1:5500/Spotify/Sign%20up/SignUp.html#")
})


document.getElementById('next-btn').addEventListener('click', function() {
    var emailInput = document.getElementById('email').value;
    if (!emailInput.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail address');
    } else {
        window.open ("http://127.0.0.1:5500/Spotify/Spotify%20App/SpotifyApp.html")
    }
});