import React,{useState, useEffect} from 'react'
import DiscreteSliderMarks from './Slider'
import axios from 'axios'

export default function FontLab() {
    const [fonts, setFonts] = useState([])
    const [allGoogleFonts, setAllGoogleFonts] = useState([])


    const url = "http://localhost:8500"

    useEffect(() => {
        axios.get(`${url}/fonts`)
        .then((res)=> {
            setFonts(res.data)
        }).catch((err)=>{
            console.log('err', err)
        })


        axios.get(`${process.env.REACT_APP_GOOGLEAPI_URL}key=${process.env.REACT_APP_GOOGLEAPI_KEY}`, {
            sort: 'alpha',
        })
        .then(res => {
            // console.log('res', res)
            setAllGoogleFonts(res.data.items)
        }).catch(err => {
            console.log('err', err)
        })
    }, [])

  return (
    <div className="w-full p-[30px] bg-[#f8f3ff] h-[700px] flex flex-col-reverse md:flex-row ">
        <div className="flex flex-[3] p-[20px] flex-col pr-[50px]">
            <div className="w-full flex-[62]">
                <div className="w-full h-full bg-white rounded-[20px] flex flex-col">
                    <div className="flex-[60] p-[20px]">
                        <h1 className=' font-bold'>Your Fonts</h1>
                        <div className="h-full w-full overflow-y-scroll border-solid border-t-[0.1pt] border-[#e2e2e2] pt-[10px]">
                        {fonts.map((font, index)=>{
                            return (
                                <button className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]" key={index+font.font.family}>{font.font.family}</button>
                            )
                        })}                        
                        </div>
                    </div>
                    <div className="flex-[40] p-[20px]">
                        <h1 className='font-bold'>Selected</h1>
                        <div className="h-full w-full border-solid border-t-[0.1pt] border-[#e2e2e2] pt-[10px]">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex-[12] flex items-center justify-center">
                <div className="h-[50px] w-full flex items-center justify-center rounded-full bg-white">
                    <input type="text" className='w-[80%] outline-none' placeholder='Input Text' />
                </div>
            </div>
        </div>

        <div className="flex flex-col flex-[5] p-[20px] pl-[50px] border-solid border-l-[0.1pt] border-[#e2e2e2">
            <div className="flex-[75] rounded-[20px] bg-white"></div>
            <div className="w-full flex-[13] pt-[10px]">
                <div className="w-full h-full flex items-center justify-center relative">
                   <DiscreteSliderMarks/>
                </div>
            </div>
            <div className="flex-[25] pt-[30px]">
                <div className="h-full w-full">
                    <div className="h-full w-[140px] rounded-[20px] border-solid border-[3pt] border-[#1dc669] cursor-pointer"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
