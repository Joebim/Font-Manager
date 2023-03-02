import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ViewFont(props) {

    // const params = useParams()
    const location = useLocation()
    // const [allFonts, setAllFonts] = useState([])
    const [fonts, setFonts] = useState(location.state)
    // const [toggleDropdown, setToggleDropdown] = useState(false)

    const navigate = useNavigate()
    const url = "http://localhost:8500"
    
  

    // useEffect(()=>{
      
    //   axios.get(`${url}/fonts`)
    //   .then((res)=> {
    //       setAllFonts(res.data)
    //   }).catch((err)=>{
    //       console.log('err', err)
    //   })
    // },[])
   
 
  console.log('fontData', fonts)
    
 const deleteFont = (id) => { 
  navigate(-1)
    axios.delete(`${url}/fonts/${id}`)
    .then((res)=> {
      console.log('res', res.data )
        // setFonts(
        //     allFonts.filter((font)=> font.id !== id)
        // )
       
    }).catch((err)=>{
        console.log('err', err)
    })
 }



  return (
      <div className="w-full">
        <div className="w-full absolute px-[20px] py-[5px] ">
          <div className=" absolute top-7 right-7 hover:bg-purple-100 overflow-hidden hover:w-[150px] hover:h-[200px] hover:rounded-[10px] h-[50px] w-[50px] rounded-[10px] duration-150 ease-linear"
          // onClick={()=>{setToggleDropdown(!toggleDropdown)}}
          >
            <div className="absolute right-0 top-0 cursor-pointer h-[50px] w-[50px] flex items-center justify-center">
              <div className="">
                <div className="h-[4px] w-[4.8px] bg-purple-100 rounded-full my-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-purple-100 rounded-full mb-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-purple-100 rounded-full mb-[5px]"></div>
              </div>
            </div>
            <div className="relative mt-[50px] w-[150px] px-[15px]">
              <button className="w-full flex justify-center py-[5px] hover:bg-purple-400 bg-white rounded-[5px] mb-[5px] mx-[2px] text-center text-red-700 text-[11px]"
              onClick={()=>{deleteFont(fonts.id)}}>Delete Font</button>
            </div>
 
          </div>

          {/* <div className={`w-[150px] absolute bg-purple-900 duration-150 ease-linear right-7 top-24 rounded-[10px] ${toggleDropdown ? "h-[200px]" : "h-[0px]"}`}></div> */}
        </div>
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
            <h1 className='text-[30px] font-bold text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-semibold text-purple-900'>Lorem 2</h1>
            <h1 className='text-[30px] font-semibold text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-medium text-purple-900'>Lorem 3</h1>
            <h1 className='text-[30px] font-medium text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-normal text-purple-900'>Lorem 4</h1>
            <h1 className='text-[30px] font-normal text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-light text-purple-900'>Lorem 5</h1>
            <h1 className='text-[30px] font-light text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-extralight text-purple-900'>Lorem 6</h1>
            <h1 className='text-[30px] font-extralight text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="w-full h-[100px] flex flex-row justify-between">
            <h1 className='text-[30px] font-thin text-purple-900'>Lorem 7</h1>
            <h1 className='text-[30px] font-thin text-purple-900' style={{fontFamily:`${fonts.font.family}`,}}>The quick brown fox jumps over the lazy dog</h1>
          </div>
        </div>
      </div>
        
  )
}
