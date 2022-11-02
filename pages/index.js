import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import arrow from '../assets/image/header-arrow.png'
import moment from 'moment';
import 'moment/locale/id';
import { IoBusinessOutline, IoLocationOutline, IoBriefcaseOutline, IoSearchOutline, IoAddOutline, IoGlassesOutline } from "react-icons/io5";
import { GiThink, GiInfo } from "react-icons/gi";
import { useNavbarHooks } from '../hooks/navbar';
import { getAllJobCollection } from '../lib/api';
import Link from 'next/link';
import { isWithin } from '../lib/util';


const experience = [
  { "id": "0", "name": "Freshgraduate", "value": false },
  { "id": "1", "name": "1-3 tahun", "value": true },
  { "id": "2", "name": "3-5 tahun", "value": true },
  { "id": "3", "name": "5-10 tahun", "value": true },
  { "id": "4", "name": "Lebih dari 10 tahun", "value": true },
]

const filterFields = {
  "skills": "Keahlian",
  "job_type": "Tipe Pekerjaan",
  "location": "Kota",
  "experience": "Pengalaman",
}


export default function Home({ jobCollection = [] }) {

  const navbar = useNavbarHooks()
  const [tempCollection, setTempCollection] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({})
  const [ogFilters, setOgFilters] = useState({})
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    navbar.setVariant('dark')
    const filtersSource = Object.keys(filterFields).reduce((prev, key) => {
      const filters2 = [...new Set(jobCollection.map(item => item[key]))];
      return {
        ...prev,
        og: {
          ...prev.og,
          [key]: filters2.map((item, index) => ({ id: index, name: item, value: item })),
        },
        switch: {
          ...prev.switch,
          [key]: filters2.map(() => false),

        }
      }
    }, [])
    setFilters(filtersSource.switch)
    setOgFilters(filtersSource.og)
  }, [])


  useEffect(() => {
    if (searchTerm !== '') setIsSearching(true)
    const delayDebounceFn = setTimeout(() => {

      setFilters(prev => ({ ...prev, title: [true] }))
      setOgFilters(prev => ({ ...prev, title: [{ value: searchTerm }] }))
      searchJob(searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  useEffect(() => {
    const collection = jobCollection.filter(item => {
      let flag1 = true
      for (const category in filters) {
        let flag2 = false
        let adaYangDicheck = false
        for (let index = 0; index < filters[category].length; index++) {
          if (filters[category][index]) {
            adaYangDicheck = true
            if (category === 'experience') {
              if (ogFilters[category][index].value === item[category]) {
                flag2 = true
              }
            } else {
              if (isWithin(ogFilters[category][index].value, item[category])) {
                flag2 = true
              }
            }
          }
        }
        if (adaYangDicheck) {
          if (!flag2) {
            flag1 = false
          }
        }
      }
      return flag1;
    });
    setTempCollection(collection)
  }, [filters])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchJob(searchTerm)
    }
  }

  const searchJob = query => {
    if (query !== '') {
      const collection = jobCollection.filter(item => isWithin(query, item.title))
      setTempCollection(collection)
      setIsSearching(false)
    }
  }

  const handleFilter = (e) => {
    setIsSearching(true)
    const { name, value, checked } = e.target
    setFilters(prev => {
      const newarr = filters[name]
      newarr[value] = checked
      return {
        ...prev,
        [name]: newarr
      }
    })
    setIsSearching(false)
  }



  return (
    <>
      <Head>
        <title>Dicoding Jobs</title>
        <meta name="description" content="Find your dream job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-neutral-900'>
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

                {isSearching && <div className='p-3 bg-indigo-200 rounded-lg'>
                  <h1 className='text-2xl font-bold '><IoGlassesOutline className='inline text-6xl' />Sedang mencari</h1>
                </div>}
                {!isSearching && tempCollection.length === 0 && <div className='p-3 bg-orange-200 rounded-lg'>
                  <h1 className='text-2xl font-bold '><GiThink className='inline text-6xl' /> Pekerjaan yang kamu cari belum terlihat  </h1>
                  <h6 className='ml-12 my-3'><GiInfo className='inline' /> coba ganti kata kunci atau filter dulu yuk</h6>
                </div>}
                {(tempCollection.length !== 0 && tempCollection.length !== jobCollection.length) && <div className='p-3 mb-3 bg-neutral-200 rounded-sm'>
                  <h6 className=''><GiInfo className='inline' /> memunculkan {tempCollection.length} hasil</h6>
                </div>}
                <ul>
                  {tempCollection.map((item, index) => {
                    moment.locale('id')
                    const formattedCreatedAt = moment(item.createdAt).format('D MMMM y');
                    const formattedcloseAt = moment(item.closeAt).format('D MMMM y');
                    return (
                      <li key={index}>
                        <Link href={'/jobs/' + item.id} className='flex p-4 border mb-6 rounded-sm' >
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
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="lg:w-96 sticky top-5 h-screen overflow-auto pr-4">
                <div className='border radius-sm p-4 flex items-center mb-4 w-full'>
                  <IoSearchOutline size={17} />
                  <input onKeyDown={handleKeyDown} onChange={e => setSearchTerm(e.target.value)} className='bg-white w-full ml-4 ring-0 focus:border-0 text-sm' placeholder='Pekerjaan apa yang sedang Anda cari?' />
                </div>
                <div className='border radius-sm p-4 mb-4 accent-gray-900 divide-y divide-gray-200'>
                  {Object.keys(ogFilters).map(category => {

                    if (category === 'title') return null
                    return (
                      <div className='py-6'>
                        <h3 className='font-bold text-lg mb-4'>{filterFields[category]}</h3>

                        {category === 'experience'
                          ? experience.map((item, index) => {
                            return (
                              <div className="flex items-center mb-4" key={index}>
                                <input name='experience' id={'experience-' + index} onChange={handleFilter} type="checkbox" value={item.id} checked={filters['experience'][index]} className="w-4 h-4  rounded border-gray-300" />
                                <label htmlFor={'experience-' + index} className="ml-2">{item.name}</label>
                              </div>
                            )
                          })
                          : ogFilters[category].map((item) => {
                            return (
                              <div className="flex items-center mb-4" key={item.id}>
                                <input name={category} id={category + '-' + item.id} onChange={handleFilter} type="checkbox" value={item.id} checked={filters[category][item.id]} className="w-4 h-4  rounded border-gray-300" />
                                <label htmlFor={category + '-' + item.id} className="ml-2">{item.name}</label>
                              </div>
                            )
                          })}
                        {category === 'skills' && (
                          <h6 className='text-xs text-center'>Selengkapnya <IoAddOutline className='inline' /> </h6>
                        )}
                      </div>

                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export async function getStaticProps() {
  const jobCollection = await getAllJobCollection()

  return {
    props: {
      jobCollection
    }
  }
}