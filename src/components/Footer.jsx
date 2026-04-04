import GridCard from "../utils/GridCard"


const Footer = () => {
  return (
    <article className='h-auto lg:h-324.25 bg-[#D7EEDD] mt-20 lg:mt-50 pb-10 lg:pb-0'>
      <div className="w-full lg:w-480 mx-auto relative px-4 lg:px-0">
        <div className="pt-10 md:pt-20 lg:pt-35 flex flex-col items-center">
          <h2 className="text-[40px]/[50px] md:text-[50px]/[60px] lg:text-[100px]/[116px] text-center cursor-pointer">Subscribe to <br />
            our newsletter</h2>
          <p className="text-center mt-4 md:mt-6 lg:mt-2.50 text-lg md:text-xl lg:text-2xl font-[Satoshi-Regular]">To make your stay special and even more memorable</p>
          <button className="bg-black h-12 md:h-14 lg:h-18 w-48 md:w-52 lg:w-58.25 text-[16px] md:text-[18px] lg:text-[20px]/[30px] text-white font-bold font-[Satoshi-Regular] mt-8 md:mt-10 lg:mt-8.75 rounded-full transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg">Subscribe Now</button>
        </div>
        <div className="border border-[#B1B1B1] w-full lg:w-400 mx-auto mt-10 lg:mt-25"></div>
        <div className="hidden lg:block wavey">
          <img className=" absolute left-165 top-0 w-41" src="wavy-arrow.svg" alt="wavy-arrow" />
          <img className=" absolute top-0 left-187.5 w-41" src="wavy-arrow.svg" alt="wavy-arrow" />
          <img className="absolute rotate-180 left-405.5 top-75" src="hero/light-violet.svg" alt="svg" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-8 lg:px-40 gap-10 md:gap-6 lg:gap-20 mt-16 md:mt-24 lg:mt-[200px]">
          <GridCard
            head="Company"
            li1={`Home`}
            li2={`Studio`}
            li3={`Service`}
            li4={`Blog`}
          />

          <GridCard
            head="Terms & Policies"
            li1={`Privacy Policy`}
            li2={`Terms & Conditions`}
            li3={`Explore`}
            li4={`Accessibility`}
          />

          <GridCard
            head="Follow Us"
            li1={`Instagram`}
            li2={`LinkedIn`}
            li3={`Youtube`}
            li4={`Twitter`}
          />

          <GridCard
            head="Contact US"
            li1={`1498w Fluton ste, STE\n2D Chicgo, IL 63867.`}
            li2={`(123) 456789000`}
            li3={`info@elementum.com `}

          />

        </div>
        <footer className="text-center mt-50">
          <span>©2023 Elementum. All rights reserved</span>
        </footer>
      </div>
    </article>
  )
}

export default Footer