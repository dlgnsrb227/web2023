import React from 'react'
import Main from "../layout/Main"

import SliderSection from "../section/SliderSection"
import IntroSection from "../section/IntroSection"
import ProfileSection from "../section/ProfileSection"
import PortSection from "../section/PortSection"
import YoutubeSection from "../section/YoutubeSection"
import UnsplashSection from "../section/UnsplashSection"
import MovieSection from "../section/MovieSection"

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={"slider__wrap section nanumneo"} />
        <IntroSection attr={"intro__wrap bg-blue section nanumneo"} />
        <ProfileSection attr={"profile__wrap section center nanumneo"} />
        <PortSection attr={"port__wrap bg-blue section center nanumneo"} />
        <YoutubeSection attr={"youtube__wrap section nanumneo"} />
        <UnsplashSection attr={"unsplash__wrap section bg-blue nanumneo"} />
        <MovieSection attr={"movie__wrap section nanumneo"} />
      </Main>
    </>
  )
}

export default Home