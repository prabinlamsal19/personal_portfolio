import "./portfolio.scss"
import {useState,useEffect} from "react";
import { Component } from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio,webPortfolio, mobilePortfolio , designPortfolio , contentPortfolio } from "../../data";

export default function Portfolio() {

    const[selected,setSelected]=useState("featured");
    const[data,setdata]=useState([]);

    const list= [ 
       {
        id: "featured",
        title:"Featured",
        },
        {
            id: "web",
            title:"Web App",
        },
        {
            id: "mobile",
            title:"Mobile App",
        },
        {
            id: "design",
            title:"Design",
        },
        {
            id: "content",
            title:"Content",
        },
            

    ]
    useEffect( 
        ()=>{ 
            switch(selected){ 
                case "featured": 
                    setdata(featuredPortfolio);
                    break;
                case "web": 
                    setdata(webPortfolio);
                    break;
                case "mobile": 
                    setdata(mobilePortfolio);
                    break;
                case "design": 
                    setdata(designPortfolio);
                    break;
                case "content": 
                    setdata(contentPortfolio);
                    break;
                default: 
                    setdata(featuredPortfolio);
            }
        },[selected]                 //whenever "selected" is changed, useEffect is called
    )
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map(item=>( 
                   <PortfolioList title={item.title} 
                   active={selected === item.id} 
                   setSelected={setSelected} 
                   id={item.id}
                   />
               ))} 
            </ul>
            <div className="container">
                {data.map(d=>( 

               
                <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>

                </div>
                 ))}
                
            </div>
            
        </div>
    )
}
