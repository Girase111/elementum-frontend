

const GridCard = ({head , li1 , li2 , li3 , li4}) => {
  return (
      <div>
            <h3 className="text-[22px]/[30px] mb-10">{head}</h3>
             <div className="text-[20px]/[30px] font-[Satoshi-Regular] flex flex-col gap-4">
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-500 w-fit">{li1}</span>
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-500 w-fit">{li2}</span>
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-500 w-fit">{li3}</span>
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-500 w-fit">{li4}</span>
             </div>
          </div>
  )
}

export default GridCard