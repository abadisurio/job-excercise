import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegBell, FaAngleDown } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className='p-5 flex gap-5 items-center bg-neutral-900 text-white'>
            <Link href={""} className="flex gap-3">
                <Image src={require('../assets/image/main-logo.png')} alt='logo'></Image>
                <h6 className='text-xl font-medium'>Jobs</h6>
            </Link>
            <span>|</span>
            <Link href={""}><h6 className='font-light'>Looking for job</h6></Link>
            <Link href={""}><h6 className='font-light'>Hiring</h6></Link>
            <div className="grow"></div>
            <Link href={""} className="flex items-center gap-3">
                <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-offset-1 ring-offset-neutral-900 ring-blue-500 object-cover" src={require('../assets/image/default-avatar.jpg')} alt="{user.handle}" />
                <FaAngleDown color='grey' />
            </Link>
            <Link href={""}>
                <FaRegBell />
            </Link>
        </nav>
    )
}
