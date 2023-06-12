<template>
    <header id="header" :class="attr" role="heading" aria-level='1'>
        <div class="header__inner container">
            <h1 class="header__logo">
                <router-link to="/">Hoong <em>Site</em></router-link>
            </h1>
            <nav class="header__nav" role="navigation">
                <ul>
                    <li><router-link to="/profile">프로필</router-link></li>
                    <li><router-link to="/port">포트폴리오</router-link></li>
                    <li><router-link to="/youtube">유튜브</router-link></li>
                    <li><router-link to="/unsplash">이미지</router-link></li>
                    <li><router-link to="/movie">영화</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
    // header__wrap
    .header__wrap {
        position: relative;
        z-index: 100;
        box-shadow: 0 0 20px 10px #dfdfdf;
    }

    // header__inner
    .header__inner {
        text-align: center;

        // header__logo
        .header__logo {
            width: 100%;

            a {
                font-size: 30px;
                display: inline-block;
                padding: 5px 5px 0 5px;
                margin: 5px 5px 0 5px;
                font-weight: 900;

                em {
                    font-weight: 500;
                }
            }
        }
        // header__nav
        .header__nav {
            width: 100%;
            ul {
                padding: 0 10%;
                display: flex;
                justify-content: space-between;

                li {
                    a {
                        display: inline-block;
                        padding: 10px;
                        margin: 2px;
                        position: relative;

                        &::before {
                            content: '';
                            width: calc(100% - 15px);
                            height: 2px;
                            background-color: #666;
                            position: absolute;
                            left: 8px;
                            bottom: 4px;
                            transform: scaleX(0);
                            transition: all 0.2s ease;
                        }
                        &:hover::before {
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
    }
</style>
