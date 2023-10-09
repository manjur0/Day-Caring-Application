import { Link } from "react-router-dom";


const EventsCard = ({ event }) => {
    console.log(event);
    const { title, picture, price, date, id } = event;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="hover:brightness-50" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{date}</p>
                    <div className="card-actions ">
                       {
                        <Link to={`/event/${id}`}> <button className="btn bg-[#F37335] text-white hover:bg-black">Details  {price}</button></Link>
                       }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventsCard;