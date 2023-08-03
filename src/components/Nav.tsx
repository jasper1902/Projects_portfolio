import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithubSquare, FaCloudDownloadAlt } from "react-icons/fa";
import Theme from "./Theme";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { menuSelector, updateMenu } from "../store/slice/menuSlice";
import { useAppDispatch } from "../store/store";

const Nav = () => {
    const menuReducer = useSelector(menuSelector)
    const dispatch = useAppDispatch()

    const handleToggleNav = () => {
        dispatch(updateMenu({ menu: !menuReducer.menu }))
    }
    return (
        <>

            <nav className='bg-secondary'>
                <div className="flex justify-around items-center contianer mx-auto py-4 font-bold lg:text-2xl md:text-xl text-base lg:px-8 px-4 fixed top-0 left-0 right-0 z-10 bg-opacity-80 bg-secondary backdrop-blur-md">
                    <div>Logo</div>

                    <ul className='sm:flex hidden items-center gap-4'>
                        <li className="cursor-pointer hover:bg-secondary-focus p-4 rounded-md"><Link smooth={true} duration={500} to="home">Projects</Link></li>
                        <li className="cursor-pointer hover:bg-secondary-focus p-4 rounded-md"><Link smooth={true} duration={500} to="about">About Me</Link></li>
                        <li className="cursor-pointer hover:bg-secondary-focus p-4 rounded-md"><Link smooth={true} duration={500} to="contact">Contact</Link></li>
                        <li className="cursor-pointer bg-secondary-focus p-4 rounded-md "><a href={`${window.location.href}assets/ThanabodeeCV.pdf`} className="flex items-center gap-2"><FaCloudDownloadAlt />Download CV</a></li>
                        <li className="cursor-pointer"><a href="https://github.com/jasper1902/Projects_portfolio"><FaGithubSquare size={30} /></a></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <div className="md:flex hidden"><Theme /></div>
                        <GiHamburgerMenu className="md:hidden cursor-pointer" onClick={handleToggleNav} draggable />
                    </div>
                </div>
            </nav>


            {menuReducer.menu && <ul className='md:hidden gap-8 flex flex-col px-10 font-bold mt-14 fixed top-0 left-0 right-0 z-10 bg-opacity-80 bg-secondary backdrop-blur-md' draggable>
                <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-secondary-focus"><Link smooth={true} duration={500} to="home">Projects</Link></li>
                <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-secondary-focus"><Link smooth={true} duration={500} to="about">About Me</Link></li>
                <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-secondary-focus"><Link smooth={true} duration={500} to="contact">Contact</Link></li>
                <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-secondary-focus rounded-md "><a href={`${window.location.href}assets/ThanabodeeCV.pdf`} className="flex items-center gap-2"><FaCloudDownloadAlt />Download CV</a></li>
                <li className="mb-8 flex items-center gap-2"><Theme /><a href="https://github.com/jasper1902/Projects_portfolio"><FaGithubSquare size={30} /></a></li>
            </ul>}
        </>
    )
}

export default Nav