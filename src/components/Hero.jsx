import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-scroll"

const Hero = ({darkMode}) => {
    return(
        <div  name="hero" className="w-full h-screen duration-300" style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}>
            <div data-aos="fade-right" className="max-w-[1000px] h-full flex flex-col justify-center  mx-auto px-8">
                <p className="text-lg ">Hi, my name is </p>
                <h1 className="text-4xl sm:text-6xl font-bold">Jason Trestiza</h1>
                <h2 className="text-4xl sm:text-6xl font-bold ">I'm an Aspiring Front-End Developer</h2>
                <p className="text-md py-4 max-w-[600px]">
                    
                </p>
                <div className=""  >
                    <Link to="projects" smooth={true} offset={-70} duration={500} >
                        <button style={{borderColor:  darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#A5C9CA' : '#181818'}}
                                className="group border-2 flex items-center text-center px-4 py-2 hover:ml-1 duration-300 font-bold tracking-wide">
                                    View Projects
                                    <span className="group-hover:rotate-90 duration-300">
                                        <HiArrowNarrowRight className="ml-4"/>
                                    </span>
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero;