import React from 'react'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Main from "./components/layout/Main"
import SliderSection from "./components/section/SliderSection"
import IntroSection from "./components/section/IntroSection"
import ProfileSection from "./components/section/ProfileSection"
import PortSection from "./components/section/PortSection"
import YoutubeSection from "./components/section/YoutubeSection"
import UnsplashSection from "./components/section/UnsplashSection"
import MovieSection from "./components/section/MovieSection"

function App() {
  return (
    <>
      <Header attr={["header__wrap", "bg-blue", "nanumneo"]} />
      <Main>
        <SliderSection attr={"slider__wrap section nanumneo"} />
        <IntroSection attr={"intro__wrap bg-blue section nanumneo"} />
        <ProfileSection attr={"profile__wrap section center nanumneo"} />
        <PortSection attr={"port__wrap bg-blue section center nanumneo"} />
        <YoutubeSection attr={"youtube__wrap section nanumneo"} />
        <UnsplashSection attr={"unsplash__wrap section bg-blue nanumneo"} />
        <MovieSection attr={"movie__wrap section nanumneo"} />
      </Main>
      <Footer attr={"footer__wrap section bg-blue nanumneo"} />
    </>
  );
}

export default App;