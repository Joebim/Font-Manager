import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { allFonts, getFontStatus, fetchFonts } from './fontSlice'

export default function FontLoad() {

    const dispatch = useDispatch()
    const fonts = useSelector(allFonts)
    const fontsStatus = useSelector(getFontStatus)

    useEffect(() => {
        fonts.forEach((font, index) => {
          if (font.files && font.files.regular) { // check if font has regular file
            var fontss = new FontFace(font.family, `url(${font.files.regular})`, {
              style: 'normal',
              weight: '400'
            });
        
            // don't wait for the render tree, initiate an immediate fetch!
            fontss.load().then(function(loaded_face) {
              // apply the font (which may re-render text and cause a page reflow)
              // after the font has finished downloading 
            
              document.fonts.add(loaded_face);
              document.body.style.fontFamily = `${font.family}, serif`;
        
              // OR... by default the content is hidden,
              // and it's rendered after the font is available
        
              // var content = document.getElementById(`text${index}`);
              // content.style.visibility = "visible";
              // content.style.fontFamily = `${font.family}`
            }).catch(function(err) {
              console.log(`Failed to load ${font.family} regular font`, err);
            });
          } else {
            console.log(`${font.family} font does not have a regular file`);
          }
        });
      }, [fonts]);

}