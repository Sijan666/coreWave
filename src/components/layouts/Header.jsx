import Images from "../Images"
import Logo from "../../assets/Logo.png"
import Container from "../Container"
import Button from "../Button"
import { FaBarsStaggered } from "react-icons/fa6"
import { useState } from "react"


const Header = () => {

    const [show , setShow] = useState(false)

    const handleClick = ()=>{
        setShow(!show)
    }

    return (
        <>
        <header className="py-[35px] lg:fixed w-full ">
            <Container>
                <div className="hidden lg:block">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center lg:gap-x-[416px] gap-y-5">
                            {/* logo */}
                            <div className="logo">
                                <Images imgSrc={Logo}/>
                            </div>
                            {/* navbar */}
                            <nav>
                                <ul className="flex flex-col lg:flex-row gap-y-5 text-center gap-x-[45px]">
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Home</li>
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">About</li>
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Portfolio</li>
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Service</li>
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Blog</li>
                                    <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Testimonial</li>
                                </ul>
                            </nav>
                        </div>
                        {/* btn */}
                        <div className="btn hidden lg:block">
                            <Button btnText={'Register'} className={'px-[25px] py-[14.5px]'}/>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className="lg:hidden">
                    <div className="flex justify-between px-3 relative">
                        <div className="logo">
                            <Images imgSrc={Logo}/>
                        </div>
                        <button onClick={handleClick}><FaBarsStaggered /></button>
                    </div>
                    {show && ((
                    <div className="bg-white/5 backdrop-blur-lg rounded-[10px] py-8 w-[90%] overflow-hidden border-2 border-gray-300 absolute top-18 left-1/2 -translate-x-1/2">
                        <nav>
                            <ul className="flex flex-col lg:flex-row gap-y-5 text-center gap-x-[45px]">
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Home</li>
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">About</li>
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Portfolio</li>
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Service</li>
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Blog</li>
                                <li className="text-[#1B1B1B] text-base font-medium hover:text-[#06C279] duration-300 cursor-pointer">Testimonial</li>
                            </ul>
                        </nav>
                        <div className="btn text-center pt-5">
                            <Button btnText={'Register'} className={'px-[25px] py-[14.5px]'}/>
                        </div>
                    </div>
                    ))}
                </div>
            </Container>
        </header>
        </>
    )
}

export default Header