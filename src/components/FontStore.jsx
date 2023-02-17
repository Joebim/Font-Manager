import React, {useState, useEffect} from 'react'
import { Viewbutton } from '../global_components/Viewbutton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FontModal from '../global_components/FontModal'
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";



// import opentype from 'opentype.js'
// const opentype = require('opentype.js');
// import { load } from 'opentype.js'

export default function FontStore() {

    const [clicked, setClicked] = useState() 
    const [open, setOpen] = useState(false)
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

    // console.log('fonts', fonts)
       
  
    // const firstNItems = (n, numbers) =>{
    //     if (n >= 0) {
    //         return numbers.slice(0, n);
    //     }
    //     return []
    // }
    

  return (
    <>
    <div className="w-full p-[30px] bg-[url('./assets/images/fontBgThree.png')] bg-cover">
        <button type="button" className="px-[20px] py-[5px] text-purple-900 bg-white rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center" 
        onClick={() => setOpen(true)}>Add Font</button>
    </div>
    <div className="w-full p-[40px] bg-[#f8f3ff] min-h-[400px] max-h-auto grid grid-cols-5 gap-[50px]">
        {fonts.map((font, index)=> {
            return(
                <Link to={`/fontstore/${index}`} state={font} key={index+font.font.family}>
                <div className="h-[200px] w-[190px] p-[10px]" >
                    <div className="h-full w-full bg-purple-200 flex flex-col rounded-[10px]">
                        <div className="flex-[2] flex justify-end w-full">
                            <div className="h-full w-[20%] bg-purple-900 rounded-tr-[10px] rounded-bl-[20px] flex justify-center items-center">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                <HiHeart/>
                            </IconContext.Provider>
                            </div>
                        </div>
                        <div className="flex-[6] flex justify-center items-start text-[70px]">
                            <h1 id={`text${index}`} className='text-[50px]'>Aa</h1>
                        </div>
                        <div className="flex-[2] bg-purple-400 rounded-b-[10px] flex justify-center items-center">
                            <h1 className='text-white text-[12px]'>{font.font.family}</h1>
                        </div>
                    </div>
                </div>
                </Link>
                
            )
        })}
    </div>


<FontModal open={open} setOpen={setOpen} allGoogleFonts= {allGoogleFonts} fonts={fonts}/>
    </>
    
  )
}
