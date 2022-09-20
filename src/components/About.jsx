import React from "react"

const About = ({darkMode}) => {
    return(
        <div name="about" className=" w-full h-screen duration-300" style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}>
            {/* <div className="flex flex-col justify-center items-center max-w-[1000px] w-full h-full mx-auto p-4">
                <div className="grid sm:grid-cols-2 w-full " data-aos="fade-up">

                        <p className="inline relative text-4xl  sm:border-r-[1px] font-bold  z-50">&lt;About /&gt;</p>
                        <div  style={{backgroundColor: darkMode ? 'rgb(0 0 0)' : '#A5C9CA'}} className="top-[11%] z-2 sm:top-[14%] absolute mx-8 w-[140px] h-[18px]  "></div>
                        <div style={{backgroundColor: darkMode ? 'rgb(0 0 0/0.5)' : '#a5c9cab9'}} className=" z-1 top-[13%] sm:top-[20%] absolute mx-2 w-[140px] h-[15px] "></div>
                        <p className="px-4 text-2xl font-bold">Reach me out!</p>
                        <p className="py-4 sm:border-r-[1px]">I am a self-taught front-end developer and I love building website. I am continuing to develop my skills when it comes to front-end development especially in ReactJS.
                        {/* seeking an opportunity to show my learnings when it comes to front-end development.  */}
                        {/* </p>
                        <div className="p-4">
                            <p>Facebook</p>
                            <p>Instagram</p>
                            
                        </div>
                    
                </div> */}
            {/* </div> */} 

            <div className="flex flex-col justify-center items-center w-full h-full"  >
                <div data-aos="fade-up">
                    <div className="max-w-[1000px] grid sm:grid-cols-2 w-full gap-8 p-4">
                        <div className="">
                            <p className="inline text-4xl font-bold border-b-2">&lt;About /&gt;</p>
                            <div className=" z-2 w-[163px] pt-[5px] border-b-2  "></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 p-4">
                        <div className="text-4xl  font-bold">
                            <p>Hi. I'm Jason, nice to meet you!</p>
                        </div>
                        <div>
                            <p className="text-justify">
                                I am a self-taught front-end developer and I enjoy building website from start to finish. 
                                It's my passion to develop websites with the knowledge and skills that I have.
                            </p>
                            <p className="pt-2 text-justify">
                                I still have a lot to learn so I constantly developing my skills and knowledge when it comes to front-end development so I can come up with the best practices for developing and building a project.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[50%] lg:hidden flex justify-center items-center w-full mx-auto mt-6">
                        <a href="https://drive.google.com/file/d/1ERhG1BRAEZov6yoOOsF-fswpRE3k1RvR/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer" 
                            style={{borderColor:  darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#A5C9CA' : '#181818'}}
                            className="border-2 text-center px-4 py-2 hover:scale-105 duration-300 font-bold tracking-wide "
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default About;