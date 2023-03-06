 function quellueva() {
     var image = document.getElementById('background');
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
                            [1, 6, 2]
                        ], 0);
     };
     image.crossOrigin = 'anonymous';
     image.src = 'images/rock.webp';

 }
 
 const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Avenged Sevenfold - Bat Country [Official Music Video]',
        'name': 'avenged.mp4',
        'duration': '4:10',
    },
    {
        'id': 'a2',
        'title': 'Korn - Freak On a Leash (Official HD Video)',
        'name': 'korn.mp4',
        'duration': '4:26',
    },
    {
        'id': 'a3',
        'title': 'System Of A Down - B.Y.O.B. (Official HD Video)',
        'name': 'system.mp4',
        'duration': '4:22',
    },

    {
        'id': 'a4',
        'title': 'Linkin Park - Given Up [Official Music Video]',
        'name': 'linkin.mp4',
        'duration': '3:11',
    },
    {
        'id': 'a5',
        'title': 'Slipknot - The Devil In I [OFFICIAL VIDEO]',
        'name': 'slipknot.mp4',
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

