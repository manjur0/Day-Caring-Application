import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animation = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Animation;