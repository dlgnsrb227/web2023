import React from 'react'

const portTitle = {
    title: '포트폴리오 소개',
    desc : '웹디자이너, 웹퍼블리셔, 프론트앤드를 위한 포트폴리오',
}

const portText = [
    {
        portImg : './assets/img/port/port01.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오1',
        iconImg : './assets/img/port/portprofile01.png',
    },
    {
        portImg : './assets/img/port/port02.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오2',
        iconImg : './assets/img/port/portprofile02.png',
    },
    {
        portImg : './assets/img/port/port03.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오3',
        iconImg : './assets/img/port/portprofile03.png',
    },
    {
        portImg : './assets/img/port/port04.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오4',
        iconImg : './assets/img/port/portprofile04.png',
    },
    {
        portImg : './assets/img/port/port05.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오5',
        iconImg : './assets/img/port/portprofile05.png',
    },
    {
        portImg : './assets/img/port/port06.png',
        title : '이훈규 포트폴리오',
        desc : '프론트앤드 개발자 포트폴리오6',
        iconImg : './assets/img/port/portprofile06.png',
    },
]

function PortDesc({portImg, title, desc, iconImg}){
    return(
        <div className="port">
            <figure className="port__header">
                <img src={portImg} alt={portImg} />
            </figure>
            <div className="port__body">
                <span>
                    <img src={iconImg} alt={iconImg} />
                    <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </span>
            </div>
        </div>
    )
}

function PortSection(props){
    return (
    <section id="portSection" className={props.attr}>
        <h3>{portTitle.title}</h3>
        <p>{portTitle.desc}</p>
        <div className="port__inner container">
            <div className="port__btn">
                <a href="/" className="active">21기</a>
                <a href="/">22기</a>
                <a href="/">23기</a>
                <a href="/">24기</a>
            </div>
            <div className="port__cont">
                {portText.map((text, index) => (
                    <PortDesc
                        key = {index}
                        portImg = {text.portImg}
                        title = {text.title}
                        desc = {text.desc}
                        iconImg = {text.iconImg}
                    />
                ))}
                {/* <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port01.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile01.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port02.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile02.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port03.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile03.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port04.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile04.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port05.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile05.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/img/port/port06.png" alt="프로필이미지" />
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src="./assets/img/port/portprofile06.png" alt="포폴프로필" />
                            <div>
                                <h4>이훈규 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default PortSection