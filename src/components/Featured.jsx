

const Featured = () => {
    return (
        <article className='w-full lg:max-w-399.75 h-auto lg:max-h-342.5 mt-20 lg:mt-50 mx-auto px-4 lg:px-0 overflow-hidden lg:overflow-visible'>

            {/* Top Part */}
            <div className='first-part h-auto lg:h-150 flex flex-row md:flex-col lg:flex-row items-center mb-10 lg:mb-40 gap-4 md:gap-10 lg:gap-65.5 relative'>
                <div className='right w-[55%] md:w-full lg:w-184.25 flex flex-col gap-2 lg:gap-10 z-10 md:items-center md:text-center lg:items-start lg:text-left'>
                    <h2 className="text-[20px]/[24px] sm:text-[30px]/[36px] lg:text-[55px]/[76px] font-[Gerbil]"><span className='relative inline-block'>Tomorrow
                        <span className="absolute -right-2 lg:-right-6.25 -bottom-1 lg:-bottom-2 -z-10 w-[110%] lg:w-auto"><img src="hero/zig-yellow.svg" alt="svg" className="w-full lg:w-auto" /></span></span>
                        {" "}
                        should<br />
                        be better than <span className="bg-[#D7EEDD] border-[#D7EEDD] border-2 lg:border-12 rounded-[10px] lg:rounded-[60px]">today</span></h2>
                    <p className="text-[10px]/[14px] sm:text-[14px]/[20px] lg:text-[24px] font-[Satoshi-Regular]">
                        We are a team of strategists, designers communicators, researchers.
                        Togeather, we believe that progress only happens when you refuse
                        <br className="hidden lg:block" />
                        to play things safe.</p>
                    <div className="flex gap-2 lg:gap-4 items-center group cursor-pointer w-fit">
                        <p className="text-[12px]/[16px] lg:text-[20px]/[24px] font-[Satoshi-Medium] transition-colors duration-300 group-hover:text-gray-500">
                            Read more
                        </p>
                        <img className="align-bottom w-14 lg:w-36 transition-transform duration-300 group-hover:translate-x-2" src="Featured/arrow.svg" alt="arrow" />
                    </div>
                </div>
                <div className="left w-[45%] md:w-full lg:w-auto flex justify-center mt-0 md:mt-8 lg:mt-0">
                    <img className="w-full md:w-3/4 aspect-square lg:w-150 lg:h-150 object-cover object-right rounded-full transition-transform duration-700 hover:scale-105" src="Featured/f1.png" alt="" />
                </div>
                <img className="hidden sm:block absolute bottom-[105px] left-[165px] lg:bottom-28  lg:left-[400px] w-10 sm:w-20 lg:w-auto -z-10 lg:z-auto" src="Featured/bcir.svg" alt="" />
                <img className="absolute max-w-[30%] lg:max-w-[50%] -right-2 lg:-right-15 bottom-4 lg:bottom-90 -z-10 w-12 lg:w-auto" src="Featured/sq1.svg" alt="" />
            </div>
            {/* buttom Part */}
            <div className="second-part h-auto lg:h-150 flex flex-row-reverse md:flex-col lg:flex-row-reverse items-center relative gap-4 md:gap-10 lg:gap-65.5">
                <div className='left w-[55%] md:w-full lg:w-184.25 flex flex-col gap-2 lg:gap-10 z-10 md:items-center md:text-center lg:items-start lg:text-left'>
                    <h2 className="text-[20px]/[24px] sm:text-[30px]/[36px] lg:text-[55px]/[76px] font-[Gerbil]"><span className="relative inline-block">
                        <span className="bg-[#D7EEDD] border-[#D7EEDD] border-2 lg:border-12 rounded-[10px] lg:rounded-[60px]">See</span> how we can help you
                        {" "}
                        <span className="relative inline-block mt-0">
                            progress
                            <img className="w-[110%] lg:w-92.5 absolute -z-10 top-full lg:top-[55px] left-0 lg:left-[8px] lg:-right-7.5" src="hero/zig-yellow.svg" alt="zig-zag" />
                        </span>
                    </span>
                    </h2>
                    <p className="text-[10px]/[14px] sm:text-[14px]/[20px] lg:text-[24px] font-[Satoshi-Regular]">We add a layer of fearless insights and action that allows change
                        makers to accelerate their progress in areas such as brand, design
                        digital, comms and social research.</p>
                    <div className="flex gap-2 lg:gap-4 items-center group cursor-pointer w-fit">
                        <p className="text-[12px]/[16px] lg:text-[20px]/[24px] font-[Satoshi-Medium] transition-colors duration-300 group-hover:text-gray-500">
                            Read more
                        </p>
                        <img className="align-bottom w-14 lg:w-36 transition-transform duration-300 group-hover:translate-x-2" src="Featured/arrow.svg" alt="arrow" />
                    </div>
                </div>
                <div className="right w-[45%] md:w-full lg:w-auto flex justify-center mt-0 md:mt-8 lg:mt-0">
                    <img className="w-full md:w-3/4 aspect-square lg:w-150 lg:h-150 object-cover object-left rounded-full transition-transform duration-700 hover:scale-105" src="Featured/f2.png" alt="" />
                </div>
                {/* vectors */}
                <img className="absolute w-10 lg:w-68.5 -z-10 left-[-10px] lg:-left-6.25 top-0" src="Featured/polygon.svg" alt="polygon" />
                <img className="hidden lg:block absolute w-68.5 -bottom-10 left-100" src="Featured/polygon.svg" alt="polygon" />
                <img className="absolute w-[80%] max-w-full lg:w-360 -top-[65px] lg:-top-65 -z-10 right-[-30px] lg:-right-33.75 opacity-30 lg:opacity-100" src="Featured/wave.svg" alt="wave" />
            </div>

        </article>
    )
}

export default Featured