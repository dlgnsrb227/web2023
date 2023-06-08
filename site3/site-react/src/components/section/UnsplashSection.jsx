import React from 'react'

const unsplashTitle = {
    title : '추천 unsplash 이미지',
    desc : <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>,
    link : '/unsplash'
}

const unsplashLink = [
    {
        link : './assets/img/unsplash/unsplash01.png',
        title : '첫 번째 이미지',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/unsplash/unsplash02.png',
        title : '두 번째 이미지',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/unsplash/unsplash03.png',
        title : '세 번째 이미지',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/unsplash/unsplash04.png',
        title : '네 번째 이미지',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/unsplash/unsplash05.png',
        title : '다섯 번째 이미지',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/unsplash/unsplash06.png',
        title : '여섯 번째 이미지',
        num : 'dkelkt442',
    },
]

function UnsplashSrc({link}){
    return (
        <div>
            <img src={link} alt={link} />
        </div>
    )
}

function UnsplashSection(props){
    return (
    <section id="unsplashSection" className={props.attr}>
        <div className="unsplash__inner container">
            <div className="unsplash__text">
                <h3>{unsplashTitle.title}</h3>
                <>{unsplashTitle.desc}</>
                <a href={unsplashTitle.link} className="button-blue">자세히보기</a>
            </div>
            <div className="unsplash__item">
                {unsplashLink.map((link, index) => (
                    <UnsplashSrc
                        key = {index}
                        link = {link.link}
                    />
                ))}
                {/* <div>
                    <img src="./assets/img/unsplash/unsplash01.png" alt="언스플래쉬이미지" />
                </div>
                <div>
                    <img src="./assets/img/unsplash/unsplash02.png" alt="언스플래쉬이미지" />
                </div>
                <div>
                    <img src="./assets/img/unsplash/unsplash03.png" alt="언스플래쉬이미지" />
                </div>
                <div>
                    <img src="./assets/img/unsplash/unsplash04.png" alt="언스플래쉬이미지" />
                </div>
                <div>
                    <img src="./assets/img/unsplash/unsplash05.png" alt="언스플래쉬이미지" />
                </div>
                <div>
                    <img src="./assets/img/unsplash/unsplash06.png" alt="언스플래쉬이미지" />
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default UnsplashSection