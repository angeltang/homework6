var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = document.querySelector("#volumeSlider").value + '%';

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*(10/9);
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime <= 5) {
		video.currentTime = 0;
	} else {
		video.currentTime += 5;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
	} else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value/100);
	document.querySelector('#volume').innerHTML = this.value + '%';
	video.volume = this.value/100;
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove('oldTime');
});

