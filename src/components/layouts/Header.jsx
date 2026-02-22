import Images from "../Images"
import Logo from "../../assets/Logo.png"
import Container from "../Container"
import Button from "../Button"


const Header = () => {
    return (
        <>
        <header className="py-[35px] fixed w-full ">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-[416px]">
                        {/* logo */}
                        <div className="logo">
                            <Images imgSrc={Logo}/>
                        </div>
                        {/* navbar */}
                        <nav>
                            <ul className="flex gap-x-[45px]">
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
                    <div className="btn">
                        <Button btnText={'Register'} className={'px-[25px] py-[14.5px]'}/>
                    </div>
                </div>
            </Container>
        </header>
        </>
    )
}

export default Header