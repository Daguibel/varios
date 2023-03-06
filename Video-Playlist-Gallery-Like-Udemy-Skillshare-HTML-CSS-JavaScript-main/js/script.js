function quellueva() {
    var images = document.getElementById('background');
    image.onload = function () {
        var engine = new RainyDay({
            image: this,
            blur: 10,
            opacity: 1,
            gravityAngle: Math.PI / 2,
            gravityAngleVariance: 0
        });

        engine.gravity = engine.GRAVITY_NON_LINEAR;
        engine.trail = engine.TRAIL_SMUDGE; //engine.trail = engine.TRAIL_DROPS

        engine.rain([
                           [0, 3, 8],
                           [1, 8, 1]
                       ], 0);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'images/rock2.webp';

 
}
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'A Day To Remember  If it means a lot to you LYRICS_360p.mp4',
        'name': 'A Day To Remember  If it means a lot to you LYRICS_360p.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a2',
        'title': 'BASTARD Heavy Metal Dark Fantasy OP Full  BLOODY POWER FAME  Sub Español AMV_1080p',
        'name': 'BASTARD Heavy Metal Dark Fantasy OP Full  BLOODY POWER FAME  Sub Español AMV_1080p.mp4',
        'duration': '4:12',
    },
    {
        'id': 'a3',
        'title': 'DON TETTO  No Digas lo Siento_1080p.mp4',
        'name': 'DON TETTO  No Digas lo Siento_1080p.mp4',
        'duration': '3:13',
    },

    {
        'id': 'a4',
        'title': 'Fallido Intento  Don Tetto Letra_1080p',
        'name': 'Fallido Intento  Don Tetto Letra_1080p.mp4',
        'duration': '3:51',
    },
    {
        'id': 'a5',
        'title': 'Coldplay  A Sky Full Of Stars Lyrics_1080p',
        'name': 'Coldplay  A Sky Full Of Stars Lyrics_1080p.mp4',
        'duration': '4:26',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});



/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

