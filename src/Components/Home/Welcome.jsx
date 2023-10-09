
const Welcome = () => {
    return (
        <div className="container mx-auto">
            <div className=" text-center my-20">
                <h2 className="text-6xl font-semibold mb-5">Welcome to  <br /><span className="text-[#F37335]">Shelly</span>
                </h2>
                <p className="text-sm">Nunc consectetur ex nunc,<br /> id porttitor leo semper eget. Vivamus interdum, <br />mauris quis cursus sodales, urn</p>
            </div>
            <div className="grid md:grid-cols-4 gap-3 lg:my-8">
                <div className="card bg-base-100 shadow-lg " data-aos="fade-up"
                    data-aos-duration="1000">
                    <figure className=" px-10 pt-10">
                        <img src="https://html.merku.love/shelly/assets/img/icon5.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Awesome Teachers</h2>
                        <p className="text-sm">Vivamus interdum, mauris interdum quis curdum sodales</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg" data-aos="fade-down"
                    data-aos-duration="1000">
                    <figure className=" px-10 pt-10">
                        <img src="https://html.merku.love/shelly/assets/img/icon7.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Global Certificate</h2>
                        <p className="text-sm">Vivamus interdum, mauris interdum quis curdum sodales</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg" data-aos="fade-up"
                    data-aos-duration="1000">
                    <figure className=" px-10 pt-10">
                        <img src="https://html.merku.love/shelly/assets/img/icon8.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Programm</h2>
                        <p className="text-sm">Vivamus interdum, mauris interdum quis curdum sodales</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg" data-aos="fade-down"
                    data-aos-duration="1000">
                    <figure className=" px-10 pt-10">
                        <img src="https://html.merku.love/shelly/assets/img/icon9.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Student Support Service</h2>
                        <p className="text-sm">Vivamus interdum, mauris interdum quis curdum sodales</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;