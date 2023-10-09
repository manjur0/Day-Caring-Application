import { Link } from "react-router-dom";


const EventsCard = ({ event }) => {
    console.log(event);
    const { title, description, picture, price, date, id } = event;
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl mx-6 my-4">
                <figure><img className="hover:brightness-50" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        description.length > 20 ? <p>{description.slice(0, 70)}</p> : <p>{description}</p>
                    }
                    <p>{date}</p>
                    <div className="card-actions  md:flex justify-between items-center">
                        {
                            <Link to={`/event/${id}`}> <button className="btn bg-[#F37335] text-white hover:bg-black">Details  </button></Link>
                        }
                        <button className="text-[#F37335] text-lg">$ {price}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventsCard;