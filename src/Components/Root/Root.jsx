
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;