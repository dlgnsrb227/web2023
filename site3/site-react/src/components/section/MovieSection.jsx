import React from 'react'

const movieTitle = {
    title : '추천 movie',
    desc : <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>,
    link : '/movie',
}

const movieLink = [
    {
        link : './assets/img/movie/movie01.png',
        title : '첫 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie02.png',
        title : '두 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie03.png',
        title : '세 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie04.png',
        title : '네 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie05.png',
        title : '다섯 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie06.png',
        title : '여섯 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie07.png',
        title : '일곱 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie08.png',
        title : '여덟 번째 영화',
        num : 'dkelkt442',
    },
    {
        link : './assets/img/movie/movie09.png',
        title : '아홉 번째 영화',
        num : 'dkelkt442',
    },
]

function MovieSrc({link}){
    return (
        <div>
            <img src={link} alt={link} />
        </div>
    )
}

function MovieSection(props){
    return (
    <section id="movieSection" className={props.attr}>
        <div className="movie__inner container">
            <div className="movie__text">
                <h3>{movieTitle.title}</h3>
                <>{movieTitle.desc}</>
                <a href={movieTitle.link} className="button-green">자세히보기</a>
            </div>
            <div className="movie__item">
                {movieLink.map((link, index) => (
                    <MovieSrc
                        key = {index}
                        link = {link.link}
                    />
                ))}
                {/* <div>
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
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default MovieSection