import Image from 'next/image'
import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

export default function Footer() {
    return (
        <footer>
            <div className="container mx-auto px-3 pb-32">
                <Image className='mb-8' src={require('../assets/image/dark-logo.png')} alt='logo' />
                <p className='text-lg'>
                    Dicoding Space <br />
                    Jl. Batik Kumeli No.50, Sukaluyu, <br />
                    Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123
                </p>
                <div className='mt-12 mb-8 h-1 w-full border-b-2 border-neutral-200 '></div>
                <div className='grid md:grid-cols-12 items-center gap-4'>
                    <h3 className='font-bold col-span-4 text-gray-700'>Decode ideas Discover Potential</h3>
                    <div className="col-span-3 flex gap-6 text-xl text-gray-700">
                        <AiFillInstagram />
                        <AiFillYoutube />
                        <AiOutlineTwitter />
                        <GrFacebookOption />
                    </div>
                    <h3 className='col-span-3 text-gray-400' ><FaRegCopyright className='inline' /> Dicoding Indonesia 2022 </h3>
                    <h3 className='col-span-2 text-gray-400' >Term • Privacy </h3>
                </div>
            </div>
        </footer>
    )
}
