import React from 'react'

const profileTitle = {
    title : '프로필 소개',
    desc : '웹디자이너, 웹퍼블리셔, 프론트앤드 개발자를 희망합니다.',
}

const profileText = [
    {
        img : './assets/img/porfile/profile01.svg',
        title : '이훈규',
        link : '/',
    },
    {
        img : './assets/img/porfile/profile02.svg',
        title : '이훈규',
        link : '/',
    },
    {
        img : './assets/img/porfile/profile03.svg',
        title : '이훈규',
        link : '/',
    },
]

function ProfileDesc({img, title, link}){
    return(
        <div className="profile">
            <figure className="profile__header">
                <img src={img} alt={img} />
            </figure>
            <div className="profile__body">
                <h4 className="title">{title}</h4>
                <a href={link} className="btn">포트폴리오 보기</a>
            </div>
        </div>
    )
}

function ProfileSection(props){
    return (
    <section id="profileSection" className={props.attr}>
        <h3>{profileTitle.title}</h3>
        <p>{profileTitle.desc}</p>
        <div className="profile__inner container">
            {profileText.map((text, index) => (
                <ProfileDesc
                    key = {index}
                    img = {text.img}
                    title = {text.title}
                    link = {text.link}
                />
            ))}
            {/* <div className="profile">
                <figure className="profile__header">
                    <img src="./assets/img/porfile/profile01.svg" alt="프로필이미지" />
                </figure>
                <div className="profile__body">
                    <h4 className="title">이훈규</h4>
                    <a href="/" className="btn">포트폴리오 보기</a>
                </div>
            </div>
            <div className="profile">
                <figure className="profile__header">
                    <img src="./assets/img/porfile/profile02.svg" alt="프로필이미지" />
                </figure>
                <div className="profile__body">
                    <h4 className="title">이훈규</h4>
                    <a href="/" className="btn">포트폴리오 보기</a>
                </div>
            </div>
            <div className="profile">
                <figure className="profile__header">
                    <img src="./assets/img/porfile/profile03.svg" alt="프로필이미지" />
                </figure>
                <div className="profile__body">
                    <h4 className="title">이훈규</h4>
                    <a href="/" className="btn">포트폴리오 보기</a>
                </div>
            </div> */}
        </div>
    </section>
    )
}

export default ProfileSection