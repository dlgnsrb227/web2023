function Footer(props){
    return (
    <footer id="footer" className={props.attr} role="contentinfo">
        <div className="footer__inner container">
            <div className="footer__text">
                <h5>Hooooong</h5>
                <p>더 궁금하신 것이나<br />문의하실 사항이 있다면 연락주세요.</p>
                <a href="mailto:gnsrbdi@naver.com">gnsrbdi@naver.com</a>
                <ul className="sns">
                    <li><a href="/"> </a></li>
                    <li><a href="/"> </a></li>
                    <li><a href="/"> </a></li>
                    <li><a href="/"> </a></li>
                    <li><a href="/"> </a></li>
                </ul>
            </div>
            <div className="footer__menu">
                <div>
                    <h4>사이트</h4>
                    <ul>
                        <li><a href="/">웹표준 사이트</a></li>
                        <li><a href="/">반응형 사이트</a></li>
                        <li><a href="/">패럴랙스 사이트</a></li>
                        <li><a href="/">포트폴리오 사이트</a></li>
                    </ul>
                </div>
                <div>
                    <h4>유형</h4>
                    <ul>
                        <li><a href="/">이미지 유형</a></li>
                        <li><a href="/">카드 유형</a></li>
                        <li><a href="/">이미지/텍스트 유형</a></li>
                        <li><a href="/">배너 유형</a></li>
                        <li><a href="/">텍스트 유형</a></li>
                        <li><a href="/">푸터 유형</a></li>
                    </ul>
                </div>
                <div>
                    <h4>스크립트</h4>
                    <ul>
                        <li><a href="/">검색 이펙트</a></li>
                        <li><a href="/">퀴즈 이펙트</a></li>
                        <li><a href="/">마우스 이펙트</a></li>
                        <li><a href="/">슬라이드 이펙트</a></li>
                        <li><a href="/">패럴랙스 이펙트</a></li>
                        <li><a href="/">게임 이펙트</a></li>
                    </ul>
                </div>
                <div>
                    <h4>레퍼런스</h4>
                    <ul>
                        <li><a href="/">CSS</a></li>
                        <li><a href="/">FONTS</a></li>
                        <li><a href="/">BLOG</a></li>
                        <li><a href="/">REFERENCE</a></li>
                        <li><a href="/">TUTORIAL</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__right">
            <span>Copyright 2022. All Rights Reserved. - Designed by Hoong</span>
        </div>
    </footer>
    )
}

export default Footer