import { useState } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { FaAnglesDown } from 'react-icons/fa6'

const Docs = () => {
    const [expand, setExpand] = useState(false)
  return (
    <div className='h-min bg-blue-300 md:flex md:items-center md:justify-evenly px-4 py-10 md:px-0'>
        <div className='relative md:w-[30%] transition ease duration-1000 flex flex-col gap-4'>
            <img src="./docs/Xulosa_VirtualXimya-1.jpg" alt="Page 1" className='h-full' />
            {
                expand && (
                    <>
                        <img src="./docs/Xulosa_VirtualXimya-2.jpg" alt="Page 1" className='h-full' />
                        <img src="./docs/Xulosa_VirtualXimya-3.jpg" alt="Page 1" className='h-full' />
                    </>
                )
            }
            <div className='bg-white relative bottom-10 h-10 shadow-[0_-10px_10px_#00000029] rounded-[10px_10px_0_0]'>
                <div className='bg-white px-10 py-1 w-fit mx-auto absolute bottom-full left-1/2 -translate-x-1/2 rounded-[10px_10px_0_0] shadow-[0_-10px_10px_#00000029] cursor-pointer' title='Expand' onClick={() => setExpand(prev => !prev)}>
                    <FaAnglesDown className={`${expand && 'rotate-180'}`} />
                </div>
            </div>
        </div>
        <a target='_blank' title='Download file' href="https://docs.google.com/document/d/1YoEOYwhdlsZ4yMxSyYS5RpG2xsiMHC2-/edit?usp=drive_link&ouid=101333697640876358029&rtpof=true&sd=true" className='size-20 md:size-32 rounded-3xl bg-gray-300 flex justify-center items-center mx-auto md:mx-0'>
            <FaFileDownload fill='black' className='hover:fill-blue-600 size-8' />
        </a>
    </div>
  )
}

export default Docs