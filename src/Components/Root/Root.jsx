
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../navbar/Navbar';

const Root = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;