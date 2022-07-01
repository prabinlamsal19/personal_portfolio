import "./testimonials.scss"
import { Component } from 'react';

export default function Testimonials() {
const data=[ 
    {
        id:1,
        name:"Gaurav Rizal",
        title:"President of Urlabari",
        img:"assets/travel.jpg",
        icon:"assets/twitter.png",
        desc:"Kola kinna jam. Lorem ipsum lorem ipsum lorem"

    },
    {
        id:2,
        name:"Manish Baral",
        title:"CEO of Baral Oats Company",
        img:"assets/travel.jpg",
        icon:"assets/linkedin.png",
        desc:"Abadekhi hami Oootttt kham.Lorem ipsum lorem ipsum lorem ipsum.",
        featured:true
    },
    {
        id:3,
        name:"Sumit Khanal",
        title:"Anime Protagonist",
        img:"assets/travel.jpg",
        icon:"assets/linkedin.png",
        desc:"Yo ta aajha kam spin deko. lorem ipsum lorem ipsum lorem"
    },
    // {
    //     id:4,
    //     name:"Rustam Pradhananga",
    //     title:"Civil Guy",
    //     img:"assets/travel.jpg",
    //     icon:"assets/youtube.png",
    //     desc:"insta ma photo upload garxu.Lorem ipsum lorem ipsum lorem"
    // },
]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>( 
                    <div className={d.featured ? "card featured": "card"}>
                    <div className="top"> 
                    <img src="assets/right-arrow.png" className="left" alt="" />
                    <img className="user" src={d.img} alt="" />
                    <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>

                ))}
                
            </div>
        </div>
    )
}
