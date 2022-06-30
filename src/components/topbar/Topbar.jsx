import './topbar.scss'
import {Person, Mail, MenuOpen} from "@material-ui/icons";
// import {Person, Mail} from "@mui/icons-material";





export default function Topbar({menuOpen, setMenuOpen}) {
   return (
            <div className={"topbar "+(menuOpen && "active")}>
                <div className="wrapper" >
                    <div className="left"> 
                        <a href='#intro' className="logo"> KU</a>
                        <div className="itemContainer">
                                  <Person className='icon'/> 
                                <span>lamsalprabin74@gmail.com</span>
                        </div>
                        <div className="itemContainer">
                                <Mail/> 
                                <span>+977 9846825271</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}> 
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                        </div>
                    </div>
                </div>
            </div>
        );
    
}

