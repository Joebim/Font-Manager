import React, { useState, useEffect } from 'react'
import { Viewbutton } from '../global_components/Viewbutton'
import axios from 'axios'

import TemplateAddModal from '../features/templates/TemplateAddModal'

import { useSelector, useDispatch } from 'react-redux'
import { allTemplates, getTemplateStatus, getTemplateError, fetchTemplates } from '../features/templates/templateSlice'
import TemplateList from '../features/templates/TemplateList'



export default function FontTemplateStore() {

    const dispatch = useDispatch()
    const templates = useSelector(allTemplates)
    const templatesStatus = useSelector(getTemplateStatus)
    const error = useSelector(getTemplateError)

    const [clicked, setClicked] = useState()
    const [open, setOpen] = useState(false)
    // const [templates, setTemplates] = useState([])

    // const [allGoogleFonts, setAllGoogleFonts] = useState([])


    console.log('templates', templates)

    useEffect(() => {
        if (templatesStatus === 'idle') {
            dispatch(fetchTemplates())
        }

    }, [templatesStatus, dispatch])

    // console.log('fonts', fonts)

    console.log('templates', templates)

    // const firstNItems = (n, numbers) =>{
    //     if (n >= 0) {
    //         return numbers.slice(0, n);
    //     }
    //     return []
    // }

    let content

    if (templatesStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (templatesStatus === 'succeeded') {
        content = templates.map((template, index) => <TemplateList index={index} key={template.name + index} template={template} />)
    } else if (templatesStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <>
            <div className="w-full p-[30px] bg-[url('./assets/images/fontBgThree.png')] bg-cover">
                <button type="button" className="px-[20px] py-[5px] text-purple-900 bg-white rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center"
                    onClick={() => setOpen(true)}>Add Template</button>
            </div>
            <div className="w-full px-[30px] sm:px-[40px] py-[40px] bg-[#f8f3ff] min-h-[400px] max-h-auto grid grid-cols-2 sm:grid-cols-5 gap-[20px] sm:gap-[50px]">

                {content}

            </div>


            <TemplateAddModal open={open} setOpen={setOpen} />
        </>

    )
}
