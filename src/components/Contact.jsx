import { FaFacebook, FaLocationDot, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { ImPhone } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import patentImg from '../assets/patent_page-0001.jpg'

const Contact = () => {
  return (
    <div id='contact' className='bg-cyan-700'>
        <div className='max-w-[1280px] h-full mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-12 py-12 px-4 lg:px-0'>
            <div className='flex flex-col items-center lg:items-start gap-6 lg:gap-12 lg:w-1/2'>
                <div>
                    <h1 className='text-center lg:text-start font-bold text-4xl text-white'>Patent</h1>
                    <p className='text-center lg:text-start pt-6 text-cyan-100'>OLIY TA’LIM  MUASSASALARIDA LABORATORIYA DARSLARINI INNOVATSIYA TEXNOLOGIYALARI ASOSIDA TAKOMILLASHTIRISH ELEKTRON QO'LLANMA UCHUN EHM DASTUR</p>
                </div>
            {/* <ul className='flex flex-col gap-4'>
                <li className='text-cyan-100'>
                    <a href="tel:123-456-7890p123" className='flex items-center gap-2'>
                        <ImPhone className='fill-teal-300' /><span>+ (123) 456 7890</span>
                    </a>
                </li>
                <li className='text-cyan-100'>
                    <a className='flex items-center gap-2' href="mailto: contact@xyzwebsite.com">
                        <IoIosMail className='fill-teal-300' /><span>contact@xyzwebsite.com</span>
                    </a>
                </li>
                <li className='flex items-center gap-2 text-cyan-100'>
                    <FaLocationDot className='fill-teal-300' /><span>11, Street 342, Abcd Fgh</span>
                </li>
            </ul> */}
            <ul className='flex gap-4 lg:hidden'>
                <li>
                    <a href="#">
                        <FaFacebook size={30} className='fill-white' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaTwitter size={30} className='fill-white' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaYoutube size={30} className='fill-white' />
                    </a>
                </li>
            </ul>
            </div>
            <div className='max-w-lg'>
                <img src={patentImg} alt="Patent image" />
            </div>
            {/* <form action='https://formsubmit.co/kuanishbayevyernazar@gmail.com' method='post' className='flex flex-col bg-white p-10 gap-4 text-gray-600 rounded-lg max-w-lg'>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input name='Name' className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Your name' type="text" id='name' required />
                </div>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input name='Email' className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Email Adress' type="email" id='email' required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name='Message' className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Type your message here' id="message" cols="30" rows="5" required></textarea>
                </div>
                <Button type='submit' className='bg-cyan-700 self-end' variant="contained" endIcon={<SendIcon />}>Send</Button>
            </form> */}
        </div>
    </div>
  )
}

export default Contact