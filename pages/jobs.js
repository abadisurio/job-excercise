import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import arrow from '../assets/image/header-arrow.png'
import moment from 'moment';
import 'moment/locale/id';
import { IoBusinessOutline, IoLocationOutline, IoBriefcaseOutline, IoSearchOutline, IoAddOutline } from "react-icons/io5";

const example = [
    { "createdAt": "2022-01-15T13:41:38.118Z", "title": "District Directives Liaison", "logo": "http://loremflickr.com/640/480/technics", "company": "Davis Inc", "location": "Jakarta", "experience": true, "job_type": "Fulltime", "closeAt": "2022-10-06T04:30:31.520Z", "skills": "Backend Developer", "sector": "Integration", "description": "Ut eum tempora quis voluptates mollitia consectetur magni modi. Tempore saepe pariatur est aliquid blanditiis molestiae adipisci. Rem debitis et non sunt esse.\nQuidem eaque tenetur aspernatur magni eum sit assumenda harum ut. Alias nostrum velit velit optio id porro. Adipisci est velit a. Doloremque sed ipsum sit.\nVelit id dolore ut. Quo cupiditate pariatur sint explicabo. Nobis laborum illo doloribus deserunt et non sed. Vitae eos nulla aut voluptatum et nulla ipsa. In libero modi adipisci voluptatem doloremque et est distinctio doloribus. Ut est fugiat provident tenetur et eos eveniet architecto.", "employees": 13553, "id": "1" },
    { "createdAt": "2022-03-07T21:32:51.389Z", "title": "Product Response Producer", "logo": "http://loremflickr.com/640/480/technics", "company": "Casper Group", "location": "Jakarta", "experience": false, "job_type": "Intern", "closeAt": "2023-05-26T04:03:42.863Z", "skills": "Backend Developer", "sector": "Communications", "description": "Veniam voluptatem illum repudiandae ipsum consequatur suscipit. Velit saepe aut. Ipsa facere culpa perferendis nemo et inventore. Nobis voluptatibus velit numquam at quo consectetur pariatur voluptatem magni. Aperiam occaecati voluptatem.\nAsperiores quibusdam rerum deserunt voluptatem tempora repellat voluptate. Commodi asperiores itaque facilis voluptate rerum. Voluptatem omnis eligendi cumque non assumenda beatae. Voluptatem tempore corrupti exercitationem repellendus vel velit. Vel quos est quo amet quaerat et cum accusamus sed.\nCulpa qui suscipit occaecati reprehenderit est. Voluptas ea distinctio et recusandae et consequuntur ut ab rerum. Distinctio velit eveniet numquam quia autem et. Impedit dolores magnam ut ex eaque quis. Quaerat alias et est fugit porro.", "employees": 64648, "id": "2" },
    { "createdAt": "2022-02-20T13:05:58.596Z", "title": "Internal Branding Specialist", "logo": "http://loremflickr.com/640/480/technics", "company": "Schmeler, Pagac and Lebsack", "location": "Bandung", "experience": true, "job_type": "Fulltime", "closeAt": "2023-01-28T20:16:08.094Z", "skills": "Frontend Developer", "sector": "Functionality", "description": "Tenetur ut libero accusantium optio doloremque voluptate. Fugit ad beatae accusamus consequuntur dolore eos. Et accusantium vel qui.\nRecusandae et sint. Dolor reiciendis ab. Dolorum corrupti et delectus quos unde est ea rem nostrum. Inventore rem consequatur doloremque consequatur culpa illo porro eos eum. Esse similique dignissimos. Nihil est a nisi.\nPossimus provident amet et dicta nesciunt harum totam molestias ipsa. Vero itaque consectetur eveniet. Laudantium ut eum qui consequatur et natus.", "employees": 58131, "id": "3" },
    { "createdAt": "2022-01-15T13:41:38.118Z", "title": "District Directives Liaison", "logo": "http://loremflickr.com/640/480/technics", "company": "Davis Inc", "location": "Jakarta", "experience": true, "job_type": "Fulltime", "closeAt": "2022-10-06T04:30:31.520Z", "skills": "Backend Developer", "sector": "Integration", "description": "Ut eum tempora quis voluptates mollitia consectetur magni modi. Tempore saepe pariatur est aliquid blanditiis molestiae adipisci. Rem debitis et non sunt esse.\nQuidem eaque tenetur aspernatur magni eum sit assumenda harum ut. Alias nostrum velit velit optio id porro. Adipisci est velit a. Doloremque sed ipsum sit.\nVelit id dolore ut. Quo cupiditate pariatur sint explicabo. Nobis laborum illo doloribus deserunt et non sed. Vitae eos nulla aut voluptatum et nulla ipsa. In libero modi adipisci voluptatem doloremque et est distinctio doloribus. Ut est fugiat provident tenetur et eos eveniet architecto.", "employees": 13553, "id": "1" },
    { "createdAt": "2022-03-07T21:32:51.389Z", "title": "Product Response Producer", "logo": "http://loremflickr.com/640/480/technics", "company": "Casper Group", "location": "Jakarta", "experience": false, "job_type": "Intern", "closeAt": "2023-05-26T04:03:42.863Z", "skills": "Backend Developer", "sector": "Communications", "description": "Veniam voluptatem illum repudiandae ipsum consequatur suscipit. Velit saepe aut. Ipsa facere culpa perferendis nemo et inventore. Nobis voluptatibus velit numquam at quo consectetur pariatur voluptatem magni. Aperiam occaecati voluptatem.\nAsperiores quibusdam rerum deserunt voluptatem tempora repellat voluptate. Commodi asperiores itaque facilis voluptate rerum. Voluptatem omnis eligendi cumque non assumenda beatae. Voluptatem tempore corrupti exercitationem repellendus vel velit. Vel quos est quo amet quaerat et cum accusamus sed.\nCulpa qui suscipit occaecati reprehenderit est. Voluptas ea distinctio et recusandae et consequuntur ut ab rerum. Distinctio velit eveniet numquam quia autem et. Impedit dolores magnam ut ex eaque quis. Quaerat alias et est fugit porro.", "employees": 64648, "id": "2" },
    { "createdAt": "2022-02-20T13:05:58.596Z", "title": "Internal Branding Specialist", "logo": "http://loremflickr.com/640/480/technics", "company": "Schmeler, Pagac and Lebsack", "location": "Bandung", "experience": true, "job_type": "Fulltime", "closeAt": "2023-01-28T20:16:08.094Z", "skills": "Frontend Developer", "sector": "Functionality", "description": "Tenetur ut libero accusantium optio doloremque voluptate. Fugit ad beatae accusamus consequuntur dolore eos. Et accusantium vel qui.\nRecusandae et sint. Dolor reiciendis ab. Dolorum corrupti et delectus quos unde est ea rem nostrum. Inventore rem consequatur doloremque consequatur culpa illo porro eos eum. Esse similique dignissimos. Nihil est a nisi.\nPossimus provident amet et dicta nesciunt harum totam molestias ipsa. Vero itaque consectetur eveniet. Laudantium ut eum qui consequatur et natus.", "employees": 58131, "id": "3" },
    { "createdAt": "2022-01-15T13:41:38.118Z", "title": "District Directives Liaison", "logo": "http://loremflickr.com/640/480/technics", "company": "Davis Inc", "location": "Jakarta", "experience": true, "job_type": "Fulltime", "closeAt": "2022-10-06T04:30:31.520Z", "skills": "Backend Developer", "sector": "Integration", "description": "Ut eum tempora quis voluptates mollitia consectetur magni modi. Tempore saepe pariatur est aliquid blanditiis molestiae adipisci. Rem debitis et non sunt esse.\nQuidem eaque tenetur aspernatur magni eum sit assumenda harum ut. Alias nostrum velit velit optio id porro. Adipisci est velit a. Doloremque sed ipsum sit.\nVelit id dolore ut. Quo cupiditate pariatur sint explicabo. Nobis laborum illo doloribus deserunt et non sed. Vitae eos nulla aut voluptatum et nulla ipsa. In libero modi adipisci voluptatem doloremque et est distinctio doloribus. Ut est fugiat provident tenetur et eos eveniet architecto.", "employees": 13553, "id": "1" },
    { "createdAt": "2022-03-07T21:32:51.389Z", "title": "Product Response Producer", "logo": "http://loremflickr.com/640/480/technics", "company": "Casper Group", "location": "Jakarta", "experience": false, "job_type": "Intern", "closeAt": "2023-05-26T04:03:42.863Z", "skills": "Backend Developer", "sector": "Communications", "description": "Veniam voluptatem illum repudiandae ipsum consequatur suscipit. Velit saepe aut. Ipsa facere culpa perferendis nemo et inventore. Nobis voluptatibus velit numquam at quo consectetur pariatur voluptatem magni. Aperiam occaecati voluptatem.\nAsperiores quibusdam rerum deserunt voluptatem tempora repellat voluptate. Commodi asperiores itaque facilis voluptate rerum. Voluptatem omnis eligendi cumque non assumenda beatae. Voluptatem tempore corrupti exercitationem repellendus vel velit. Vel quos est quo amet quaerat et cum accusamus sed.\nCulpa qui suscipit occaecati reprehenderit est. Voluptas ea distinctio et recusandae et consequuntur ut ab rerum. Distinctio velit eveniet numquam quia autem et. Impedit dolores magnam ut ex eaque quis. Quaerat alias et est fugit porro.", "employees": 64648, "id": "2" },
    { "createdAt": "2022-02-20T13:05:58.596Z", "title": "Internal Branding Specialist", "logo": "http://loremflickr.com/640/480/technics", "company": "Schmeler, Pagac and Lebsack", "location": "Bandung", "experience": true, "job_type": "Fulltime", "closeAt": "2023-01-28T20:16:08.094Z", "skills": "Frontend Developer", "sector": "Functionality", "description": "Tenetur ut libero accusantium optio doloremque voluptate. Fugit ad beatae accusamus consequuntur dolore eos. Et accusantium vel qui.\nRecusandae et sint. Dolor reiciendis ab. Dolorum corrupti et delectus quos unde est ea rem nostrum. Inventore rem consequatur doloremque consequatur culpa illo porro eos eum. Esse similique dignissimos. Nihil est a nisi.\nPossimus provident amet et dicta nesciunt harum totam molestias ipsa. Vero itaque consectetur eveniet. Laudantium ut eum qui consequatur et natus.", "employees": 58131, "id": "3" },
    { "createdAt": "2022-01-15T13:41:38.118Z", "title": "District Directives Liaison", "logo": "http://loremflickr.com/640/480/technics", "company": "Davis Inc", "location": "Jakarta", "experience": true, "job_type": "Fulltime", "closeAt": "2022-10-06T04:30:31.520Z", "skills": "Backend Developer", "sector": "Integration", "description": "Ut eum tempora quis voluptates mollitia consectetur magni modi. Tempore saepe pariatur est aliquid blanditiis molestiae adipisci. Rem debitis et non sunt esse.\nQuidem eaque tenetur aspernatur magni eum sit assumenda harum ut. Alias nostrum velit velit optio id porro. Adipisci est velit a. Doloremque sed ipsum sit.\nVelit id dolore ut. Quo cupiditate pariatur sint explicabo. Nobis laborum illo doloribus deserunt et non sed. Vitae eos nulla aut voluptatum et nulla ipsa. In libero modi adipisci voluptatem doloremque et est distinctio doloribus. Ut est fugiat provident tenetur et eos eveniet architecto.", "employees": 13553, "id": "1" },
    { "createdAt": "2022-03-07T21:32:51.389Z", "title": "Product Response Producer", "logo": "http://loremflickr.com/640/480/technics", "company": "Casper Group", "location": "Jakarta", "experience": false, "job_type": "Intern", "closeAt": "2023-05-26T04:03:42.863Z", "skills": "Backend Developer", "sector": "Communications", "description": "Veniam voluptatem illum repudiandae ipsum consequatur suscipit. Velit saepe aut. Ipsa facere culpa perferendis nemo et inventore. Nobis voluptatibus velit numquam at quo consectetur pariatur voluptatem magni. Aperiam occaecati voluptatem.\nAsperiores quibusdam rerum deserunt voluptatem tempora repellat voluptate. Commodi asperiores itaque facilis voluptate rerum. Voluptatem omnis eligendi cumque non assumenda beatae. Voluptatem tempore corrupti exercitationem repellendus vel velit. Vel quos est quo amet quaerat et cum accusamus sed.\nCulpa qui suscipit occaecati reprehenderit est. Voluptas ea distinctio et recusandae et consequuntur ut ab rerum. Distinctio velit eveniet numquam quia autem et. Impedit dolores magnam ut ex eaque quis. Quaerat alias et est fugit porro.", "employees": 64648, "id": "2" },
    { "createdAt": "2022-02-20T13:05:58.596Z", "title": "Internal Branding Specialist", "logo": "http://loremflickr.com/640/480/technics", "company": "Schmeler, Pagac and Lebsack", "location": "Bandung", "experience": true, "job_type": "Fulltime", "closeAt": "2023-01-28T20:16:08.094Z", "skills": "Frontend Developer", "sector": "Functionality", "description": "Tenetur ut libero accusantium optio doloremque voluptate. Fugit ad beatae accusamus consequuntur dolore eos. Et accusantium vel qui.\nRecusandae et sint. Dolor reiciendis ab. Dolorum corrupti et delectus quos unde est ea rem nostrum. Inventore rem consequatur doloremque consequatur culpa illo porro eos eum. Esse similique dignissimos. Nihil est a nisi.\nPossimus provident amet et dicta nesciunt harum totam molestias ipsa. Vero itaque consectetur eveniet. Laudantium ut eum qui consequatur et natus.", "employees": 58131, "id": "3" },

]

const expertise = [
    { "id": "0", "name": "Back-End Developer" },
    { "id": "1", "name": "Front-End Developer" },
    { "id": "2", "name": "Product Manager" },
    { "id": "3", "name": "Product Designer" },
    { "id": "4", "name": "iOS Developer" },
]

const type = [
    { "id": "0", "name": "Full-Time" },
    { "id": "1", "name": "Freelance" },
    { "id": "2", "name": "Intern" },
    { "id": "3", "name": "Bisa Remote" },
]
const city = [
    { "id": "0", "name": "Bandung" },
    { "id": "1", "name": "Jakarta" },
    { "id": "2", "name": "Yogyakarta" },
]
const experience = [
    { "id": "0", "name": "Freshgraduate" },
    { "id": "1", "name": "1-3 tahun" },
    { "id": "2", "name": "3-5 tahun" },
    { "id": "3", "name": "5-10 tahun" },
    { "id": "4", "name": "Lebih dari 10 tahun" },
]


export default function Jobs({ jobs }) {
    // console.log(jobs)
    return (
        <div className='bg-neutral-900'>
            <div className='h-64  bg-cover bg-right bg-no-repeat flex items-center text-white' style={{ backgroundImage: `url(${arrow.src})` }}>
                <div className="container mx-auto">
                    <div className="xs:w-full sm:w-4/5 lg:w-3/5 px-3">
                        <h4 className='text-blue-500 font-bold text-xl'>Dicoding Jobs</h4>
                        <h1 className='font-bold text-4xl'>
                            Temukan lowongan yang cocok untuk Anda
                            <Image className='ml-3 inline ' src={require('../assets/image/header-art.png')} alt='arrow' />
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-white text-black rounded-t-2xl pt-12">
                <div className="container mx-auto">
                    <div className="lg:flex gap-4 p-4">
                        <div className='grow'>
                            <h3 className='font-bold text-2xl mb-6'>Daftar Pekerjaan Terbaru</h3>
                            <ul>
                                {jobs.map((item, index) => {
                                    moment.locale('id')
                                    const formattedCreatedAt = moment(item.createdAt).format('D MMMM y');
                                    const formattedcloseAt = moment(item.closeAt).format('D MMMM y');
                                    return (
                                        <li className='flex p-4 border mb-6 rounded-sm' key={index}>
                                            {/* <Image
                                                loader={({ src, width, quality }) => item.logo} width={96} height={96} /> */}
                                            <Image
                                                alt={item.title}
                                                className="w-24 h-24 object-cover mr-4"
                                                loader={() => item.logo}
                                                src={item.logo}
                                                width={96}
                                                height={96} />
                                            <div className='grow grid md:grid-cols-2'>
                                                <div className='grow'>
                                                    <h5 className='font-bold'>{item.title}</h5>
                                                    <div className='my-2 flex items-center gap-2 text-xs'>
                                                        <IoBusinessOutline />
                                                        <h5> {item.company} • {item.job_type}</h5>
                                                    </div>
                                                    <div className='my-2 flex items-center gap-2 text-xs'>
                                                        <IoLocationOutline />
                                                        <h5> {item.location}  </h5>
                                                        <IoBriefcaseOutline />
                                                        <h5> {item.experience ? '1-3 tahun pengalaman' : 'Fresh Graduate'} </h5>
                                                    </div>
                                                </div>
                                                <div className='text-xs text-gray-500 md:text-right'>
                                                    <h6>Dibuat pada {formattedCreatedAt}</h6>
                                                    <h6>Lamar sebelum {formattedcloseAt}</h6>
                                                </div>
                                            </div>
                                            {/* <h5>{item.logo}</h5> */}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="lg:w-96 sticky top-5 h-screen overflow-auto pr-4">
                            <div className='border radius-sm p-4 flex items-center mb-4 w-full'>
                                <IoSearchOutline size={17} />
                                <input className='bg-white w-full ml-4 ring-0 focus:border-0 text-sm' placeholder='Pekerjaan apa yang sedang Anda cari?' />
                            </div>
                            <div className='border radius-sm p-4 mb-4 accent-gray-900 divide-y divide-gray-200'>
                                <div className='pb-6'>
                                    <h3 className='font-bold text-lg mb-4'>Keahlian</h3>
                                    {expertise.map((item, index) => {
                                        return (
                                            <div className="flex items-center mb-4" key={index}>
                                                <input id={'expertise-' + index} type="checkbox" value="" className="w-4 h-4  rounded border-gray-300" />
                                                <label htmlFor={'expertise-' + index} className="ml-2">{item.name}</label>
                                            </div>

                                        )
                                    })}
                                    <h6 className='text-xs text-center'>Selengkapnya <IoAddOutline className='inline' /> </h6>
                                </div>
                                <div className='pt-4 pb-2'>
                                    <h3 className='font-bold text-lg mb-4'>Tipe Pekerjaan</h3>
                                    {type.map((item, index) => {
                                        return (
                                            <div className="flex items-center mb-4" key={index}>
                                                <input id={'type-' + index} type="checkbox" value="" className="w-4 h-4  rounded border-gray-300" />
                                                <label htmlFor={'type-' + index} className="ml-2">{item.name}</label>
                                            </div>

                                        )
                                    })}
                                </div>
                                <div className='pt-4 pb-2'>
                                    <h3 className='font-bold text-lg mb-4'>Kota</h3>
                                    {city.map((item, index) => {
                                        return (
                                            <div className="flex items-center mb-4" key={index}>
                                                <input id={'city-' + index} type="checkbox" value="" className="w-4 h-4  rounded border-gray-300" />
                                                <label htmlFor={'city-' + index} className="ml-2">{item.name}</label>
                                            </div>

                                        )
                                    })}
                                </div>
                                <div className='pt-4 pb-2'>
                                    <h3 className='font-bold text-lg mb-4'>Pengalaman</h3>
                                    {experience.map((item, index) => {
                                        return (
                                            <div className="flex items-center mb-4" key={index}>
                                                <input id={'experience-' + index} type="checkbox" value="" className="w-4 h-4  rounded border-gray-300" />
                                                <label htmlFor={'experience-' + index} className="ml-2">{item.name}</label>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const jobs = await fetch('https://6331e3cf3ea4956cfb694be6.mockapi.io/jobs').then(res => res.json());
    console.log(jobs)
    return {
        props: {
            jobs
        }
    }
}