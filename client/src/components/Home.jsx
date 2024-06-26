import React, { useState, useEffect } from 'react'
import axios from 'axios'
import textureBackground from '../assets/images/textureBackground.png'
import blowingRocket from '../assets/images/blowingRocket.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allFonts, getFontStatus, fetchFonts } from '../features/fonts/fontSlice'
import HomeBg from '../assets/images/background.jpg'
import { allTemplates } from '../features/templates/templateSlice'
import { fetchTemplates } from '../features/templates/templateSlice'
import { getTemplateStatus } from '../features/templates/templateSlice'

export default function Home() {

    const dispatch = useDispatch()
    const fontsData = useSelector(allFonts)
    const fontsStatus = useSelector(getFontStatus)
    const templatesStatus = useSelector(getTemplateStatus)
    const templates = useSelector(allTemplates)
    console.log('templates', templates)

    console.log('process.env.REACT_APP_GOOGLEAPI_KEY', process.env.REACT_APP_GOOGLEAPI_KEY)

  
    useEffect(() => {

        if (fontsStatus === 'idle') {
          dispatch(fetchFonts())
        }
        if (templatesStatus === 'idle') {
          dispatch(fetchTemplates())
    
        }
    
      }, [fontsStatus, dispatch, templatesStatus])

    console.log('fontData', fontsData)
    console.log('fontsStatus', fontsStatus)

    return (
        <>
            <div className='w-full'>
                <section className='w-full flex px-[40px] md:px-[80px] flex-col-reverse md:flex-row'>
                    <div className="flex-[1] py-[55px] pr-[50px]">
                        <div className="h-full w-full bg-cover bg-center bg-no-repeat rounded-[20px]  border-purple-300 border-solid border"
                            style={{ backgroundImage: `url(${HomeBg})` }}
                        ></div>
                    </div>
                    <div className="flex-[1]">
                        <div className="sm:w-[85%] mt-[12%] sm:mt-[150px] md:mt-[60px]">
                            <h1 className='text-[50px] leading-[55px]'>Free Web Animations From A Wide Range Of Templates</h1>
                        </div>
                        <div className="w-full md:w-[50%] my-[30px]">
                            <p className=''>Create stunning web animations with desired fonts, customize your style and feel the visuals</p>

                        </div>
                        <div className="">
                            <Link to={`/fontlab/${0}`} state={templates[0]}>
                                <button className='h-[40px] md:h-[60px] w-[100px] md:w-[150px] bg-purple-900 hover:bg-black rounded-[40px] text-[14px] text-center duration-300 text-white'>Try Demo</button>
                            </Link>
                        </div>

                        <div className="mt-[100px] border-t-[1px] border-black flex flex-col py-[20px] mb-[50px]">
                            <div className="flex-[1] mb-[20px]">
                                <h1 className=' font-semibold'>SELECTED FONTS</h1>
                            </div>
                            <div className="flex-[2]">
                                {fontsData.map((font, index) => {
                                    return (
                                        <Link key={index} to={`/fontstore/${font.id}`} state={font}>
                                            <button className='py-[6px] md:py-[11px] px-[16px] mb-[10px] mx-[6px] font-medium text-[12px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black' key={index + font.family}>{font.family}</button>
                                        </Link>
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
                            <h1 className='text-[45px] md:text-[50px] leading-[55px]'>Create stylish 3D text animations with a large variety of fonts</h1>
                            <div className="w-full md:w-[50%] my-[30px]">
                                <p className=''>Explore colorful text animations to implement in your website, with real time editing and styling features</p>
                            </div>
                            <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 hover:bg-black duration-300 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Learn More</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center absolute md:relative h-[650px] md:h-screen opacity-30 md:opacity-100 flex-[3]">
                        <img src={textureBackground} alt="" />
                    </div>
                </section>
                {/* <section className='w-full flex justify-center items-center h-[600px] bg-[#fefcff]'>
            <div className="flex justify-center items-center flex-col">
                <img src={blowingRocket} alt="" width="300" />
                <Link to="/fontstore">
                <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] mt-[30px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Get Started</button>
                </Link>
            </div>
        </section> */}

            </div>
        </>

    )
}
