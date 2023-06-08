import React from 'react'

const youtubeTitle = {
    title : '추천 유튜브',
    desc : <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>,
    link : '/youtube'
}

const youtubeLink = [
    {
        link : './assets/img/youtube/youtube01.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/youtube/youtube02.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/youtube/youtube03.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/youtube/youtube04.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/youtube/youtube05.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/youtube/youtube06.png',
        title : '코딩애플',
        num : 'dkelkt442',
    },
]

function YoutubeSrc({link}){
    return (
        <div>
            <img src={link} alt={link} />
        </div>
    )
}

function YoutubeSection(props){
    return (
    <section id="youtubeSection" className={props.attr}>
        <div className="youtube__inner container">
            <div className="youtube__text">
                <h3>{youtubeTitle.title}</h3>
                <>{youtubeTitle.desc}</>
                <a href={youtubeTitle.link} className="button-red">자세히보기</a>
            </div>
            <div className="youtube__item">
                {youtubeLink.map((link, index) => (
                    <YoutubeSrc
                        link = {link.link}
                    />
                ))}
                {/* <div>
                    <img src="./assets/img/youtube/youtube01.png" alt="유튜브썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/youtube/youtube02.png" alt="유튜브썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/youtube/youtube03.png" alt="유튜브썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/youtube/youtube04.png" alt="유튜브썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/youtube/youtube05.png" alt="유튜브썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/youtube/youtube06.png" alt="유튜브썸네일이미지" />
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default YoutubeSection