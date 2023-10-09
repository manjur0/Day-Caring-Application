

const Teacher = () => {
    return (
        <div>
            <div className=" text-center my-20">
                <h2 className="text-6xl font-semibold mb-5">Our Awesome <br />
                    <span className="text-[#F37335]">Mentors </span>
                </h2>
                <p className="text-sm">Quisque id ultrices tellus, <br /> ac sodales ex. Cras nec ante viverra, bibendum justo eget,<br /> lacinia dui. Donec ligula ligula, elementum sit amet</p>
            </div>

            {/* teacher lish and img */}
            <div className="mb-16 container mx-auto grid my-3 p-8 md:grid-cols-4 md:gap-5">
                <div className="md:w-60 mx-auto" >
                    <img className="rounded-xl" src="https://html.merku.love/shelly/assets/img/img5.jpg" alt="" />
                    <div className="text-center">
                        <h4 className="text-xl">Polina Kerston</h4>
                        <p className="text-sm text-blue-400 cursor-pointer">English Teacher</p>
                    </div>
                </div>
                <div className="md:w-60 mx-auto" >
                    <img className="rounded-xl w-full" src="https://html.merku.love/shelly/assets/img/img8.jpg" alt="" />
                    <div className="text-center">
                        <h4 className="text-xl">Polina Kerston</h4>
                        <p className="text-sm text-blue-400 cursor-pointer">English Teacher</p>
                    </div>
                </div>
                <div className="md:w-60 mx-auto" >
                    <img className="rounded-xl w-full" src="https://html.merku.love/shelly/assets/img/img7.jpg" alt="" />
                    <div className="text-center">
                        <h4 className="text-xl">Polina Kerston</h4>
                        <p className="text-sm text-blue-400 cursor-pointer">English Teacher</p>
                    </div>
                </div>
                <div className="md:w-60 mx-auto" >
                    <img className="rounded-xl w-full" src="https://html.merku.love/shelly/assets/img/img6.jpg" alt="" />
                    <div className="text-center">
                        <h4 className="text-xl">Polina Kerston</h4>
                        <p className="text-sm text-blue-400 cursor-pointer">English Teacher</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Teacher;