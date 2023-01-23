import React, {useState, useEffect} from 'react'
import axios from 'axios'
import textureBackground from '../assets/images/textureBackground.png'

export default function Home() {

    // const [projectsData, setProjectsData] = useState([])

    // const url = "http://localhost:8500"

    const projectsData = [
        {"title": "Belotta"},
        {"title": "Righteous"},
        {"title": "Honey Cake"},
        {"title": "Balsamiq"},
        {"title": "Ubuntu"},
        {"title": "Georgia"},
    ]

    // useEffect(() => {
    //  axios({
    //     method: "get",
    //     url: `${url}/projects`
    //  }).then((res)=> {
    //     console.log('res', res)
    //     setProjectsData(res.data)
    //  }).catch(err =>{
    //     console.log('err', err)
    //  })
    // }, [])
    
    // console.log('projectData', projectsData)

  return (
    <div className='w-full'>
        <section className='w-full flex px-[40px] md:px-[80px] flex-col-reverse md:flex-row'>
            <div className="flex-[1] py-[55px] pr-[50px]">
                <div className="h-full w-full bg-purple-900 rounded-[20px]"></div>
            </div>
            <div className="flex-[1]">
                <div className="w-[85%] mt-[150px] md:mt-[60px]">
                    <h1 className='text-[50px] leading-[55px]'>Manage All Of Your Fonts In One Place Efficently</h1>
                </div>
                <div className="w-full md:w-[50%] my-[30px]">
                <p className=''>Manage your font style, weight and size all at once. Set color to see the look, save and keep your fonts in check</p>

                </div>
                <div className="">
                    <button className='h-[40px] md:h-[60px] w-[170px] md:w-[200px] bg-black rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mr-[15px]'>Download App</button>
                    <button className='h-[40px] md:h-[60px] w-[100px] md:w-[150px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Sign Up</button>
                </div>

                <div className="mt-[100px] border-t-[1px] border-black flex flex-col py-[20px] mb-[50px]">
                    <div className="flex-[1] mb-[20px]">
                        <h1 className=' font-semibold'>SELECTED FONTS</h1>
                    </div>
                    <div className="flex-[2]">
                        {projectsData.map((project, index) => {
                            return (
                                <button className='py-[6px] md:py-[11px] px-[16px] mb-[10px] mx-[6px] font-medium text-[12px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black' key={index}>{project.title}</button>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>

        <section className='w-full flex px-[40px] md:px-[80px] flex-col-reverse md:flex-row py-[20px] bg-[#f8f3ff]'>
           
            <div className="flex items-center w-[100%] my-[70px] md:my-[0px] z-10 flex-[2.6]">
                <div className="">
                    <h1 className='text-[45px] md:text-[50px] leading-[55px]'>Create stylish 3d text animations with a large variety of fonts</h1>
                    <div className="w-full md:w-[50%] my-[30px]">
                        <p className=''>Explore colorful text animations to implement in your website, with real time editing and styling features</p>
                    </div>
                    <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Learn More</button>
                </div>
            </div> 
            <div className="flex items-center justify-center absolute md:relative h-[650px] md:h-screen opacity-30 md:opacity-100 flex-[3]">
                <img src={textureBackground} alt="" />
            </div>
        </section>
        <section>
            
        </section>
        
    </div>
  )
}
