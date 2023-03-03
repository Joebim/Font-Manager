import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allFonts, getFontStatus, getFontError, fetchFonts } from '../features/fonts/fontSlice'
import { Viewbutton } from '../global_components/Viewbutton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FontModal from '../features/fonts/FontModal'

import FontList from '../features/fonts/FontList'


// import opentype from 'opentype.js'
// const opentype = require('opentype.js');
// import { load } from 'opentype.js'

export default function FontStore() {

    const dispatch = useDispatch()
    const fonts = useSelector(allFonts)
    const fontsStatus = useSelector(getFontStatus)
    const error = useSelector(getFontError)

    const [clicked, setClicked] = useState() 
    const [open, setOpen] = useState(false)
    // const [fonts, setFonts] = useState([])
    const [allGoogleFonts, setAllGoogleFonts] = useState([])


 

    useEffect(() => {
        if(fontsStatus === 'idle') {
            dispatch(fetchFonts())
        }


        axios.get(`${process.env.REACT_APP_GOOGLEAPI_URL}key=${process.env.REACT_APP_GOOGLEAPI_KEY}`, {
            sort: 'alpha',
        })
        .then(res => {
            // console.log('res', res)
            setAllGoogleFonts(res.data.items)
        }).catch(err => {
            console.log('err', err)
        })
    }, [fontsStatus, dispatch])


       
  
    // const firstNItems = (n, numbers) =>{
    //     if (n >= 0) {
    //         return numbers.slice(0, n);
    //     }
    //     return []
    // }

    let content

    if(fontsStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if(fontsStatus === 'succeeded') {
        content = fonts.map((font, index) => <FontList index={index} key={index+font.family} font={font}/>)
    } else if(fontsStatus === 'failed') {
        content = <div>{error}</div>  
    }
    

  return (
    <>
    <div className="w-full p-[30px] bg-[url('./assets/images/fontBgThree.png')] bg-cover">
    {/* <div className="w-full p-[30px] bg-purple-200"> */}

        <button type="button" className="px-[20px] py-[5px] text-purple-900 bg-white rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center" 
        onClick={() => setOpen(true)}>Add Font</button>
    </div>
    <div className="w-full p-[40px] bg-[#f8f3ff] min-h-[400px] max-h-auto grid grid-cols-5 gap-[50px]">
       {content}
    </div>


<FontModal open={open} setOpen={setOpen} allGoogleFonts= {allGoogleFonts} fonts={fonts}/>
    </>
    
  )
}
