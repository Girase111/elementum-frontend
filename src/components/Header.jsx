import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between lg:justify-around h-auto py-4 lg:py-0 lg:h-25 items-center mx-auto w-full px-4 lg:px-0 lg:max-w-480'>
            <span className='text-[28px] font-[Gerbil] font-normal'>Elementum</span>
            <ul className='hidden lg:flex gap-10 text-[18px] justify-center font-[Satoshi-Medium]'>
                <li className='cursor-pointer transition-colors duration-300 hover:text-gray-500'>Home</li>
                <li className='cursor-pointer transition-colors duration-300 hover:text-gray-500'>Studio</li>
                <li className='cursor-pointer transition-colors duration-300 hover:text-gray-500'>Services</li>
                <li className='cursor-pointer transition-colors duration-300 hover:text-gray-500'>Contact</li>
                <li className='cursor-pointer transition-colors duration-300 hover:text-gray-500'>FAQs</li>

            </ul>
            <div className='flex flex-col justify-center items-center gap-1 w-auto lg:w-50 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <div className='w-9 border border-black'></div>
                <div className='w-9 border border-black'></div>
            </div>
        </header>
    )
}

export default Header