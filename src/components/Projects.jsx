import React from "react"
import Covid19 from "../assets/img/covid19-tracker.PNG"
import WeatherApp from "../assets/img/weather-app.PNG"
import Netflix from "../assets/img/netflix-clone.PNG"
import Quizzical from "../assets/img/quizzical.PNG"

const Projects = ({darkMode}) => {
    return(
        <div  name="projects" className=" w-full duration-300" style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}>
            <div data-aos="fade-up" className="flex flex-col justify-center max-w-[1000px] w-full h-full mx-auto p-4">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold border-b-2">&lt;Projects /&gt;</p>
                    <div className=" z-2 w-[200px] pt-[5px] border-b-2  "></div>
                    <p className="py-4">Check out some of my works..</p>
                </div>

                {/* Card section */}
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div className="rounded-t-xl w-full h-full flex flex-col justify-center items-center mx-auto shadow-xl hover:scale-105 duration-500">
                        <div 
                            style={{backgroundImage: `url(${Covid19})`}} 
                            className="bg-top bg-no-repeat bg-cover w-full h-[150px] sm:rounded-t-xl "
                        >
                        </div>
                        <div className=" duration-1000 w-full flex flex-col p-4 sm:h-full"
                            style={{backgroundColor: darkMode ? '#131a22' : '#bcd1d4'}}
                        >
                            <div className="text-[8px] flex justify-center font-bold" >
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">HTML</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">TailwindCSS</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">ReactJS</p>
                            </div>
                            <div className="my-2 h-full">
                                <p className=" text-lg font-bold tracking-wide border-b-[1px] inline">COVID-19 Tracker</p>
                                <p className="text-xs mt-2 text-justify pl-2">
                                    <span className="font-bold text-sm">//COVID-19 Tracker </span>allows you to track the latest COVID-19 statistics globally or in a specific country. 
                                </p>
                                <p className="text-xs mt-2 text-justify pl-2">
                                    This web application is made with ReactJS and fetching some API with the help of axios.
                                </p>
                            </div>
                            <div className="w-full flex justify-end text-xs pb-2">
                                <a href="https://jasontrestiza.github.io/covid19-tracker/" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Demo
                                </a>
                                <a href="https://github.com/jasontrestiza/covid19-tracker" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-t-xl w-full h-full flex flex-col justify-center items-center mx-auto shadow-xl hover:scale-105 duration-500">
                        <div 
                            style={{backgroundImage: `url(${WeatherApp})`}} 
                            className="  bg-center bg-no-repeat bg-cover w-full h-[150px] sm:rounded-t-xl "
                        >
                        </div>
                        <div className=" duration-1000 w-full flex flex-col p-4 sm:h-full"
                            style={{backgroundColor: darkMode ? '#131a22' : '#bcd1d4'}}
                        >
                            <div className="text-[8px] flex justify-center font-bold" >
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">HTML</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">TailwindCSS</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">ReactJS</p>
                            </div>
                            <div className="my-2 h-full">
                                <p className=" text-lg font-bold tracking-wide border-b-[1px] inline">Weather Now</p>
                                <p className="text-xs mt-2">
                                    Weather Now is a basic Weather App made with ReactJS and fetching OpenWeatherMap API using axios. 
                                    This web application allows you to search the current weather of a specific place.
                                </p>
                            </div>
                            <div className="w-full flex justify-end text-xs pb-2">
                                <a href="https://jasontrestiza.github.io/weather-app/" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Demo
                                </a>
                                <a href="https://github.com/jasontrestiza/weather-app" target="_blank" rel="noopener noreferrer" className="py-1  mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-t-xl w-full h-full flex flex-col justify-center items-center mx-auto shadow-xl hover:scale-105 duration-500">
                        <div 
                            style={{backgroundImage: `url(${Netflix})`}} 
                            className="  bg-top bg-no-repeat bg-cover w-full h-[150px] sm:rounded-t-xl "
                        >
                        </div>
                        <div className=" duration-1000 w-full flex flex-col p-4 sm:h-full "
                            style={{backgroundColor: darkMode ? '#131a22' : '#bcd1d4'}}
                        >
                            <div className="text-[8px] flex justify-center font-bold" >
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">HTML</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">TailwindCSS</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">ReactJS</p>
                                <p className="border-2 mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">Firebase</p>
                            </div>
                            <div className="my-2 h-full">
                                <p className=" text-lg font-bold tracking-wide border-b-[1px] inline">Netflix Clone</p>
                                <p className="text-xs mt-2">
                                    Netflix Clone is a web application that allow the users to explore movies. It has also a Sign up and Login feature and the user can also save their favorite movies in their account. This web app is made with ReactJS, fetching API, and Firebase.
                                </p>
                            </div>
                            <div className="w-full flex justify-end text-xs pb-2">
                                <a href="https://netflix-clone-react-53d11.web.app/" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Demo
                                </a>
                                <a href="https://github.com/jasontrestiza/netflix-clone" target="_blank" rel="noopener noreferrer" className="py-1  mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-t-xl w-full h-full flex flex-col justify-center items-center mx-auto shadow-xl hover:scale-105 duration-500">
                        <div 
                            style={{backgroundImage: `url(${Quizzical})`}} 
                            className="  bg-center bg-no-repeat bg-cover w-full h-[150px] sm:rounded-t-xl "
                        >
                        </div>
                        <div className=" duration-1000 w-full flex flex-col p-4  sm:h-full"
                            style={{backgroundColor: darkMode ? '#131a22' : '#bcd1d4'}}
                        >
                            <div className="text-[8px] flex justify-center font-bold" >
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">HTML</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">CSS</p>
                                <p className="border-2  mx-1 px-2 py-1 rounded-b-lg rounded-tr-lg">ReactJS</p>
                            </div>
                            <div className="my-2 h-full">
                                <p className=" text-lg font-bold tracking-wide border-b-[1px] inline">Quizzical</p>
                                <p className="text-xs mt-2">
                                    Quizzical is a web-based basic quiz game made with ReactJS and fetching API from opentdb. 
                                    This is the solo project task I accomplished when learning ReactJS from freecodecamp.
                                </p>
                            </div>
                            <div className="w-full flex justify-end text-xs pb-2">
                                <a href="https://jasontrestiza.github.io/quizzical/" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Demo
                                </a>
                                <a href="https://github.com/jasontrestiza/quizzical" target="_blank" rel="noopener noreferrer" className="py-1 mt-4 px-4 mx-1 font-bold"
                                style={{backgroundColor: darkMode ? '#A5C9CA' : '#181818', color: darkMode ? '#181818' : '#A5C9CA'}} 
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;