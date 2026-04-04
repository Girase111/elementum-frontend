

const AboutUs = () => {
    return (
        <article className='h-auto lg:h-163.25 w-full lg:max-w-461 mx-auto mt-20 lg:mt-79 text-[32px]/[42px] lg:text-[55px]/[66px] relative px-4 lg:px-0 pb-20 lg:pb-0'>
            <h2 className="text-center">
                <span className="relative inline-block">
                    <span className="bg-[#D7EEDD] border-[#D7EEDD] border-4 lg:border-12 rounded-[20px] lg:rounded-[60px]">What</span> our customer
                    <br />
                    says About Us
                    <img className="w-[50%] lg:w-92.75 absolute right-[50px] lg:right-[75px] bottom-[-10px] lg:-bottom-[20px] -z-10 animate-pulse-slow" src="hero/zig-yellow.svg" alt="zig" />
                </span>
            </h2>

            <div className="w-full md:w-[85%] lg:w-219.75 h-auto lg:h-89.5 mt-14 mx-auto bg-[#D7EEDD4D] rounded-[30px] lg:rounded-[60px] p-8 md:p-14 lg:px-22 lg:py-13.25 relative">
                <p className="text-[18px]/[28px] md:text-[24px]/[34px] lg:text-[30px]/[42px] text-center font-[Satoshi-Regular] relative z-10 md:px-8">
                    Elementum  delivered the site with in the timeline
                    <br className="hidden lg:inline" />
                    as they requested. In the end, the client found a 50%
                    increase in traffic with in days since its launch. They
                    also had an impressive ability to use technologies that
                    the company hasn`t used, which have also proved to
                    be easy to use and reliable
                </p>
                <img className="absolute w-8 md:w-14 lg:w-17.25 top-4 md:top-8 lg:top-11.25 left-4 md:left-8 lg:left-11.25" src="comma.png" alt="comma" />
                <img className="absolute w-8 md:w-14 lg:w-17.25 bottom-4 md:bottom-8 lg:bottom-10 right-4 md:right-12 lg:right-46.25 rotate-180" src="comma.png" alt="comma" />
            </div>
            {/* Left */}
            <img className="absolute w-12 md:w-20 lg:w-31.25 left-2 md:left-12 lg:left-40.25 top-[130px] md:top-6 lg:top-0 z-10 animate-float" src="a1.png" alt="person" />
            <img className="hidden lg:block absolute w-18.5 left-17.75 top-50 animate-float-reverse" src="a2.png" alt="person" />
            <img className="hidden lg:block absolute w-54 left-51 top-70 animate-float" src="a3.png" alt="person" />
            <img className="hidden lg:block absolute w-30.75 left-9.5 animate-float-reverse" src="a4.png" alt="person" />

            {/* Right */}
            <img className="hidden lg:block absolute w-36.5 left-410.75 top-0 animate-float" src="a5.png" alt="person" />
            <img className="hidden lg:block absolute w-22.5 left-369.5 top-25 animate-float-reverse" src="a6.png" alt="person" />
            <img className="hidden lg:block absolute w-28 left-375 top-65 animate-float" src="a7.png" alt="person" />
            <img className="absolute w-16 md:w-28 lg:w-73.75 right-2 md:right-8 left-auto lg:left-396.75 bottom-2 md:-bottom-2 lg:-bottom-3.75 z-10 animate-float-reverse" src="a8.png" alt="person" />

        </article>
    )
}

export default AboutUs

