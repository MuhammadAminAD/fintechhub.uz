'use client';

import { pagesLink } from '@/constants/constants'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import iconBars from "@/assets/icons/Bars.svg"

export default function Menu() {
    const pathname = usePathname();
    const [modal, setModal] = useState<boolean>(false)

    useEffect(() => {
        if (modal) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
        }
    }, [modal])
    return (
        <div>
            <ul className='items-center border border-zinc-900 rounded-[6px] hidden lg:flex'>
                {pagesLink.map((page) => {
                    const segments = pathname.split('/');
                    const currentPath = '/' + segments.slice(1).join('/');
                    const isActive = currentPath === page.linkPath;

                    return (
                        <Link href={page.linkPath} className="block" key={page.id}>
                            <li key={page.id} className={`subtle-medium py-1.5 px-3 rounded-[3px] ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`}>
                                {(page.linkName)}
                            </li>
                        </Link>
                    )
                })}
            </ul>

            <div className='lg:hidden'>
                <button onClick={() => setModal(true)} className='lg:hidden'>
                    <Image src={iconBars} alt='icon' />
                </button>

                <div className='w-screen h-screen fixed top-0 right-0 z-10 bg-black flex items-center justify-center flex-col list-none overflow-hidden duration-700' style={{ maxWidth: modal ? 1220 : 0 }}>
                    {pagesLink.map((page) => {
                        return (
                            <Link href={page.linkPath} className="block" key={page.id} onClick={() => setModal(false)}>
                                <li key={page.id} className={`subtle-medium py-1.5 px-3 rounded-[3px] uppercase font-semibold`}>
                                    {(page.linkName)}
                                </li>
                            </Link>
                        )
                    })}

                    <button className='absolute top-1/7 right-1/7 text-3xl font-extralight' onClick={() => setModal(false)}>
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}
