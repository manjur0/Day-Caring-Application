import logo from '../../assets/logo.png'
import { FaPhone } from "react-icons/fa";
import { BiTime, BiCurrentLocation } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto my-8  md:flex md:justify-between md:items-center border-b-2 pb-4'>
            <div >
                <Link to='/'><img  src={logo} alt="" /></Link>
            </div>
            <div className='flex md:flex px-4 justify-center items-center gap-8'>
                <div>
                    <h4 className='font-semibold flex gap-2'> <FaPhone className='text-[#fd7e14]'></FaPhone> Call</h4>
                    <p>+2 342 5446 67</p>
                </div>
                <div>
                    <h4 className='font-semibold flex gap-2'><BiTime className='text-[#fd7e14] text-2xl'></BiTime> Work Time</h4>
                    <p>Mon - Fri 8 AM - 5 PM</p>
                </div>
                <div>
                    <h4 className='font-semibold flex gap-2'><BiCurrentLocation className='text-[#fd7e14] text-2xl'></BiCurrentLocation> Address</h4>
                    <p>Lakshmipur Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Header;