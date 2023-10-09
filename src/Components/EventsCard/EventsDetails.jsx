import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { BiTime, BiCurrentLocation } from "react-icons/bi";

const EventsDetails = () => {
    const eventDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const event = eventDetails.find(event => event.id === idInt)
    console.log(eventDetails, event, idInt, id);
    return (
        <div className="container mx-auto my-16 md:grid md:grid-cols-4 md:gap-5">
            <div className="col-span-3">
                <img className="w-full rounded-xl " src={event.picture} alt="" />
                <h2 className="text-3xl my-6 font-semibold">{event.title}</h2>
                <p className="text-lg">{event.description}</p>

                <br />
                <hr className="my-8" />
                <Link to="/"><button className="btn bg-[#F37335] text-white hover:bg-black">Back to Home</button></Link>

                {/* Right Sidebar */}
            </div>
            <div className="">
                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body text-left border-2 border-[#fd7e14] rounded-lg">
                        <div>
                        <h2 className="card-title">Our Location</h2>
                            <h4 className='font-semibold flex gap-2'><BiCurrentLocation className='text-[#fd7e14] text-2xl'></BiCurrentLocation> Address</h4>
                            <p>Lakshmipur Bangladesh</p>
                        </div>
                        <div className="my-8">
                        <h2 className="card-title">Open Day</h2>
                            <h4 className='font-semibold flex gap-2'><BiTime className='text-[#fd7e14] text-2xl'></BiTime> Work Time</h4>
                            <p>Mon - Fri 8 AM - 5 PM</p>
                        </div>
                        <div>
                        <h2 className="card-title">More Details</h2>
                            <h4 className='font-semibold flex gap-2'> <FaPhone className='text-[#fd7e14]'></FaPhone> Call</h4>
                            <p>+2 342 5446 67</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsDetails;