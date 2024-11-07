import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // cSpell:disable-line
import { faArrowLeft, faBell, faBowlFood, faEnvelope, faFeatherAlt,faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons' // cSpell:disable-line
import {faHome} from '@fortawesome/free-solid-svg-icons' //cSpell:disable-line

const NavItem = ({icon, text}) =>(  

    <div className='flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200 '>
        <FontAwesomeIcon icon={icon} className='text-2xl mr-4'/>   
        <span className="text-xl hidden xl:inline"> {text}</span>
    </div>


)




export function Sidebar(){


    return(
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
         <FontAwesomeIcon icon = {faBowlFood} className='text-orange-400 text-3xl m-4' />

        <nav>
            <NavItem icon={faHome} text="Home" />
            <NavItem icon={faBell} text="Notifications" />
            <NavItem icon={faUser} text="Profile" />
            <NavItem icon={faMagnifyingGlass} text="Search" />
            <NavItem icon={faEnvelope} text="Messages" />
            <NavItem icon={faArrowLeft} text="Exit" />
        </nav>

        <button className='bg-orange-400 text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer'>
        <FontAwesomeIcon icon = {faFeatherAlt} className='text-white text-3xl m-4 inline xl:hidden' />
        <span className='hidden xl:inline'>Twitter</span>

        </button>

        
        </div>
    )
}