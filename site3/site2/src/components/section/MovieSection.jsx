function MovieSection(props){
    return (
    <section id="movieSection" className={props.attr}>
        <div className="movie__inner container">
            <div className="movie__text">
                <h3>추천 movie</h3>
                <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>
                <a href="/" className="button-green">자세히보기</a>
            </div>
            <div className="movie__item">
                <div>
                    <img src="./assets/img/movie/movie01.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie02.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie03.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie04.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie05.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie06.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie07.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie08.png" alt="영화썸네일이미지" />
                </div>
                <div>
                    <img src="./assets/img/movie/movie09.png" alt="영화썸네일이미지" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default MovieSection