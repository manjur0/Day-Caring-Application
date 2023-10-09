

const Form = () => {
    return (
        <div>
            <div className=" container mx-auto md:mt-12 bg-gradient-to-r from-[#fdc830] to-[#f37335] md:grid md:grid-cols-2 md:gap-3 rounded-3xl md:mb-16 md:p-8 justify-center items-center">
                <div>
                    <h2 className="text-6xl font-semibold">Join us <br />
                        and stay tuned!</h2>
                </div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                               
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Form;