import { CoursesData } from '@/constants/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface PageProps {
    params: {
        course: string;
    };
}

export default function page({ params }: PageProps) {

    const [courseData, setCourseData] = useState<(typeof CoursesData)[0] | null>(null)

    useEffect(() => {
        const findByName = CoursesData.find((el) => el.path === params.course)
        if (findByName) {
            setCourseData(findByName)
        }
        else {
            <Link href={"/courses"} />
        }
    }, [params.course])
    return (
        <section>
            <div>
                <h3>Fintechhub</h3>
                <h2>{courseData?.span}kursi</h2>

                <ul>
                    <li>{courseData?.dars_soati} soat - darslar uzunligi</li>
                    <li>{courseData?.davomiyligi} oy - kursni davomiyligi</li>
                    <li>{courseData?.oquvchilar_soni} ta - o’quvchilar soni</li>
                    <li>{courseData?.daraja} - daraja</li>
                    <li>{courseData?.dars_tili} - darslarni tili</li>
                    <li>{courseData?.dars_tili} - ta’lim turi</li>
                </ul>
            </div>

            <div>
                <div>
                    <h5>Toshkentda {courseData?.span} kurslari</h5>
                    <p>{courseData?.toshkentda_kurslar}</p>
                </div>
            </div>
        </section>
    )
}
