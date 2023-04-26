const allMusic = [
    {
        name : "1. 음악이름",
        artist : "가수이름",
        img : "music_view01",
        audio : "Boom Bap Flick - Quincas Moreira"
    },{
        name : "2. 음악이름",
        artist : "가수이름",
        img : "music_view02",
        audio : "Can't Hide - Otis McDonald"
    },
    {
        name : "3. 음악이름",
        artist : "가수이름",
        img : "music_view03",
        audio : "Emotional Mess - Amy Lynn & the Honey Men"
    },
    {
        name : "4. 음악이름",
        artist : "가수이름",
        img : "music_view04",
        audio : "Forever Young - Otis McDonald"
    },
    {
        name : "5. 음악이름",
        artist : "가수이름",
        img : "music_view05",
        audio : "I Wish I Knew - Otis McDonald"
    },
    {
        name : "6. 음악이름",
        artist : "가수이름",
        img : "music_view06",
        audio : "Ice & Fire - King Canyon"
    },
    {
        name : "7. 음악이름",
        artist : "가수이름",
        img : "music_view07",
        audio : "Jingle Bells - DJ Williams"
    },
    {
        name : "8. 음악이름",
        artist : "가수이름",
        img : "music_view08",
        audio : "Mulholland - King Canyon"
    },
    {
        name : "9. 음악이름",
        artist : "가수이름",
        img : "music_view09",
        audio : "Spooky Boop - Otis McDonald"
    },{
        name : "10. 음악이름",
        artist : "가수이름",
        img : "music_view10",
        audio : "We Cruisin' - Otis McDonald"
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