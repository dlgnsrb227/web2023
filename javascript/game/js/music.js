const allMusic = [
    {
        name : "I Found Her",
        artist : "Faime",
        img : "music__view01",
        audio : "music_audio01"
    },{
        name : "Let",
        artist : "Vietra",
        img : "music__view02",
        audio : "music_audio02"
    },
    {
        name : "Stressin'",
        artist : "Airr",
        img : "music__view03",
        audio : "music_audio03"
    },
    {
        name : "Side Effects",
        artist : "wip",
        img : "music__view04",
        audio : "music_audio04"
    },
    {
        name : "flowers",
        artist : "honeywhip",
        img : "music__view05",
        audio : "music_audio05"
    },
    {
        name : "Summer Is for Falling in Love",
        artist : "Sarah Kang",
        img : "music__view06",
        audio : "music_audio06"
    },
    {
        name : "For you",
        artist : "Vietra",
        img : "music__view07",
        audio : "music_audio07"
    },
    {
        name : "Foolish",
        artist : "Faime",
        img : "music__view08",
        audio : "music_audio08"
    },
    {
        name : "You set my world on fire",
        artist : "Adelyn Paik",
        img : "music__view09",
        audio : "music_audio09"
    },{
        name : "couldn't say it to your face",
        artist : "honeywhip",
        img : "music__view10",
        audio : "music_audio10"
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress =musicWrap.querySelector(".progress");
const musicProgressBar =musicWrap.querySelector(".progress .bar");
const musicProgressCurrent =musicWrap.querySelector(".timer .current");
const musicProgressDuration =musicWrap.querySelector(".timer .duration");
const musicCount = allMusic.length;

let musicIndex = 1;     // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerHTML = allMusic[num-1].name;             // 재생되고 있는 음악 제목 바꾸기
    musicArtist.innerHTML = allMusic[num-1].artist;         // 재생되고 있는 음악 아티스트 바꾸기
    musicView.src = `img/${allMusic[num-1].img}.png`;       // 재생되고 있는 음악 이미지 바꾸기
    musicView.alt = allMusic[num-1].name;                   // 재생되고 있는 음악 이미지(alt) 바꾸기
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`   // 재생되고 있는 음악 바꾸기
};

// 재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};

// 정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
};

// 이전 곡 
const prevMusic = () => {
    // musicIndex--;
    // if(musicIndex == 0) {musicIndex=10};
    musicIndex == 1 ? musicIndex = musicCount : musicIndex--;

    loadMusic(musicIndex);
    playMusic();
};

// 다음 곡 
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex == 10) {musicIndex=1};
    musicIndex == musicCount ? musicIndex = 1 : musicIndex++;

    loadMusic(musicIndex);
    playMusic();
};

// 뮤직 진행 바
musicAudio.addEventListener("timeupdate", e => {
    const currentTime = e.target.currentTime;   // 현재 재생되는 부분의 시간
    const duration = e.target.duration;         // 오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;

    musicProgressBar.style.width = `${progressWidth}%`;

    // 전체 시간 출력
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
        
        // 현재 시간 출력
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if(currentSec < 10) currentSec = `0${currentSec}`;

        musicProgressCurrent.innerText =  `${currentMin}:${currentSec}`
        console.log(`${currentMin}:${currentSec}`)
    });
});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;      // 진행바 전체 길이
    let clickedOffsetX = e.offsetX;                     // 진행바를 기준으로 측정되는 X좌표 값
    let songDuration = musicAudio.duration;             // 오디오 전체 길이

    musicAudio.currentTime = (clickedOffsetX/progressWidth) * songDuration;     // 퍼센티지에 맞는 시간대로 변경

});

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   // 음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});

// 이전 곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

// 다음 곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});