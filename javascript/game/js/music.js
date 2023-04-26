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

let musicIndex = 1;     // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerHTML = allMusic[num-1].name;             // 재생되고 있는 음악 제목 바꾸기
    musicArtist.innerHTML = allMusic[num-1].artist;         // 재생되고 있는 음악 아티스트 바꾸기
    musicView.src = `img/${allMusic[num-1].img}.png`;       // 재생되고 있는 음악 이미지 바꾸기
    musicView.alt = allMusic[num-1].name;                   // 재생되고 있는 음악 이미지(alt) 바꾸기
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`   // 재생되고 있는 음악 바꾸기
};

// 플레이버튼 클릭
musicPlay.addEventListener("click", () => {});

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});