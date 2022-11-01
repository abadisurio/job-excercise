import Image from 'next/image'
import React, { useEffect } from 'react'
import { IoBusinessOutline, IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { BsArrowUpRight, BsPeople, BsShare, BsHeart } from "react-icons/bs";
import { getAllJobCollection, getJobDetail } from '../../lib/api';
import { useNavbarHooks } from '../../hooks/navbar';
import Link from 'next/link';

export default function JobDetail({ jobDetail }) {
    // console.log(jobDetail)
    const navbar = useNavbarHooks()
    useEffect(() => {
        navbar.setVariant('light')
    }, [])

    return (
        <>
            <div className='container mx-auto pt-8'>
                <Link href={'/'} className='text-xs underline mb-4'>Semua daftar pekerjaan <BsArrowUpRight className='inline' /> </Link>
                <div className='flex mb-6 rounded-sm'>
                    <Image
                        alt={jobDetail.title}
                        className="w-24 h-24 object-cover mr-4"
                        loader={() => jobDetail.logo}
                        src={jobDetail.logo}
                        width={96}
                        height={96} />
                    <div className='grow grid md:grid-cols-2'>
                        <div className='grow'>
                            <h1 className='text-2xl font-bold'>{jobDetail.title}</h1>
                            <h3 className='font-bold text-lg'>Sektor Bisnis: {jobDetail.sector}</h3>
                            <div className='my-2 flex items-center gap-2 text-xs'>
                                <IoBusinessOutline size={16} />
                                <h5> {jobDetail.company}</h5>
                                <IoLocationOutline size={16} />
                                <h5> {jobDetail.location}  </h5>
                                <BsPeople size={16} />
                                <h5> {jobDetail.employees}  </h5>
                            </div>
                        </div>
                        <div className='text-xs text-gray-500 md:text-right'>

                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='px-3 py-2 rounded-sm bg-gray-50 border border-gray-200'>
                            <BsShare />
                        </button>
                        <button className='px-3 py-2 rounded-sm bg-gray-50 border border-gray-200'>
                            <BsHeart />
                        </button>
                        <button className='px-3 py-1 rounded-sm bg-sky-900 '>
                            <span className='text-white'>Kirim lamaran</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-12 mb-6 h-1 w-full border-b-2 border-neutral-100 '></div>
            <div className='md:w-3/5 mx-auto'>
                <div className="flex mb-8">
                    <div className="bg-blue-50 border border-blue-400 px-4 py-2 rounded-full mr-4">
                        <span className='font-bold text-sm text-blue-500'>{jobDetail.job_type}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-400 px-4 py-2 rounded-full mr-4">
                        <span className='font-bold text-sm text-blue-500'>Remote Friendly</span>
                    </div>
                </div>
                <h1 className='text-xl font-bold mb-2'>Tentang Perusahaan</h1>
                <p className='text-lg text-gray-700 mb-8'>
                    Dicoding Academy adalah platform learning online yang ditujukan untuk para software developer di Indonesia. Kami selalu menawarkan kurikulum terbaik agar dapat mewujudkan mimpi menjadi developer hebat bagi seluruh developer di Indonesia. Kurikulum yang disusun memiliki standar industri global. Kami bekerja sama dengan perusahaan teknologi dunia seperti Google, Microsoft, AWS, IBM, dan Line dalam mengembangkan kelas dari tingkat pemula hingga profesional.
                </p>
                <h1 className='text-xl font-bold mb-2'>Deskripsi Pekerjaan</h1>
                <p className='text-lg text-gray-700 mb-8'>
                    {jobDetail.description}
                </p>
                <h1 className='text-xl font-bold mb-2'>Responsibilities</h1>
                <ul className='text-lg text-gray-700 mb-8 list-disc pl-5'>
                    <li>
                        Me-review submission (tugas) siswa dalam sebuah kelas sesuai target yang diberikan.
                    </li>
                    <li>
                        Bekolaborasi dengan tim Academy dalam merancang submission (tugas) dari sebuah kelas.
                    </li>
                    <li>
                        Berkontribusi pada project-project yang dikerjakan oleh tim Reviewer.
                    </li>
                </ul>
                <h1 className='text-xl font-bold mb-2'>Syarat Pelamar</h1>
                <ul className='text-lg text-gray-700 mb-8 list-disc pl-5 '>
                    <li>Memahami penulisan kode yang baik, efisien, dan sesuai konvensi dari sebuah bahasa pemrograman.</li>
                    <li>Mengetahui best-practice dari platform yang digunakan pada kelas yang akan di-review.</li>
                    <li>Teliti dan memiliki kemampuan debugging yang baik.</li>
                    <li>
                        Menguasai teknologi yang digunakan pada kelas yang akan di-review. Dibuktikan dengan:
                        <ul className='pl-5 list-disc '>
                            <li>Lulus dengan nilai baik pada kelas tersebut, atau</li>
                            <li>Telah memberi kontribusi ke dalam kelas tersebut. Misalnya, memberikan masukan terhadap kelas atau aktif pada forum diskusi.</li>
                        </ul>
                    </li>
                    <li>Berpengalaman dalam pengembangan aplikasi iOS.</li>
                    <li>Memiliki kemampuan komunikasi dan kolaborasi yang baik.</li>
                    <li>Memiliki rasa ingin tahu yang tinggi dan tidak pernah puas akan pengetahuan baru.</li>
                    <li>Memiliki kemampuan dasar untuk riset akan menjadi nilai tambah.</li>
                    <li>Terbuka dalam menerima feedback dari orang lain.</li>
                    <li>Percaya diri dan dapat dipercaya.</li>
                </ul>
                <div className='border border-gray-200 rounded-sm p-4 mb-48'>
                    <h1 className='text-xl font-bold mb-2'>Tertarik?</h1>
                    <ul className='text-lg text-gray-700 list-disc pl-5'>
                        <li>Kirimkan CV dan Portofolio terbaik kamu.</li>
                        <li>Ceritakan ke kami pengalaman apa saja yang kamu miliki. Tunjukan karya-karya kamu di bidang pemrograman atau pengembangan aplikasi.</li>

                        <li>
                            Buatlah sebuah artikel yang membahas tentang pemrograman atau teknologi yang sedang kamu minati.
                            <ul className='pl-5 list-disc'>
                                <li>Kamu dapat mencantumkan link ke artikel ini di inputan Cover Letter ketika memasukkan lamaran untuk lowongan ini.</li>
                            </ul>
                        </li>
                        <li>
                            Berapa harapan gaji kamu bila bergabung dengan Dicoding Indonesia?
                            <ul className='pl-5 list-disc'>
                                <li>Mohon untuk mencantumkan nilainya di inputan Cover Letter.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const jobCollection = await getAllJobCollection()

    // Get the paths we want to pre-render based on posts
    const paths = jobCollection.map((job) => ({
        params: { id: job.id }
    }))
    // console.log(paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const jobDetail = await getJobDetail(params.id)
    // console.log(jobDetail)
    // const post = await res.json()

    // Pass post data to the page via props
    return { props: { jobDetail } }
}
