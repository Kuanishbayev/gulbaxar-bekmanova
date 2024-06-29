import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const Docs = () => {
  return (
    <div className='relative h-screen'>
        <iframe src="https://docs.google.com/document/d/1YoEOYwhdlsZ4yMxSyYS5RpG2xsiMHC2-/preview" className='w-full h-full' allow="autoplay"></iframe>
        <a target='_blank' title='Download file' className='absolute right-10 top-10' href="https://docs.google.com/document/d/1YoEOYwhdlsZ4yMxSyYS5RpG2xsiMHC2-/edit?usp=drive_link&ouid=101333697640876358029&rtpof=true&sd=true">
            <FaFileDownload fill='black' size={30} className='hover:fill-blue-400' />
        </a>
    </div>
  )
}

export default Docs