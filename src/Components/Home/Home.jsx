import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import News from "./News";
import Teacher from "./Teacher";
import Welcome from "./Welcome";
import EventsCard from "../EventsCard/EventsCard";


const Home = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>

            {/* Events Container */}
            <div className=" text-center my-20">
                <h2 className="md:text-6xl text-3xl font-semibold mb-5">Introduction to our  <br /><span className="text-[#F37335]">events</span>
                </h2>
                <p className="text-sm">Nunc consectetur ex nunc,<br /> id porttitor leo semper eget. Vivamus interdum, <br />mauris quis cursus sodales, urn</p>
            </div>
            <div className="container mx-auto md:grid md:grid-cols-3 gap-4">


                {
                    events.map(aEvent => <EventsCard
                        key={aEvent.id}
                        event={aEvent}
                    ></EventsCard>)
                }
            </div>
            <Teacher></Teacher>
            <News></News>
        </div>
    );
};

export default Home;