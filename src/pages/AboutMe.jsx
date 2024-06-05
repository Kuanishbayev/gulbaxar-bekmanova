import bioImg from '../assets/bio.jpg'
import { TypeAnimation } from 'react-type-animation'

const AboutMe = () => {
  return (
      <div id='about-me' className='bg-black text-white'>
          <div className='max-w-[1280px] mx-auto grid lg:grid-cols-2 justify-items-center items-center gap-4 px-4 lg:px-0 py-12'>
              <img src={bioImg} alt="bio" className='w-96' />
              <div className='flex flex-col gap-4'>
                <p className='lg:text-left text-center font-bold text-3xl'>Bekmanova Gulbaxar Begdullaevna</p>
                <p className='lg:text-left text-center font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illo nihil minima? Qui, quam labore sunt voluptatum impedit nemo adipisci.</p>
                <p className='lg:text-left text-stone-400 text-justify'>
                  <TypeAnimation sequence={[`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius fugiat libero obcaecati ad deserunt non consequuntur vel earum dolorem architecto nobis enim magnam nihil similique, sed magni. Officiis harum ipsam totam asperiores quod esse deserunt fugiat sunt non quidem. Sequi dignissimos, doloribus odit deleniti a eaque cumque molestiae reiciendis.`]} />
                </p>
              </div>
          </div>
      </div>
  )
}

export default AboutMe