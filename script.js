document.addEventListener('DOMContentLoaded', function() {
    const currentImage = document.getElementById('currentImage');
    const video = document.getElementById('myVideo');
    const button = document.getElementById('mainButton');
    const congrats = document.getElementById('congrats');
    const audio = new Audio('background_music.mp3');
    audio.loop = true;

    let isPlaying = false;

    button.addEventListener('click', function() {
        if (button.textContent === '选择你的老婆') {
            isPlaying = true;
            button.textContent = '确认选择';
            currentImage.style.display = 'none';
            video.style.display = 'block';
            video.play();
            video.playbackRate = 2;
            audio.play();
        } else if (button.textContent === '确认选择') {
            video.pause();
            button.textContent = '再来一次';
            congrats.style.display = 'block';
            setTimeout(() => {
                congrats.style.display = 'none';
            }, 3000);
        } else {
            isPlaying = false;
            button.textContent = '选择你的老婆';
            currentImage.style.display = 'block';
            video.style.display = 'none';
            video.currentTime = 0;
            congrats.style.display = 'none';
        }
    });

    // 当页面关闭时停止音频
    window.addEventListener('beforeunload', function() {
        audio.pause();
        audio.currentTime = 0;
    });
});