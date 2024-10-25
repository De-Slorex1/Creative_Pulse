import { Link, NavLink, useNavigate} from 'react-router-dom';
import logo from '/logo.svg';import { navBg } from './bg';
;

const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <div style={navBg}>
            <div className='py-7 scroll-smooth'>
                <div className='border-2 border-white rounded-full flex flex-row items-center justify-between w-full'>
                    <div>
                        <Link to='/'><img src={logo} alt={logo} className='w-[100%] h-[75px]' /></Link>
                    </div>
                    <div className='px-4 text-white'>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3 hover:bg-dark-orange hover:px-4 hover:py-2 hover:rounded-full hover:transition-all hover:duration-0 hover:delay-0 hover:ease-out mx-1'}} to="/works" >Works</NavLink>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3 hover:bg-dark-orange hover:px-4 hover:py-2 hover:rounded-full hover:transition-all hover:duration-0 hover:delay-0 hover:ease-out mx-1'}} to="/services">Our Services</NavLink>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3 hover:bg-dark-orange hover:px-4 hover:py-2 hover:rounded-full hover:transition-all hover:duration-0 hover:delay-0 hover:ease-out mx-1'}} to="/faqs">FAQs</NavLink>
                        <button onClick={() => navigate('/bookcall', {replace: true})} className='px-9 font-normal text-md bg-dark-orange rounded-full py-2 mx-2 hover:bg-transparent hover:border hover:transition-all hover:duration-0 hover:delay-0 hover:ease-in' to="/bookcall">Book A Call</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;