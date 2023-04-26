const allMusic = [
    {
        name : "1. 음악이름",
        artist : "가수이름",
        img : "music_view01",
        audio : "music_audio01"
    },{
        name : "2. 음악이름",
        artist : "가수이름",
        img : "music_view02",
        audio : "music_audio02"
    },
    {
        name : "3. 음악이름",
        artist : "가수이름",
        img : "music_view03",
        audio : "music_audio03"
    },
    {
        name : "4. 음악이름",
        artist : "가수이름",
        img : "music_view04",
        audio : "music_audio04"
    },
    {
        name : "5. 음악이름",
        artist : "가수이름",
        img : "music_view05",
        audio : "music_audio05"
    },
    {
        name : "6. 음악이름",
        artist : "가수이름",
        img : "music_view06",
        audio : "music_audio06"
    },
    {
        name : "7. 음악이름",
        artist : "가수이름",
        img : "music_view07",
        audio : "music_audio07"
    },
    {
        name : "8. 음악이름",
        artist : "가수이름",
        img : "music_view08",
        audio : "music_audio08"
    },
    {
        name : "9. 음악이름",
        artist : "가수이름",
        img : "music_view09",
        audio : "music_audio09"
    },{
        name : "10. 음악이름",
        artist : "가수이름",
        img : "music_view10",
        audio : "music_audio10"
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");

let musicIndex = 1;     // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerHTML = allMusic[num-1].name;         // 재생되고 있는 음악 제목 바꾸기
    musicArtist.innerHTML = allMusic[num-1].artist;     // 재생되고 있는 음악 아티스트 바꾸기
    musicView.src = `img/${allMusic[num-1].img}.png`;   // 재생되고 있는 음악 이미지 바꾸기
    musicView.alt = allMusic[num-1].name;               // 재생되고 있는 음악 이미지(alt) 바꾸기
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`
};

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});