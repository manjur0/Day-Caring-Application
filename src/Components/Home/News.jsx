import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="my-12">
            <div className=" text-center md:mb-16 md:mt-20">
                <h2 className="text-6xl font-semibold mb-5">Recent News</h2>
                <p className="text-sm">Quisque id ultrices tellus, <br /> ac sodales ex. Cras nec ante viverra, bibendum justo eget,<br /> lacinia dui. Donec ligula ligula, elementum sit amet</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-6">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="hover:brightness-50" src="https://html.merku.love/shelly/assets/img/blog1.jpg" alt="Shoes" /></figure>
                    <Link to='/'>
                        <div className="card-body">
                            <h2 className="card-title">Campus clean workshop</h2>
                            <p className="text-sm">Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="hover:brightness-50" src="https://html.merku.love/shelly/assets/img/blog2.jpg " alt="Shoes" /></figure>
                    <Link to='/'>
                        <div className="card-body">
                            <h2 className="card-title">Campus clean workshop</h2>
                            <p className="text-sm">Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="hover:brightness-50" src="https://html.merku.love/shelly/assets/img/blog3.jpg" alt="Shoes" /></figure>
                    <Link to='/'>
                        <div className="card-body">
                            <h2 className="card-title">Campus clean workshop</h2>
                            <p className="text-sm">Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default News;