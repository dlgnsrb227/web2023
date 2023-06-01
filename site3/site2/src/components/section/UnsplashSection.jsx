function UnsplashSection(props){
    return (
    <section id="unsplashSection" className={props.attr}>
        <div className="unsplash__inner container">
            <div className="unsplash__text">
                <h3>추천 unsplash 이미지</h3>
                <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>
                <a href="/" className="button-blue">자세히보기</a>
            </div>
            <div className="unsplash__item">
                <div>
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
                </div>
            </div>
        </div>
    </section>
    )
}

export default UnsplashSection