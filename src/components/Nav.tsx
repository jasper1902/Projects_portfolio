import { GiHamburgerMenu } from "react-icons/gi";
import Theme from "./Theme";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleToggleNav = () => {
        setNav(!nav)
    }
    return (
        <>

            <nav className='bg-secondary'>
                <div className="flex justify-around items-center contianer mx-auto py-4 font-bold lg:text-2xl md:text-xl text-base lg:px-8 px-4 fixed top-0 left-0 right-0 z-10 bg-opacity-80 bg-secondary backdrop-blur-md">
                    <div>Logo</div>

                    <ul className='sm:flex hidden'>
                        <li className="cursor-pointer hover:bg-secondary p-4 rounded-md"><Link smooth={true} duration={500} to="home">Projects</Link></li>
                        <li className="cursor-pointer hover:bg-secondary p-4 rounded-md"><Link smooth={true} duration={500} to="about">About Me</Link></li>
                        <li className="cursor-pointer hover:bg-secondary p-4 rounded-md"><Link smooth={true} duration={500} to="contact">Contact</Link></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <div className="md:flex hidden"><Theme /></div>
                        <GiHamburgerMenu className="md:hidden cursor-pointer" onClick={handleToggleNav} draggable />
                    </div>
                </div>
            </nav>


            {nav && <ul className='md:hidden gap-8 flex flex-col px-10 font-bold mt-14 fixed top-0 left-0 right-0 z-10 bg-opacity-80 bg-secondary backdrop-blur-md' draggable>
                <li className="p-4 border-b border-gray-700 cursor-pointer"><Link smooth={true} duration={500} to="home">Projects</Link></li>
                <li className="p-4 border-b border-gray-700 cursor-pointer"><Link smooth={true} duration={500} to="about">About Me</Link></li>
                <li className="p-4 border-b border-gray-700 cursor-pointer"><Link smooth={true} duration={500} to="contact">Contact</Link></li>
                <li className="mb-8"><Theme /></li>
            </ul>}
        </>
    )
}

export default Nav