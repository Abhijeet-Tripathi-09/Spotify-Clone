let cards = document.querySelectorAll(".card")


cards.forEach(function(contentElement) {
    contentElement.addEventListener('mouseover', function() {
        let answer = this.firstElementChild.firstElementChild.lastElementChild;
        answer.style.display = 'block';
    });
    contentElement.addEventListener('mouseout', function() {
        let answer = this.firstElementChild.firstElementChild.lastElementChild;
        answer.style.display = 'none';
    });
    
  });



let song = new Audio("song.mp3")
let progress = document.getElementById("progress")
let play = document.getElementById("play")
let allplay = document.querySelectorAll("#play-logo-inside-album")




allplay.forEach(function(contentElement) {
    contentElement.addEventListener('click', function() {
        if(contentElement.classList.contains("fa-pause")){
            song.pause();
            contentElement.classList.remove("fa-pause");
            contentElement.classList.add("fa-play");
            play.classList.remove("fa-circle-pause");
            play.classList.add("fa-circle-play");

        }else {
            song.play();
            contentElement.classList.add("fa-pause");
            contentElement.classList.remove("fa-play");
            play.classList.add("fa-circle-pause");
            play.classList.remove("fa-circle-play");
        }
    });
    
  });



song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

play.addEventListener("click", function() {
    if(play.classList.contains("fa-circle-pause")){
        song.pause();
        play.classList.remove("fa-circle-pause");
        play.classList.add("fa-circle-play");
        contentElement.classList.remove("fa-pause");
        contentElement.classList.add("fa-play");
    }else {
        song.play();
        play.classList.add("fa-circle-pause");
        play.classList.remove("fa-circle-play");
        contentElement.classList.add("fa-pause");
        contentElement.classList.remove("fa-play");
    }
})


if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function() {
    song.play()
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}