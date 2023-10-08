import Banner from "../Banner/Banner";
import Teacher from "./Teacher";
import Welcome from "./Welcome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Teacher></Teacher>
        </div>
    );
};

export default Home;