"use client"

import React from 'react'
import Header from '@/components/Header'
import ShortlyAbout from '@/components/ShortlyAbout'
import Images from '@/components/Images'
import Video from '@/components/Video'
import FAQ from '@/components/FAQ'
import Partners from '@/components/Partners'
import Courses from '@/components/Courses'
import Form from '@/components/Form'

export default function HomePage() {
    return (
        <>
            <Header />
            <ShortlyAbout />
            <Images />
            <Video />
            <Partners />
            <Courses />
            <Form />
            <FAQ />
        </>
    )
}
