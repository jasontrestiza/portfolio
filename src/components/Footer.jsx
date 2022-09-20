import React from "react"
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"

const Footer = ({darkMode}) => {
    return(
        <div className=" flex flex-col justify-center items-center text-lg font-bold w-full py-8 h-full duration-300" 
            style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}
        >
            
            <div className="flex justify-evenly items-center w-full max-w-[300px]">
                <div>
                    <a href="https://github.com/jasontrestiza" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center rounded-full px-2 py-1 mx-1 text-sm hover:scale-105 duration-500"
                    style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                    >
                        <AiFillGithub size={20} className=""/>
                        <p>trestizajason</p>
                    </a>
                    
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jason-trestiza-b69514245/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center rounded-full px-2 py-1 mx-1 text-sm hover:scale-105 duration-500"
                    style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                    >
                        <AiFillLinkedin size={20}/>
                        <p>trestizajason</p>
                    </a>
                    
                </div>
            </div>

            <div className="text-sm p-4">
                <p> &copy; 2022 Jason Trestiza</p>
            </div>
          
        </div>
    )
}

export default Footer;