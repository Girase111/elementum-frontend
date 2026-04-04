import OfferingCard from "../utils/OfferingCard"

const Offering = () => {
    return (
        <article className='h-auto lg:h-214 w-full lg:max-w-404.5 mx-auto mt-20 lg:mt-100 px-4 lg:px-0'>

            <h2 className="text-[40px]/[50px] lg:text-[100px]/[116px] mb-8 lg:mb-15">
                <span className="relative inline-block">
                    What we <span className="bg-[#D7EEDD] border-[#D7EEDD] border-4 lg:border-12 rounded-[20px] lg:rounded-[60px]">can</span>
                    <br />
                    offer
                    <img className="absolute w-[80%] max-w-[200px] lg:max-w-none lg:w-93.75 top-full lg:top-48.75 left-0 lg:-left-5 -z-10" src="hero/zig-yellow.svg" alt="zig-yellow" />
                    {" "}
                    you!
                </span>
            </h2>

            <div>
                <div className="border border-[#B1B1B1]"></div>
                <OfferingCard
                    t1={`Office of multiple\ninterest content`}
                    t2="Colaborative & partnership"
                />
                <OfferingCard
                    t1={`The hanger US Air force\ndigital experimental`}
                    t2="We talk about our weight"
                />
                <OfferingCard
                    t1={`Delta faucet content,\nsocial, digital`}
                    t2="Piloting digital confidence"
                    img="mockupr.png"
                />


                <div className="border border-[#B1B1B1]"></div>

            </div>


        </article>
    )
}

export default Offering