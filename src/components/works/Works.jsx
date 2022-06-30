import "./work.scss"
import { Component } from 'react';
import React, { useEffect, useState } from "react";


export default function Works() {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data=[ 
        { 
            id: "1",
            title: "Web Design",
            desc: "Lorem Ipsum is the dummy description. Have fun. Chillax.",
            icon: "assets/mobile.png",
            img: "assets/travel.jpg"
             },
        { 
            id: "2",
            title: "Mobile Application",
            desc: "Lorem Ipsum is the dummy description. Have fun. Chillax.",
            icon: "assets/globe.png",
            img: "assets/travel.jpg"
            },
        { 
            id: "3",
            title: "Branding",
            desc: "Lorem Ipsum is the dummy description. Have fun. Chillax.",
            icon: "assets/writing.png",
            img: "assets/travel.jpg"
            },
            
    ];

    const handleClick= (way) => { 
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide< data.length-1 ? currentSlide+1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>      
               { data.map(d=>( 
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc} </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/travel.jpg" alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>      
        </div>
    )
}
