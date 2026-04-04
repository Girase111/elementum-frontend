

function OfferingCard({ t1, t2, img = null }) {
    return (
        <>
            <div className="text flex flex-col md:flex-row my-6 lg:my-8 justify-between items-start md:items-center relative gap-2 lg:gap-0 pb-4 group cursor-pointer transition-all duration-300 hover:opacity-80">
                <span className="font-[Satoshi-Regular] text-[18px]/[26px] lg:text-[30px]/[42px] whitespace-normal lg:whitespace-pre-line w-full md:w-[35%] lg:w-2/6 text-gray-600 lg:text-inherit">
                    {t1}
                </span>
                <div className="flex justify-between items-center w-full md:w-[60%] lg:w-4/6 mt-1 md:mt-0 md:pr-6 lg:pr-0 gap-2 md:gap-4">
                    <div className="font-[Gerbil] text-[28px]/[36px] lg:text-[54px]/[116px] leading-tight flex-1 min-w-0 wrap-break-word">
                        {t2}
                    </div>
                    <img className="w-14 md:w-16 lg:w-auto shrink-0 transition-transform duration-300 group-hover:translate-x-3 relative z-10" src="Featured/arrow.svg" alt="arrow" />
                </div>
                <img className="hidden lg:block absolute w-40 -top-5.5 right-113.75 -z-10" src={img} alt="" />
            </div>
            <div className="border border-[#B1B1B1]"></div>
        </>
    )
}

export default OfferingCard