import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewTemplate(props) {

  const location = useLocation()
  const [templates, setTemplates] = useState(location.state)

    // const params = useParams()

    const navigate = useNavigate()
    const url = "http://localhost:8500"

    const deleteTemplate = (id) => {
      navigate(-1)
      axios.delete(`${url}/templates/${id}`)
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
    <div className="w-full h-auto flex flex-row bg-[#f8f3ff] min-h-[400px]">
        <div className="w-full absolute px-[20px] py-[5px] ">
          <div className=" absolute top-5 right-5 hover:bg-purple-700 overflow-hidden hover:w-[150px] hover:h-[200px] hover:rounded-[10px] h-[50px] w-[50px] rounded-[10px] duration-150 ease-linear z-10"
          // onClick={()=>{setToggleDropdown(!toggleDropdown)}}
          >
            <div className="absolute right-0 top-0 cursor-pointer h-[50px] w-[50px] flex items-center justify-center">
              <div className="">
                <div className="h-[4px] w-[4.8px] bg-purple-700 rounded-full my-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-purple-700 rounded-full mb-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-purple-700 rounded-full mb-[5px]"></div>
              </div>
            </div>
            <div className="relative mt-[50px] w-[150px] px-[15px]">
              <button className="w-full flex justify-center py-[5px] bg-white hover:bg-purple-100 rounded-[5px] mb-[5px] mx-[2px] text-center text-red-700 text-[11px]"
              onClick={()=>{deleteTemplate(templates.id)}}>Delete Template</button>
            </div>
 
          </div>

          {/* <div className={`w-[150px] absolute bg-purple-900 duration-150 ease-linear right-7 top-24 rounded-[10px] ${toggleDropdown ? "h-[200px]" : "h-[0px]"}`}></div> */}
        </div>
      <section className="result rounded-[20px] m-[5%] h-[350px] w-[45%] bg-black absolute right-[1%]">
          <iframe title="result" className="iframe" 
          // ref={iframeRef}
           />
        </section>
        <div className="flex-[2] h-full w-full p-[50px]">
          <div className="">
            <h1 className='text-[40px] font-bold'>{templates.template.name}</h1>
            <p className='text-[14px]'>Author: <span className='text-purple-900 pl-[10px]'>{`${templates.template.Author}`}</span></p>
            <div className="w-[70%] pt-[20px] pb-[40px]">
              <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt est qui quidem cum, possimus, minus eaque dolor, nostrum quaerat nulla in consequatur. Accusantium ut corrupti porro magni consequatur qui praesentium!</p>
            </div>
          </div>
          <Link to={`/fontlab/${templates.template.id}`} state={templates.template}>
            <button className='px-[15px] py-[9px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Use Template</button>
          </Link>
          
         
         
        </div>
        <div className="flex-[1.5] flex flex-col h-full bg-purple-200">
          <div className="p-[5%] w-full h-[400px]"></div>
          <div className="">
          <div className="w-full py-[30px] px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Made With</h1>
            {templates.template.madeWith.map((tool, index)=>{
              return (
                <button className="px-[10px] py-[1px] text-purple-900 bg-white rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] border-black border-solid border-[1px] justify-between items-center" key={index}>{tool.name}</button>
              )
            })}

          </div>

          <div className="w-full pb-[30px] px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Compactible Browsers</h1>
            {templates.template.compactiibleBrowsers.map((browser, index)=>{
              return (
                <button className="px-[10px] py-[1px] text-purple-900 bg-white rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] border-black border-solid border-[1px] justify-between items-center" key={index}>{browser.name}</button>
              )
            })}

          </div>

          </div>
        </div>
    </div>
  )
}
