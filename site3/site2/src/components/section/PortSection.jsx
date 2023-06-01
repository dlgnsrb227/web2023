function PortSection(props){
    return (
    <section id="portSection" className={props.attr}>
        <h3>포트폴리오 소개</h3>
        <p>웹디자이너, 웹퍼블리셔, 프론트앤드 개발자를 희망합니다.</p>
        <div className="port__inner container">
            <div className="port__btn">
                <a href="/" className="active">21기</a>
                <a href="/">22기</a>
                <a href="/">23기</a>
                <a href="/">24기</a>
            </div>
            <div className="port__cont">
                <div className="port">
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
                </div>
            </div>
        </div>
    </section>
    )
}

export default PortSection