import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FontLoad() {
    const [fonts, setFonts] = useState([])

  const url = "http://localhost:8500"

  useEffect(() => {
        axios.get(`${url}/fonts`)
        .then((res)=> {
            setFonts(res.data)
        }).catch((err)=>{
            console.log('err', err)
        })

    }, [])


     useEffect(() => {
     fonts.forEach((font, index) => {

        var fontss = new FontFace(font.font.family, `url(${font.font.files.regular})`, {
            style: 'normal', weight: '400'
        });

        //   console.log('font', fonts[i].font.family)
        
        // don't wait for the render tree, initiate an immediate fetch!
        fontss.load().then(function(loaded_face) {
            // apply the font (which may re-render text and cause a page reflow)
            // after the font has finished downloading 
            var content = document.getElementById(`text${index}`);
            document.fonts.add(loaded_face);
            document.body.style.fontFamily = `${font.font.family}, serif`;

            // console.log("document",document.body.style.fontFamily)
        
            // OR... by default the content is hidden,
            // and it's rendered after the font is available
        
            content.style.visibility = "visible";
            content.style.fontFamily = `${font.font.family}`
     
            // OR... apply your own render strategy here...
        }).catch(function(err) {
            console.log('error', err)
        });

        
      })
 }, [fonts])

}