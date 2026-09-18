import BongoLi from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <>
        <section className="w-full bg-[#FAF5F1] py-16 border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
                <div className="space-y-4">
                    <h1 className='text-5xl font-extrabold text-[#2c2c2c]'>Build Your Ideal<br/><span className="text-[#E0533c]">Development <span className="text-[#7c1777]">Stack</span></span></h1>
                    <p className="text-gray-600 text-lg">Explore frontend,backend,database,and toolig options,<br/>compare themside by side,and put together the stack that fits your next projects.</p>
                    <div className="flex gap-4 pt-2">
                        <button className="btn btn-active btn-secondary">Explore Technologies</button>
                        <button className="btn btn-outline btn-secondary">Learn More</button>
                    </div>
                </div>
                <img src={BongoLi} alt="" />
            </div>
        </section>
        </>
    );
};
export default Banner;