'use client';

import { pagesLink } from '@/constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Menu() {
    const pathname = usePathname();
    return (
        <ul className='flex items-center border border-zinc-900 rounded-[6px] '>
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
    )
}
