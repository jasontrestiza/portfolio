import React from "react"
// import HTML from "../assets/img/html.png"
// import CSS from "../assets/img/css.png"
// import JS from "../assets/img/javascript.png"
// import ReactLogo from "../assets/img/react.png"
// import Tailwind from "../assets/img/tailwind.png"
// import Github from "../assets/img/github.png"

import {AiFillHtml5,AiFillGithub} from "react-icons/ai" 
import {SiTailwindcss,SiCss3,SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"

const Skills = ({darkMode}) => {
    return (
        <div id="skills" className="  text-white w-full h-screen duration-300" style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}>
            <div data-aos="fade-up" className="flex flex-col justify-center p-4 max-w-[1000px] mx-auto w-full h-full ">
                <div>
                    <p className="inline text-4xl font-bold border-b-2" >&lt;Skills /&gt;</p>
                    <div className=" z-2 w-[150px] pt-[5px] border-b-2  "></div>
                  

                    <p className="py-4 relative">These are the tech stacks I've worked with..</p>
                   
                </div>
                <div className="w-full text-center grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 ">
                    <div className="p-2 hover:scale-110 duration-500  ">
                        <div data-aos="fade-zoom-in" data-aos-delay="500">
                            <AiFillHtml5 size={100} className="  flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">HTML5</p>
                        </div>
                        
                    </div>
                    <div className=" p-2 hover:scale-110 duration-500">
                        <div data-aos="fade-zoom-in" data-aos-delay="600">
                            <SiCss3 size={100} className="  p-2  flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">CSS</p>
                        </div>
                        
                    </div>
                    <div className=" p-2 hover:scale-110 duration-500">
                        <div data-aos="fade-zoom-in" data-aos-delay="700">
                            <SiJavascript size={100} className="  p-2  flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">Javascript</p>
                        </div>
                        
                    </div>
                    <div className=" p-2 hover:scale-110 duration-500">
                        <div data-aos="fade-zoom-in" data-aos-delay="800">
                            <FaReact size={100} className="   flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">React JS</p>
                        </div>
                        
                    </div>
                    <div className=" p-2 hover:scale-110 duration-500">
                        <div data-aos="fade-zoom-in" data-aos-delay="900">
                            <SiTailwindcss size={100} className="   flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">Tailwind CSS</p>
                        </div>
                       
                    </div>
                    <div className=" p-2 hover:scale-110 duration-500">
                        <div data-aos="fade-zoom-in" data-aos-delay="1000">
                            <AiFillGithub size={100} className="   flex justify-center items-center w-full mx-auto"/>
                            <p className="my-4">Github</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;