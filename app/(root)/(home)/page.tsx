import React from 'react'
import Header from './_components/Header'
import ShortlyAbout from './_components/ShortlyAbout'
import Images from './_components/Images'
import Video from './_components/Video'
import FAQ from './_components/FAQ'
import Partners from './_components/Partners'
import Courses from './_components/Courses'

export default function HomePage() {
    return (
        <>
            <Header />
            <ShortlyAbout />
            <Images />
            <Video />
            <Partners />
            <Courses />
            <FAQ />
        </>
    )
}
