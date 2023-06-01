function IntroSection(props){
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">프론트엔드 커리큘럼 과정 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>Frontend</span>
                    <h3>프론트앤드<br />전문과정</h3>
                    <p>프론트앤드 개발자로 취업하기 위한<br />전문과정입니다.<br />여러분들도 도전해보세요!</p>
                </div>
                <div className="intro__desc">
                    <div>
                        <h4 className="icon-react">React.js</h4>
                        <p>React는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리입니다. React는 웹 애플리케이션 개발에 주로 사용되며, 모바일 앱과도 통합할 수 있습니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-vue">Vue.js</h4>
                        <p>Vue는 사용자 인터페이스(UI)를 구축하기 위한 프로그레시브 자바스크립트 프레임워크입니다. React와 마찬가지로 웹 애플리케이션 개발에 주로 사용됩니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-vite">Vite.js</h4>
                        <p>사이트와 상호작용하는 모든 부분에 대한 개발, 관리, 유지 보수를 하는 것 솔루션의 프로세스를 개발합니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-next">Next.js</h4>
                        <p>용어 자체에서 알 수 있듯이, 백엔드는 웹사이트나 웹 애플리케이션 또는 모바일 솔루션의 프로세스와 관련된입니다.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection