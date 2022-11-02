import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import arrow from '../assets/image/header-arrow.png'
import moment from 'moment';
import 'moment/locale/id';
import { IoBusinessOutline, IoLocationOutline, IoBriefcaseOutline, IoSearchOutline, IoAddOutline } from "react-icons/io5";
import { useNavbarHooks } from '../hooks/navbar';
import { getAllJobCollection } from '../lib/api';
import Link from 'next/link';
import { isWithin } from '../lib/util';

const skills = [
  { "id": "0", "name": "Back-End Developer" },
  { "id": "1", "name": "Front-End Developer" },
  { "id": "2", "name": "Product Manager" },
  { "id": "3", "name": "Product Designer" },
  { "id": "4", "name": "iOS Developer" },
]

const job_type = [
  { "id": "0", "name": "Full-Time" },
  { "id": "1", "name": "Freelance" },
  { "id": "2", "name": "Intern" },
  { "id": "3", "name": "Bisa Remote" },
]
const location = [
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

const initialFilters = {
  skills,
  job_type,
  location,
  experience,
}

export default function Home({ jobCollection = [] }) {

  const navbar = useNavbarHooks()
  const [tempCollection, setTempCollection] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [lastFilter, setlastFilter] = useState('')
  const [filters, setFilters] = useState(
    {
      skills: skills.map(() => false),
      job_type: job_type.map(() => false),
      location: location.map(() => false),
      experience: experience.map(() => false)
    }
  )
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    navbar.setVariant('dark')
    // setTempCollection(jobCollection)
  }, [])

  useEffect(() => {
    if (searchTerm !== '') setIsSearching(true)
    const delayDebounceFn = setTimeout(() => {
      // console.log(searchTerm)
      searchJob(searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  useEffect(() => {
    // const collection = []
    // jobCollection.map(jobItem => {
    //   // Object.keys(item).map(filterItem => {
    //   //   console.log(filterItem)
    //   //   console.log(filters[filterItem])

    //   // })

    //   Object.keys(filters).map(filterItem => {
    //     // console.log(filterItem)
    //     // console.log(filters[filterItem])

    //     filters[filterItem].map((item, index) => {
    //       // console.log(item, index)
    //       if (item) {
    //         // console.log(filterItem, initialFilters[filterItem][index].name)
    //         // console.log(initialFilters[filterItem][index].name)
    //         // console.log(initialFilters[filterItem][index].name === jobItem[filterItem])
    //         if (isWithin(initialFilters[filterItem][index].name, jobItem[filterItem])) {
    //           // console.log(jobItem)
    //           collection.push(jobItem)
    //         }
    //       }
    //     })
    //   })
    //   // isWithin(initialFilters[filterItem][index].name, item[filterItem])
    // })

    const collection = jobCollection.filter((item, index) => {
      console.log(item['title'])
      let flag1 = true
      for (const category in filters) {
        console.log(category)
        // console.log(filters[category])
        let flag2 = false
        let adaYangDicheck = false
        for (let index = 0; index < filters[category].length; index++) {
          // console.log()
          // flag2 = false
          if (filters[category][index]) {
            adaYangDicheck = true
            // flag2 = false
            console.log('-- yang lagi dicari --- ', category, ' - ', initialFilters[category][index].name)
            console.log('-- ada yg dicheck nih - ', category, ' - ', item[category])
            console.log('--', isWithin(initialFilters[category][index].name, item[category]))
            if (isWithin(initialFilters[category][index].name, item[category])) {
              console.log('- masuk')
              flag2 = true
            } else {
              console.log('- ga masuk')
              // flag2 = false
              // return false
              // return true
            }
          } else {
            // flag2 = true
          }
        }
        console.log(category, flag2)
        console.log('ada yang dicheck', adaYangDicheck)
        if (!adaYangDicheck) {
          console.log('lolos')
        } else {
          if (flag2) {
            console.log('lolos')
          } else {
            console.log('ga lolos')
            flag1 = false

          }

          // console.log('ga lolos')
        }
        // console.log('lolosin ga? - ', (!adaYangDicheck
        //   ? 'iya'
        //   : flag2
        //     ? 'iya'
        //     : 'ga'
        // ))
        // console.log('masuk ga?', flag2)
        // console.log('jadinya?')
        // return flag2
        // if (item[key] === undefined || item[key] !== filters[key])
        // return false;
        // flag1 = flag2
        // if (flag2) return true
      }
      console.log('overall', flag1)
      return flag1;
    });

    console.log(collection)
    setTempCollection(collection)
    // Object.keys(filters).map(filterItem => {
    //   // console.log(filterItem)
    //   // console.log(this[filterItem])
    //   if (filterItem === 'experience') return
    //   filters[filterItem].map((item, index) => {
    //     if (item) {
    //       console.log(filterItem, initialFilters[filterItem][index].name)
    //       console.log(collection)
    //     }
    //     // if(filterItem)
    //   })
    //   // tempCollection.filter(item => )
    // })
  }, [filters])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchJob(searchTerm)
    }
  }

  const searchJob = query => {
    console.log(query)
    if (query !== '') {
      // console.log(jobCollection)
      const collection = jobCollection.filter(item => isWithin(query, item.title))
      setTempCollection(collection)
      setIsSearching(false)
    } else {
      // setTempCollection(jobCollection)
    }
  }

  const handleFilter = (e) => {
    setIsSearching(true)
    const { name, value, checked } = e.target
    if (name === 'experience') return
    // console.log(name, value, checked)
    // console.log(name, lastFilter, name === lastFilter)
    // setlastFilter(name)
    setFilters(prev => {
      const newarr = filters[name]
      newarr[value] = checked
      return {
        ...prev,
        [name]: newarr
      }
    })

    // console.log(initialFilters[name][value].name)
    // if (checked) {
    //   // setTempCollection([])
    //   if (name === lastFilter) {
    //     const collection = jobCollection.filter(item => isWithin(initialFilters[name][value].name, item[name]))
    //     setTempCollection(prev => [...prev, ...collection])
    //   } else {
    //     const collection = (tempCollection.length > 0
    //       ? tempCollection
    //       : jobCollection
    //     ).filter(item => isWithin(initialFilters[name][value].name, item[name]))
    //     setTempCollection(collection)
    //   }
    // } else {
    //   if (name === lastFilter) {
    //     // const collection = jobCollection.filter(item => isWithin(initialFilters[name][value].name, item[name]))
    //     // setTempCollection(prev => [...prev, ...collection])
    //     const collection = tempCollection.filter(item => !isWithin(initialFilters[name][value].name, item[name]))
    //     setTempCollection(collection)
    //   } else {
    //     const collection = tempCollection.filter(item => !isWithin(initialFilters[name][value].name, item[name]))
    //     setTempCollection(collection)
    //   }
    //   // const collection = tempCollection.filter(item => !isWithin(initialFilters[name][value].name, item[name]))
    //   // setTempCollection(collection)
    //   // setTempCollection
    // }

    // console.log(collection)
    setIsSearching(false)
  }

  // console.log(tempCollection.length)
  // console.log(jobCollection.length)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
                {isSearching && <h1>Sedang mencari</h1>}
                <ul>
                  {/* {(tempCollection.length > 0
                    ? tempCollection
                    : jobCollection).map((item, index) => { */}
                  {tempCollection.map((item, index) => {
                    moment.locale('id')
                    const formattedCreatedAt = moment(item.createdAt).format('D MMMM y');
                    const formattedcloseAt = moment(item.closeAt).format('D MMMM y');
                    return (
                      <li key={index}>
                        <Link href={'/jobs/' + item.id} className='flex p-4 border mb-6 rounded-sm' >
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
                  <div className='pb-6'>
                    <h3 className='font-bold text-lg mb-4'>Keahlian</h3>

                    {skills.map((item, index) => {
                      return (
                        <div className="flex items-center mb-4" key={index}>
                          <input name='skills' id={'skills-' + index} onChange={handleFilter} type="checkbox" value={index} checked={filters['skills'][index]} className="w-4 h-4  rounded border-gray-300" />
                          <label htmlFor={'skills-' + index} className="ml-2">{item.name}</label>
                        </div>
                      )
                    })}

                    <h6 className='text-xs text-center'>Selengkapnya <IoAddOutline className='inline' /> </h6>
                  </div>
                  <div className='pt-4 pb-2'>
                    <h3 className='font-bold text-lg mb-4'>Tipe Pekerjaan</h3>

                    {job_type.map((item, index) => {
                      return (
                        <div className="flex items-center mb-4" key={index}>
                          <input name='job_type' id={'job_type-' + index} onChange={handleFilter} type="checkbox" value={item.id} checked={filters['job_type'][index]} className="w-4 h-4  rounded border-gray-300" />
                          <label htmlFor={'job_type-' + index} className="ml-2">{item.name}</label>
                        </div>

                      )
                    })}

                  </div>
                  <div className='pt-4 pb-2'>
                    <h3 className='font-bold text-lg mb-4'>Kota</h3>

                    {location.map((item, index) => {
                      return (
                        <div className="flex items-center mb-4" key={index}>
                          <input name='location' id={'location-' + index} onChange={handleFilter} type="checkbox" value={item.id} checked={filters['location'][index]} className="w-4 h-4  rounded border-gray-300" />
                          <label htmlFor={'location-' + index} className="ml-2">{item.name}</label>
                        </div>
                      )
                    })}

                  </div>
                  <div className='pt-4 pb-2'>
                    <h3 className='font-bold text-lg mb-4'>Pengalaman</h3>


                    {experience.map((item, index) => {
                      return (
                        <div className="flex items-center mb-4" key={index}>
                          <input name='experience' id={'experience-' + index} onChange={handleFilter} type="checkbox" value={item.id} checked={filters['experience'][index]} className="w-4 h-4  rounded border-gray-300" />
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