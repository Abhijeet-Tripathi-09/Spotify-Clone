let fourQuestion = document.querySelectorAll(".four-question-list h3");
let signUp = document.querySelector("#sign-up");
let logIn = document.querySelector("#log-in");

fourQuestion.forEach(function (fourQuestion) {
    fourQuestion.addEventListener("click", function() {

        let answer = this.nextElementSibling;
        let content_1_img = this.querySelector("i")

        if(answer.style.display === 'block') {
            answer.style.display = 'none';
            content_1_img.classList.add("fa-chevron-down");
            content_1_img.classList.remove("fa-chevron-up");
        } else {
            answer.style.display = 'block';
            content_1_img.classList.remove("fa-chevron-down");
            content_1_img.classList.add("fa-chevron-up");
          }
    });
})

// -----------------------  Sign Up  ---------------------------

signUp.addEventListener("click", () => {
    window.open ("http://127.0.0.1:5500/Spotify/Sign%20up/SignUp.html")
})
logIn.addEventListener("click", () => {
    window.open ("http://127.0.0.1:5500/Spotify/Log%20in/Log-in.html")
})
