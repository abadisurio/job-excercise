import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegBell, FaAngleDown, FaBriefcase } from "react-icons/fa"
import { useNavbarHooks } from '../hooks/navbar';

export default function Navbar() {

    const navbar = useNavbarHooks()
    const variant = navbar.variant

    return (

        <nav className={'p-5 flex gap-5 items-center ' + (variant === 'dark' && 'bg-neutral-900 text-white dark')}>
            <div class="container flex flex-col md:flex-row justify-between items-center mx-auto">
                <div className='flex w-full md:w-auto justify-between'>
                    <Link href={'/'} className="flex items-center gap-3">
                        <Image src={require('../assets/image/' + (variant === 'dark' ? 'main-logo' : 'dark-logo') + '.png')} alt='logo'></Image>
                        <h6 className='text-xl font-medium'>Jobs</h6>
                        <span className='hidden md:block'>|</span>
                    </Link>
                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden w-full md:block md:pl-6" id="mobile-menu">
                    <ul class="flex flex-col items-start md:items-center md:flex-row md:space-x-8 md:mt-0 pl-4 gap-3 pt-5 md:pt-0">
                        <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                            <Link href={'/'}><h6 className='font-light'>Looking for job</h6></Link>
                        </li>
                        <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                            <Link href={'/'}><h6 className='font-light'>Hiring</h6></Link>
                        </li>
                        <li className='hidden md:block grow'></li>
                        <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center gap-3 border border-neutral-600 p-3 rounded-sm">
                                <FaBriefcase className='text-blue-500 mx-2' size={16} />
                                <h6>Siap untuk di-interview</h6>
                                <FaAngleDown color='grey' />
                            </button>

                            <div id="dropdownNavbar" class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(0px, 333px, 0px)" }}>
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                                        <Link href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Jelajahi pekerjaan</Link>
                                    </li>
                                    <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                                        <Link href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upload CV</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                            <Link href={'/'} className="flex items-center gap-3">
                                <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-offset-1 ring-offset-neutral-900 ring-blue-500 object-cover" src={require('../assets/image/default-avatar.jpg')} alt="{user.handle}" />
                                <FaAngleDown color='grey' />
                            </Link>
                        </li>
                        <li className='rounded md:bg-transparent p-3 md:p-0 dark:bg-gray-800 w-full md:w-auto'>
                            <Link href={'/'}>
                                <FaRegBell size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}