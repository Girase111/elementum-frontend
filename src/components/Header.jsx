import React, { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
<header className='fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md shadow-md flex justify-between lg:justify-around h-auto py-4 lg:py-0 lg:h-25 items-center px-4'>
            {/* Logo */}
            <span className='text-[28px] font-[Gerbil] font-normal cursor-pointer'>
                Elementum
            </span>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex gap-10 text-[18px] justify-center font-[Satoshi-Medium]'>

                <li>
                    <a
                        href="#home"
                        className='cursor-pointer transition-colors duration-300 hover:text-gray-500'
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#studio"
                        className='cursor-pointer transition-colors duration-300 hover:text-gray-500'
                    >
                        Studio
                    </a>
                </li>

                <li>
                    <a
                        href="#services"
                        className='cursor-pointer transition-colors duration-300 hover:text-gray-500'
                    >
                        Services
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        className='cursor-pointer transition-colors duration-300 hover:text-gray-500'
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        className='cursor-pointer transition-colors duration-300 hover:text-gray-500'
                    >
                        Contact
                    </a>
                </li>

            </ul>

            {/* Mobile Hamburger */}
            <button
                className='lg:hidden flex flex-col gap-1'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className='w-8 border border-black'></div>
                <div className='w-8 border border-black'></div>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden'>
                    <ul className='flex flex-col items-center py-6 gap-6 text-lg'>

                        <li>
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#studio"
                                onClick={() => setMenuOpen(false)}
                            >
                                Studio
                            </a>
                        </li>

                        <li>
                            <a
                                href="#services"
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            )}

        </header>
    )
}

export default Header