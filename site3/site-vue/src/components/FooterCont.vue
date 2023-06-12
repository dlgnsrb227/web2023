<template>
    <footer id="footer" :class="attr" role="contentinfo">
        <div class="footer__inner container">
            <div class="footer__text">
                <h5>Hooooong</h5>
                <p>더 궁금하신 것이나<br />문의하실 사항이 있다면 연락주세요.</p>
                <router-link to="mailto:gnsrbdi@naver.com">gnsrbdi@naver.com</router-link>
                <ul class="sns">
                    <li><router-link to=""> </router-link></li>
                    <li><router-link to=""> </router-link></li>
                    <li><router-link to=""> </router-link></li>
                    <li><router-link to=""> </router-link></li>
                    <li><router-link to=""> </router-link></li>
                </ul>
            </div>
            <div class="footer__menu">
                <div>
                    <h4>사이트</h4>
                    <ul>
                        <li><router-link to="">웹표준 사이트</router-link></li>
                        <li><router-link to="">반응형 사이트</router-link></li>
                        <li><router-link to="">패럴랙스 사이트</router-link></li>
                        <li><router-link to="">포트폴리오 사이트</router-link></li>
                    </ul>
                </div>
                <div>
                    <h4>유형</h4>
                    <ul>
                        <li><router-link to="">이미지 유형</router-link></li>
                        <li><router-link to="">카드 유형</router-link></li>
                        <li><router-link to="">이미지/텍스트 유형</router-link></li>
                        <li><router-link to="">배너 유형</router-link></li>
                        <li><router-link to="">텍스트 유형</router-link></li>
                        <li><router-link to="">푸터 유형</router-link></li>
                    </ul>
                </div>
                <div>
                    <h4>스크립트</h4>
                    <ul>
                        <li><router-link to="">검색 이펙트</router-link></li>
                        <li><router-link to="">퀴즈 이펙트</router-link></li>
                        <li><router-link to="">마우스 이펙트</router-link></li>
                        <li><router-link to="">슬라이드 이펙트</router-link></li>
                        <li><router-link to="">패럴랙스 이펙트</router-link></li>
                        <li><router-link to="">게임 이펙트</router-link></li>
                    </ul>
                </div>
                <div>
                    <h4>레퍼런스</h4>
                    <ul>
                        <li><router-link to="">CSS</router-link></li>
                        <li><router-link to="">FONTS</router-link></li>
                        <li><router-link to="">BLOG</router-link></li>
                        <li><router-link to="">REFERENCE</router-link></li>
                        <li><router-link to="">TUTORIAL</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__right">
            <span>Copyright 2022. All Rights Reserved. - Designed by Hoong</span>
        </div>
    </footer>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
    // footer__wrap
    .footer__wrap {}
    .footer__inner {
        display: flex;
        justify-content: space-between;

        .footer__text {
            width: 30%;

            > h5 {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 20px;
            }
            > p {
                font-size: 14px;
                opacity: 50%;
                line-height: 1.5;
                margin-bottom: 5px;
            }
            > ul {
                margin-top: 20px;
                display: flex;

                > li {

                    > a {
                        display: inline-block;
                        width: 45px;
                        height: 45px;
                        background-color: #d9d9d9;
                        border-radius: 50%;
                        margin-right: 10px;
                        background-image: url(@/assets/img/footer/footersnsicon01.svg);
                        background-position: 0 0;

                    }
                    &:nth-child(2) a {
                        background-position: -45px 0;
                    }
                    &:nth-child(3) a {
                        background-position: -90px 0;
                    }
                    &:nth-child(4) a {
                        background-position: -135px 0;
                    }
                    &:nth-child(5) a {
                        background-position: -180px 0;
                    }
                }
            }
        }
        .footer__menu {
            width: 63%;
            display: flex;
            justify-content: space-between;

            > div {
                width: 25%;

                &:last-child {
                    width: 13%;
                }

                > h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                > ul {

                    > li {

                        > a {
                            display: inline-block;
                            padding: 5px 0;
                        }
                    }
                }
            }
        }
    }
    .footer__right {
        border-top: 1px solid #ccc;
        text-align: center;
        margin-top: 50px;
        padding-top: 40px;

        span {
            opacity: 50%;
        }
    }
</style>
