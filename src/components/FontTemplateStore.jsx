import React, {useState, useEffect} from 'react'
import { Viewbutton } from '../global_components/Viewbutton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TemplateModal from '../global_components/TemplateModel'
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import { CgCarousel } from "react-icons/cg";




export default function FontTemplateStore() {

    const [clicked, setClicked] = useState() 
    const [open, setOpen] = useState(false)
    const [templates, setTemplates] = useState([])
  
    // const [allGoogleFonts, setAllGoogleFonts] = useState([])


    const url = "http://localhost:8500"

    useEffect(() => {
        axios.get(`${url}/templates`)
        .then((res)=> {
            setTemplates(res.data)
        }).catch((err)=>{
            console.log('err', err)
        })


        // axios.get(`${process.env.REACT_APP_GOOGLEAPI_URL}key=${process.env.REACT_APP_GOOGLEAPI_KEY}`, {
        //     sort: 'alpha',
        // })
        // .then(res => {
        //     // console.log('res', res)
        //     setAllGoogleFonts(res.data.items)
        // }).catch(err => {
        //     console.log('err', err)
        // })
    }, [])

    // console.log('fonts', fonts)

    console.log('templates', templates)

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
            onClick={() => setOpen(true)}>Add Template</button>
    </div>
    <div className="w-full p-[40px] bg-[#f8f3ff] min-h-[400px] max-h-auto grid grid-cols-5 gap-[50px]">
        
        {templates.map((template, index)=>{
            return (
                <Link to={`/fonttemplatestore/${index}`} key={template.template.name+index} state={template}>
                    <div className="h-[300px] w-[200px] bg-[#e3c7ff] rounded-[18px] p-[15px] flex flex-col justify-between">
                <div className="w-full flex justify-end">
                <div className="h-[32px] w-[32px] bg-white rounded-[5px] flex justify-center items-center">
                <IconContext.Provider value={{ color: "#500062", className: "global-class-name" }}>
                    <HiHeart/>
                </IconContext.Provider>
                
                </div>
                </div>

                <div className="h-[60px] w-full rounded-[10px] bg-white flex flex-row justify-between px-[15px] items-center">
                    <div className="">
                        <h1 className='text-purple-900 text-[11px] font-bold'>{template.template.name}</h1>
                    </div>
                    <div className="h-[28px] w-[28px] bg-purple-900 rounded-[5px] flex justify-center items-center">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <CgCarousel/>
                    </IconContext.Provider>
                    </div>
                </div>
                </div>
                </Link>
                
            )
        })}
        
    </div>


<TemplateModal open={open} setOpen={setOpen}/>
    </>
    
  )
}
