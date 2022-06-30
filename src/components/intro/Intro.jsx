import "./intro.scss";
import { useEffect, useRef } from 'react';
import {init} from 'ityped'

export default function Intro() {
    const textRef = useRef()

    useEffect(()=>{ 
        init(textRef.current,{ 
            showCursor:false,
            backDelay:1500,
            backSpeed:70,
            strings:["Flutter Developer","MERN Developer","Machine Learning Enthusiast",]
        })
    },[])
        return (
            <div className="intro" id="intro">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/portfolio_pic.jpg" alt="" />
                    </div>
                </div>
                <div className="right">
                <div className="wrapper"> 
                <h2>Hi,There, I'm</h2>
                <h1>Prabin Lamsal</h1>
                <h3>-  <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio"> 
                <img src="assets/down.png" alt="" />
                </a>
                </div>
            </div>
        )
    
}

     