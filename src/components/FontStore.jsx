import React, {useState, useEffect} from 'react'
import { Viewbutton } from './Viewbutton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Modal from './Modal'

export default function FontStore() {

    const [clicked, setClicked] = useState()
    const [fonts, setFonts] = useState([])
    const [open, setOpen] = useState(false)
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

    // console.log('fonts', fonts)


    const firstNItems = (n, numbers) =>{
        if (n >= 0) {
            return numbers.slice(0, n);
        }
        return []
    }
    

  return (
    <>
    <div className="w-full p-[30px] bg-[url('./assets/images/fontBgThree.png')] bg-cover">
            <button type="button" className="px-[20px] py-[5px] text-purple-900 bg-white rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center" 
            onClick={() => setOpen(true)}>Add Fonts</button>
    </div>
    <div className="w-full p-[40px] bg-[#f8f3ff] min-h-[400px] max-h-auto grid grid-cols-5 gap-[50px]">
        {fonts.map((font, index)=> {
            return(
                <div className="card-container h-[250px] w-[200px] p-[10px]" key={index+font.font.family}>
                    {/* {console.log('fonts', fonts)} */}
                <div className={`glass-card flex h-full w-full bg-white border-solid border-[1px] justify-center items-end border-[#ffffff2e] rounded-[15px] absolute transition-all duration-[0.4s] ease-linear ${clicked == index ? "flip" : ""}`}>
          
                <div className={`front absolute w-[200px] p-[20px] flex flex-row justify-between items-center  ${clicked == index ? "flip" : ""}`}
                >
                    <p className=' font-normal text-purple-600 text-[15px]'>{font.font.family}</p>
                    <Viewbutton setClicked={setClicked} clicked= {clicked} index={index}/>
                </div>
                <div className={`back absolute h-[250px] w-full flex flex-col justify-between items-center p-[20px] ${clicked == index ? "flip" : ""}`}>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p className=' font-normal text-purple-600 text-[15px]'>{font.font.family}</p>
                        <div className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center">
                            {font.font.category}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full border-solid border-t-[1px] border-[#deadff] my-[5px]"></div>
                        <div className="">
                            {font.font.variants.map((weight , index)=> {
                                return(
                                    <button className="px-[10px] py-[1px] text-white bg-black rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]" key={index+weight}>{weight}</button>
                                )
                            })}
                        </div>
                        <div className="w-full border-solid border-b-[1px] border-[#deadff] my-[5px]"></div>
                    </div>
                    
                    
                    <div className="w-full flex justify-end">
                        <Viewbutton setClicked={setClicked} clicked= {clicked}/>
                    </div>
                    
                </div>
        
                
            </div>
        </div>
            )
        })}
    </div>


<Modal open={open} setOpen={setOpen} allGoogleFonts= {allGoogleFonts} fonts={fonts}/>
    </>
    
  )
}
