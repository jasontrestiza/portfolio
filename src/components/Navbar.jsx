import React from "react"
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {MdDarkMode,MdLightMode} from "react-icons/md"

import {Link} from "react-scroll"

const Navbar = ({navIconClicked,darkMode,handleClick,toggleLight}) => {
    
    const [scroll,setScroll] = React.useState(0)
  
   

    React.useEffect(()=>{
        let lastScroll = 0;
        window.addEventListener('scroll', function(e){
            lastScroll = window.scrollY;
            setScroll(lastScroll)
           
        })
    },[scroll])
  
    return(
        <div className="fixed z-50   w-full h-[80px] flex justify-between md:justify-center items-center  px-8 duration-300" 
            style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818', boxShadow: scroll > 384 ? '0 5px 5px -5px rgba(0, 0, 0, 0.3)' : ''}}
        >
            <div className="fixed md:hidden flex flex-row justify-evenly">
                <MdLightMode 
                    size={25} 
                    className=" cursor-pointer duration-300"
                    style={{color: !darkMode ? 'rgb(250 204 21/40)' : ' rgb(75 85 99 /70)' }}
                    onClick={toggleLight}
                />
                <MdDarkMode 
                    size={25} 
                    className=" cursor-pointer ml-2   duration-300"
                    style={{color: darkMode ? 'rgb(250 204 21/40)' : ' rgb(75 85 99 /70)' }}
                    onClick={toggleLight}
                />

            </div>

            <div className="tracking-wide font-bold">
                <ul className="hidden md:flex">
                    <li>
                        <Link to="hero" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} offset={-20} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} offset={-70} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={-65} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className="z-10 md:hidden">
                {
                    navIconClicked 
                    ? <FaTimes/> 
                    : <FaBars/>
                }
            </div>
            
            <ul style={{backgroundColor: darkMode ? 'rgb(27 36 48 )' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}} className={navIconClicked ? "flex flex-col justify-center items-center  absolute top-0 left-0 h-screen w-full" : "hidden"}>
                <li className="py-4 text-2xl">
                    <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-4 text-2xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-4 text-2xl">
                    <Link onClick={handleClick} to="skills" smooth={true} offset={-90} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-4 text-2xl">
                    <Link onClick={handleClick} to="projects" smooth={true} offset={-80} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-4 text-2xl">
                    <Link onClick={handleClick} to="contact" smooth={true} offset={-75} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            
            <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
                <ul>
                    <li  className="border-[1px] h-[50px] w-[160px] flex justify-between items-center bg-black/10 ml-[-105px] hover:ml-[-10px] duration-300 ">
                        <a className="flex justify-between items-center w-full" href="https://www.linkedin.com/in/jason-trestiza-b69514245/" target="_blank" rel="noopener noreferrer">
                            LinkedIn <FaLinkedin size={30}/> 
                        </a>
                    </li>
                    <li  className="border-[1px] h-[50px] w-[160px] flex justify-between items-center bg-black/10 ml-[-105px] hover:ml-[-10px] duration-300 ">
                        <a className="flex justify-between items-center w-full" href='https://github.com/jasontrestiza' target="_blank" rel="noopener noreferrer">
                            Github<FaGithub size={30}/>  
                        </a>
                    </li>
                    <li  className="border-[1px] h-[50px] w-[160px] flex justify-between items-center bg-black/10 ml-[-105px] hover:ml-[-10px] duration-300 ">
                         <a className="flex justify-between items-center w-full" href="mailto:trestizajason@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email<HiOutlineMail size={30}/>
                        </a>
                           
                    </li>
                    <li  className="border-[1px] h-[50px] w-[160px] flex justify-between items-center bg-black/10 ml-[-105px] hover:ml-[-10px] duration-300 ">
                        <a className="flex justify-between items-center w-full" href="https://drive.google.com/file/d/1xlBAthhHP3B4xwxNgSloQJNd9wvhvPdf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Resume<BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="fixed hidden md:flex flex-row justify-evenly bottom-0 right-3 max-h-[160px]  h-full mx-2  ">
                <MdLightMode 
                    size={25} 
                    className=" cursor-pointer duration-300 mt-[120px] hover:mt-[115px]"
                    style={{
                        color: !darkMode ? 'rgb(250 204 21/40)' : ' rgb(75 85 99 /70)' 
                    }}
                    onClick={toggleLight}
                />
                <MdDarkMode 
                    size={25} 
                    className=" cursor-pointer ml-2 duration-300 mt-[120px] hover:mt-[115px]"
                    style={{
                        color: darkMode ? 'rgb(250 204 21/40)' : ' rgb(75 85 99 /70)'
                    }}
                    onClick={toggleLight}
                />

            </div>
                
        </div>
    )
}

export default Navbar;