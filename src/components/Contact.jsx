import React from "react"
import {FaUserAlt} from "react-icons/fa"
// import {AiOutlineMessage} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

const Contact = ({darkMode}) => {
    return(
        <div name="contact" className="w-full h-screen duration-300 shadow-xl" style={{backgroundColor: darkMode ? '#1b2430' : '#DDDDDD', color: darkMode ? '#A5C9CA' : '#181818'}}>
            <div data-aos="fade-up" className="flex flex-col max-w-[1000px] w-full h-full p-4 mx-auto">
                <div className="">
                    <p className="inline text-4xl font-bold border-b-2">&lt;ContactMe /&gt;</p>
                    <div className=" z-2 w-[248px] pt-[5px] border-b-2  "></div>
                    <p className="py-4">Drop me some message or email me @ trestizajason@gmail.com</p>
                </div> 
                <form method="POST" action="https://getform.io/f/689c2d3c-73f6-4228-acc8-f54a843c6b48" className="flex flex-col justify-center items-center max-w-[500px] max-h-[75%] w-full mx-auto sm:h-full">
                    <div className="flex flex-col justify-center items-center w-full relative">
                        <FaUserAlt className="absolute left-0 text-black/40  m-4 text-md " size={20}/>
                        <input className="p-4 px-11 pt-4 bg-white/80 w-full my-2 text-black/80" type="text" name="name" placeholder="Your name" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full relative">
                        <MdEmail className="absolute left-0 text-black/40  m-4 text-md mt-5" size={20}/>
                        <input className="p-4 px-11 pt-4  bg-white/80 w-full my-2 text-black/80" type="email" name="email" placeholder="Your Email" />
                    </div>
                    
                    <textarea className="p-4 bg-white/80  w-full my-2 text-black/80" name="message" rows="10" placeholder="Your message is much appreciated."></textarea>
                    <button className="py-2 px-4 my-4 border-2  tracking-wide font-bold hover:scale-105 duration-500">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;