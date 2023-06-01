import React from 'react'
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import Main from "./components/layout/Main.jsx"
import SliderSection from "./components/section/SliderSection.jsx"
import IntroSection from "./components/section/IntroSection.jsx"
import ProfileSection from "./components/section/ProfileSection.jsx"
import PortSection from "./components/section/PortSection.jsx"
import YoutubeSection from "./components/section/YoutubeSection.jsx"
import UnsplashSection from "./components/section/UnsplashSection.jsx"
import MovieSection from "./components/section/MovieSection.jsx"

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
