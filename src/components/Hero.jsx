import React from 'react'

const Hero = () => {
    return (
        <div className='h-auto lg:h-252.75 mt-16 lg:mt-32 w-full lg:max-w-480 mx-auto px-4 lg:px-0'>
            {/* Hero Title */}
            <div className="hero-title relative font-[Gerbil] flex flex-col lg:text-[100px] m-auto w-full lg:w-3/4 text-center">
                <h1 className="text-[38px]/[48px] md:text-[60px]/[80px] lg:text-[100px]/[126px] text-center font-[Gerbil] leading-tight">
                    The <span className="relative inline-block">
                        thinkers
                        <span className="absolute -left-4 lg:-left-11.5 -bottom-1 lg:-bottom-2.5 -z-10 w-full lg:w-auto"><img src="hero/zig-yellow.svg" alt="" className="w-full lg:w-auto animate-pulse-slow" /></span>
                    </span> and <br />

                    doers were{" "}
                    <span className='relative'>
                        changing
                        <span className='bg-[#FFC2EA] absolute -z-10 h-10 lg:h-34.25 px-2 w-[110%] lg:w-101.25 -right-[5%] lg:-right-8.75 rounded-[30px] lg:rounded-[70px] top-[10%] lg:top-auto animate-pulse-slow'></span>
                    </span> <br />

                    the <span className="bg-green-200 px-4 lg:px-6 py-1 lg:py-2 rounded-[30px] lg:rounded-[70px]">
                        status
                    </span> Quo with
                </h1>
                <img className='hidden lg:block absolute -right-28 bottom-18.75 animate-float' src="hero/light-violet.svg" alt="violet-svg" />
                {/* Hero Text */}
                <div className='hero-text mx-auto w-full text-base/[24px] lg:text-2xl/[36px] text-center font-[Satoshi-Regular] mt-4 lg:mt-8'>
                    <p>We are a team of strategists, designers communicators, researchers. Togeather,<br className="hidden lg:block" />
                        we belive that progress only hghappens when you refuse to play things safe.</p>
                </div>
            </div>
            {/* Image wave */}

            <div className='my-20 lg:my-70'>
                <div className='relative flex justify-center w-full'>
                    <img className='h-16 w-16 lg:h-56.5 lg:w-56.5 absolute left-4 lg:left-9.5 top-[-75px] lg:top-auto animate-float' src="hero/left-1.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-49.75 -bottom-37.5 animate-float-reverse' src="hero/left-2.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-138.25 -top-42.5 animate-float' src="hero/left-3.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-169.25 top-11.25 animate-float-reverse' src="hero/left-4.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-414 animate-float' src="hero/right-4.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-353.5 -bottom-11.25 animate-float-reverse' src="hero/right-3.png" alt="person" />
                    <img className='hidden lg:inline-block h-56.5 w-56.5 absolute left-244.25 -top-31.25 animate-float' src="hero/right-1.png" alt="person" />
                    <img className='h-12 w-12 lg:h-56.5 lg:w-56.5 absolute right-4 lg:left-286 top-[-100px] lg:-top-5 animate-float-reverse' src="hero/right-2.png" alt="person" />


                </div>
            </div>



        </div>
    )
}

export default Hero