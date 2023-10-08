import banner from "../../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="container mx-auto flex justify-center items-center gap-2 md:mt-8">
            <div>
                <h2 className="text-6xl font-semibold ">The Smarter Way to Learn <span className="text-[#F37335] underline"> Anything</span></h2>
                <p className="mt-4">Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper sed
                </p>
                <input type="text"  placeholder="Search Class" className="input input-bordered w-full max-w-md p-4 mt-6 text-[#F37335]"/> 
                <button className=" btn hover:bg-black bg-[#F37335] text-white">Search</button>

            </div>
            <div>
                <img className="rounded-xl" src={banner} alt="" />
            </div>
        </div >
    );
};

export default Banner;