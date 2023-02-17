import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function ViewFont(props) {

    // const url = "http://localhost:8500"
    // const params = useParams()
    const location = useLocation()
    const [fonts, setFonts] = useState(location.state)


    
  

    // useEffect(()=>{
      
    //    axios.get(`${url}/fonts`)
    // .then((res)=> {
    //     setFonts(res.data[fontId])
    // }).catch((err)=>{
    //     console.log('err', err)
    // })

    // setFontData(fonts)
    // },[params.id])
   
 
  console.log('fontData', fonts)
    
 



  return (
      <div className="w-full">
       <div className="w-full h-[400px] bg-purple-600 px-[70px] py-[70px] flex flex-row">

          <div className="flex-[1]">
            <div className="">
              <h1 className='text-white text-[30px]'>{fonts?.font.family}</h1>
              <div className="w-full flex flex-row pt-[20px]">
                <button className='bg-transparent mr-[10px] text-white'>Regular</button>
                <button className='bg-transparent mr-[10px] text-white border-solid border-purple-100 border-l-[2px] pl-[10px]'>Medium</button>
                <button className='bg-transparent mr-[10px] text-white border-solid border-purple-100 border-l-[2px] pl-[10px]'>Bold</button>
              </div>
            </div>
            <div className="w-full h-full flex items-center">
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi cumque architecto quisquam perspiciatis et, nesciunt impedit obcaecati suscipit? Necessitatibus!</p>
            </div>
          </div>

          <div className="flex-[1]">
            <div className="w-full h-full flex flex-col justify-center items-end pb-[40px]">
              <h1 className='text-[150px] text-purple-300' style={{fontFamily:`${fonts.font.family}`,}}>Aa</h1>
              <p className='text-[40px] text-purple-300' style={{fontFamily:`${fonts.font.family}`,}}>123456789</p>
            </div>
          </div>

        </div>
        <div className="w-full p-[40px] bg-purple-200 border-solid border-purple-800 border-t-[4px] min-h-[400px] px-[70px] py-[70px]">
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-bold text-purple-900'>Lorem 1</h1>
            <h1 className='text-[30px] font-bold text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-semibold text-purple-900'>Lorem 2</h1>
            <h1 className='text-[30px] font-semibold text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-medium text-purple-900'>Lorem 3</h1>
            <h1 className='text-[30px] font-medium text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-normal text-purple-900'>Lorem 4</h1>
            <h1 className='text-[30px] font-normal text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-light text-purple-900'>Lorem 5</h1>
            <h1 className='text-[30px] font-light text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-extralight text-purple-900'>Lorem 6</h1>
            <h1 className='text-[30px] font-extralight text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-thin text-purple-900'>Lorem 7</h1>
            <h1 className='text-[30px] font-thin text-purple-900'>The quick brown fox jumps over the lazy dog</h1>
          </div>
        </div>
      </div>
        
  )
}
