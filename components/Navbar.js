import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegBell, FaAngleDown, FaBriefcase } from "react-icons/fa";
import { useNavbarHooks } from '../hooks/navbar';

export default function Navbar() {

    const navbar = useNavbarHooks()
    const variant = navbar.variant

    return (
        <nav className={'p-5 flex gap-5 items-center ' + (variant === 'dark' && 'bg-neutral-900 text-white')}>
            <Link href={'/'} className="flex gap-3">
                <Image src={require('../assets/image/' + (variant === 'dark' ? 'main-logo' : 'dark-logo') + '.png')} alt='logo'></Image>
                <h6 className='text-xl font-medium'>Jobs</h6>
            </Link>
            <span>|</span>
            <Link href={'/'}><h6 className='font-light'>Looking for job</h6></Link>
            <Link href={'/'}><h6 className='font-light'>Hiring</h6></Link>
            <div className="grow"></div>
            <Link href={'/'} className="flex items-center gap-3 border border-neutral-600 p-3 rounded-sm">
                <FaBriefcase className='text-blue-500 mx-2' size={16} />
                <h6>Siap untuk di-interview</h6>
                <FaAngleDown color='grey' />
            </Link>
            <Link href={'/'} className="flex items-center gap-3">
                <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-offset-1 ring-offset-neutral-900 ring-blue-500 object-cover" src={require('../assets/image/default-avatar.jpg')} alt="{user.handle}" />
                <FaAngleDown color='grey' />
            </Link>
            <Link href={'/'}>
                <FaRegBell size={24} />
            </Link>
        </nav>
    )
}